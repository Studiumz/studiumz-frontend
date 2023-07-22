import { UserInfo } from "@firebase/auth";
import { ReactNode } from "react";

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  user: UserInfo | null;
}
