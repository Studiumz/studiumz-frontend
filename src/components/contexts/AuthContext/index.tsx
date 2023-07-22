import { createContext, useContext, useEffect, useState } from "react";
import { User as FirebaseUser, User, UserInfo } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase_app from "@/components/config/firebase";
import nookies from "nookies";
import { AuthContextInterface, CustomUser } from "./interface";
import { cfg } from "@/components/config";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: any) {
  const router = useRouter()

  const [user, setUser] = useState<UserInfo | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<CustomUser>();

  function fetchUserInfo(at: string) {
    axios.get(`${cfg.API}/auth/userinfo`, {
      headers: {
        Authorization: `Bearer ${at}`
      }
    })
    .then(res => {
      setUserInfo(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    return getAuth(firebase_app).onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        console.log("token", token);
        const options = {
          headers: {
            "Content-Type": "application/json",
            "X-Google-Id-Token": token,
          },
        };

        axios
          .post(`${cfg.API}/auth/sign-in/google`, {}, options)
          .then((response) => {
            nookies.set(undefined, "userId", response.data.user_id, {
              path: "/",
            });
            nookies.set(undefined, "accessToken", response.data.access_token, {
              path: "/",
            });
            setUserId(response.data.user_id);
            setAccessToken(response.data.access_token);
            setLoading(false);
            fetchUserInfo(response.data.access_token);
          })
          .catch((error) => {
            console.error(error);
          });

        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
      setLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   const handle = setInterval(
  //     async () => {
  //       const user = getAuth(firebase_app).currentUser;
  //       if (user) await user.getIdToken(true);
  //     },
  //     10 * 60 * 1000,
  //   );

  //   return () => clearInterval(handle);
  // }, []);

  useEffect(() => {
    if (router.isReady && userInfo && userInfo.status === 0) {
      router.push("/onboarding");
    }
  }, [router, userInfo]);

  return (
    <AuthContext.Provider
      value={{ user, userId, accessToken, loading, setLoading, userInfo, setUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}
