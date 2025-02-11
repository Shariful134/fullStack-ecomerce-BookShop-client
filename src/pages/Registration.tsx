/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { registerValidationSchema } from "../schemas/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterUserMutation } from "../redux/auth/authApi";
import { toast } from "sonner";
import { TResponse } from "../types/type";
import { useNavigate } from "react-router";

const Registration = () => {
  const navigate = useNavigate();
  const [addRegisterUser, { data, error }] = useRegisterUserMutation();
  console.log("data: ", data);
  console.log("error: ", error);
  const defaultValues = {
    name: "Shariful islam",
    email: "Shariful@sgmail.com",
    password: "Shariful!23",
  };

  const onSubmit = async (data: FieldValues) => {
    console.log("data: ", data);

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      const res = (await addRegisterUser(userInfo)) as TResponse<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message);
      } else {
        toast.success(res?.data?.message);
        navigate("/");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
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
      <PHForm
        resolver={zodResolver(registerValidationSchema)}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
      >
        <PHInput type="text" name="name" label="Name"></PHInput>
        <PHInput type="text" name="email" label="Email"></PHInput>
        <PHInput type="text" name="password" label="Password"></PHInput>
        <Button
          style={{
            border: "2px solid ",
            marginLeft: "48px",
          }}
          htmlType="submit"
        >
          Register
        </Button>
      </PHForm>
    </Row>
  );
};

export default Registration;
