import { UserInfo } from "@firebase/auth";
import { ReactNode } from "react";

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  user: UserInfo | null;
  userId: string | null;
  accessToken : string | null;
  loading: boolean;
  setLoading: React.Dispatch<any>;
}
