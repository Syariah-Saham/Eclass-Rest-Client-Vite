import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IRegisterForm } from "../../../interfaces/auth";
import { authRegister } from "../../../services/auth";

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      console.log(data);
      await authRegister(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nama</label>
          <input type="text" {...register("name")} />
          <span>{errors?.name?.message}</span>
        </div>
        <div>
          <label>Email</label>
          <input type="email" {...register("email")} />
          <span>{errors?.email?.message}</span>
        </div>
        <div>
          <label>Password</label>
          <input type="password" {...register("password")} />
          <span>{errors?.password?.message}</span>
        </div>
        <div>
          <label>Konfirmasi Password</label>
          <input type="password" {...register("password_confirmation")} />
          <span>{errors?.password_confirmation?.message}</span>
        </div>
        <button disabled={loading} type="submit">
          Daftar
        </button>
      </form>
    </div>
  );
};

export default Register;
