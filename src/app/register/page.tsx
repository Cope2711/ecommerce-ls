'use client';

import Button from "@/client/components/items/button";
import AuthForm from "@/client/components/items/forms/AuthForm";
import Input from "@/client/components/items/input";
import Label from "@/client/components/items/label";
import authApi from "@/client/services/authApi";
import { BaseError } from "@/shared/errors/BaseError";
import { CreateUserSchema, createUserSchema } from "@/shared/schemas/userSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<CreateUserSchema>({
        resolver: zodResolver(createUserSchema),
    });

    const onSubmit = async (data: CreateUserSchema) => {
        try {
            const response = await authApi.register(data);
            console.log("Registered", response);
        } catch (err) {
            if (err instanceof BaseError) {
                setError(err.field as keyof CreateUserSchema, { message: err.message });
            }
        }
    };

    return (
        <AuthForm title="Register" onSubmit={handleSubmit(onSubmit)}>
            <Input
                className="w-full"
                placeholder="Username"
                errorMessage={errors.username?.message}
                {...register("username")}
            />
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
        </AuthForm>
    );
}