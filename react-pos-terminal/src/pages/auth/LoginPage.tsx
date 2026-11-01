import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import type { LoginFormValues } from "@/features/auth";
import { useLogin } from "@/features/auth/use-login";
import type { SubmitHandler } from "react-hook-form";
import { Navigate } from "react-router";

export default function LoginPage() {
  const { session, login, form } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  if (session.status === "LOGGED_IN") {
    return <Navigate to="/dashboard" replace />;
  }

  const onSubmit: SubmitHandler<LoginFormValues> = (values) =>
    login.mutate(values);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div>
        <h1 className="mb-6 text-2xl font-medium">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet className="mb-4 min-w-56">
            <FieldGroup>
              <Field data-invalid={!!errors.email}>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="text"
                  placeholder="myemail@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm">{errors.email.message}</p>
                )}
              </Field>
              <Field data-invalid={!!errors.password}>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  aria-invalid={!!errors.password}
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm">{errors.password.message}</p>
                )}
              </Field>
            </FieldGroup>
          </FieldSet>
          <Button type="submit" disabled={login.isPending}>
            Login
          </Button>
        </form>
        {login.isError && <div>{login.error.message}</div>}
      </div>
    </div>
  );
}
