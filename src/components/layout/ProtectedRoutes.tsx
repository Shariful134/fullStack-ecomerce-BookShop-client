import { ReactNode } from "react";
import { useAppDispath, useAppSelector } from "../../redux/hooks";

import { Navigate } from "react-router";
import { verifyToken } from "../../utils/verifyToken";
import { logout, useCurrentToken } from "../../redux/auth/authSlice";
import { TUser } from "../../types/type";

type Tprotected = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoutes = ({ children, role }: Tprotected) => {
  const token = useAppSelector(useCurrentToken);

  const dispatch = useAppDispath();
  let user;
  if (token) {
    const verifyUser = verifyToken(token) as TUser;
    user = {
      userEmail: verifyUser?.data?.userEmail,
      role: verifyUser?.data?.role,
      iat: verifyUser?.iat,
      exp: verifyUser?.exp,
    };
  }
  console.log(user);

  if (role != undefined && role != user?.role) {
    dispatch(logout());
    return <Navigate to="/home" replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
