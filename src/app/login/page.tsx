'use client';

import Button from "@/client/components/items/button";
import AuthForm from "@/client/components/items/forms/AuthForm";
import Input from "@/client/components/items/input";
import Label from "@/client/components/items/label";
import authApi from "@/client/services/authApi";
import { LoginSchema, loginSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await authApi.login(data);
      console.log("Logged in");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <AuthForm title="Login" onSubmit={handleSubmit(onSubmit)}>
      <Input
        className="w-full"
        placeholder="Email"
        errorMessage={errors.email?.message}
        {...register("email")}
      />
      <Input
        className="w-full"
        placeholder="Password"
        type="password"
        errorMessage={errors.password?.message}
        {...register("password")}
      />
      <Button className="w-full">Login</Button>
    </AuthForm>
  );
}

