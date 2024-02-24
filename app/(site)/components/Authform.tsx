'use client'

import Button from "@/app/components/Input/Button";
import Input from "@/app/components/Input/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const Authform = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        }
        else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // Axios register 
        }
        if (variant === 'LOGIN') {
            // next sign in 
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
        // next social sign in 
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
                    {variant === "REGISTER" && (<Input id='name' errors={errors} label="Name" register={register} />)}
                    <Input id='email' errors={errors} label="Email" type="email" register={register} />
                    <Input id='password' errors={errors} label="password" type="password" register={register} />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit"> {variant === 'LOGIN' ? 'Sign In' : 'Sign Up'}</Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                </div>
                <div className="mt-6 flex gap-2">

                </div>
            </div>
        </div>
    );
};

export default Authform;