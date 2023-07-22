import { createContext, useContext, useEffect, useState } from "react";
import { User as FirebaseUser, User, UserInfo } from "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase_app from "@/components/config/firebase";
import nookies from "nookies";
import { AuthContextInterface } from "./interface";

const AuthContext = createContext({} as AuthContextInterface);

export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [idToken, setIdToken] = useState<string | null>(null);

  useEffect(() => {
    return getAuth(firebase_app).onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        nookies.set(undefined, "token", "", { path: "/" });
      } else {
        const token = await user.getIdToken();
        setUser(user);
        nookies.set(undefined, "token", token, { path: "/" });
      }
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
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
