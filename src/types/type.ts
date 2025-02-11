import { ReactNode } from "react";

export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TRegsiter = {
  name: string;
  email: string;
  password: string;
};

export type TUser = {
  data: {
    userEmail: string;
    role: string;
  };
  iat: number;
  exp: number;
};

export type TUserPaths = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPaths[];
};

export type TSidebarItem =
  | {
      key: string | undefined;
      label?: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TBook = {
  _id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description: string;
  quantity: number;
  inStock: boolean;
  publicationDate: string;
  publisher: string;
  imageURL: string;
};
