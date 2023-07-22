import { createContext, useContext, useEffect, useState } from "react";
import { User as FirebaseUser, User, UserInfo } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase_app from "@/components/config/firebase";
import nookies from "nookies";
import { AuthContextInterface } from "./interface";
import { cfg } from "@/components/config";
import axios from "axios";

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return getAuth(firebase_app).onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "accessToken", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
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
            setUserId(response.data.user_id);
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });

        setUser(user);
        nookies.set(undefined, "accessToken", token, { path: "/" });
      }
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const handle = setInterval(
      async () => {
        const user = getAuth(firebase_app).currentUser;
        if (user) await user.getIdToken(true);
      },
      10 * 60 * 1000,
    );

    return () => clearInterval(handle);
  }, []);

  return (
    <AuthContext.Provider value={{ user, userId, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
