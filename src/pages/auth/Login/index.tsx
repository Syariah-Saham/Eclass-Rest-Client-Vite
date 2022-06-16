import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../../../interfaces/auth";
import { login } from "../../../redux/actions/auth";
import { useAppDispatch } from "../../../redux/hooks";
import { authLogin } from "../../../services/auth";

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await dispatch(login(data));
      console.log(response);
      // let response = await authLogin(data);
      /* let role = response.data?.user?.role;
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else if (role === "member") {
        navigate("/member/dashboard");
      } */
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input autoFocus type="email" {...register("email")} />
          <span>{errors?.email?.message}</span>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          <span>{errors?.password?.message}</span>
        </div>
        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
