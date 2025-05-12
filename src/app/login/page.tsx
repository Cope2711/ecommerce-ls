'use client';

import Button from "@/client/components/items/button";
import Input from "@/client/components/items/input";
import Label from "@/client/components/items/label";
import authApi from "@/client/services/authApi";
import { loginSchema, LoginSchema } from "@/server/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    try {
      await authApi.login(data.email, data.password);
      console.log("Logged in");
    } catch (err) {
      console.error("Error:", err);
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-7 items-center w-full"
        >
          <Label
            className="text-2xl text-center w-full">Login</Label>
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
            {...register("password")} />
          <Button className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

