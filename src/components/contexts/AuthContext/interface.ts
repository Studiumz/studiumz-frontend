import { UserInfo } from "@firebase/auth";
import React, { ReactNode } from "react";

export interface AuthContextProviderProps {
  children: ReactNode;
}

export interface AuthContextInterface {
  user: UserInfo | null;
  userId: string | null;
  accessToken: string | null;
  loading: boolean;
  setLoading: React.Dispatch<any>;
  userInfo: CustomUser | undefined;
  setUserInfo: React.Dispatch<any> | undefined;
}

export interface CustomUser {
  id: string;
  full_name: string;
  nickname: string;
  email: string;
  avatar: string;
  gender: 0 | 1 | 2;
  struggles: string;
  birth_date: Date;
  status: 0 | 1;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
