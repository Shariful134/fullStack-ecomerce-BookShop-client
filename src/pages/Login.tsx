/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/auth/authApi";

import { useAppDispath } from "../redux/hooks";
import { setUser } from "../redux/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { TUser } from "../types/type";
import { toast } from "sonner";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispath();
  const [addLogin] = useLoginMutation();
  const defaultValue = {
    email: "Shariful@sgmail.com",
    password: "Shariful!23",
  };

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loggin in");

    try {
      const res = await addLogin(data).unwrap();

      const user = verifyToken(res?.data?.accessToken) as TUser;
      console.log(user.role);

      dispatch(setUser({ user: user, token: res?.data?.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 1000 });
      navigate(`/${user.role}/Home`);
    } catch (error: any) {
      toast.error(error?.data?.message, { id: toastId, duration: 1000 });
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}
    >
      <PHForm onSubmit={onSubmit} defaultValues={defaultValue}>
        <PHInput type="text" name="email" label="Email"></PHInput>

        <PHInput type="text" name="password" label="Password"></PHInput>

        <Button
          style={{
            border: "2px solid ",
            marginLeft: "48px",
          }}
          htmlType="submit"
        >
          Login
        </Button>
      </PHForm>
    </Row>
  );
};

export default Login;
