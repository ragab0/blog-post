import { useForm } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
import { loginSchema } from "@/validations/auth";
import { useAuth } from "@/hooks/useAuth";

type FormData = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const { login } = useAuth();

  const onSubmit = async (data: FormData) => {
    login(data.email, data.password);
    // try {
    //   // Simulate API call
    //   await new Promise((resolve) => setTimeout(resolve, 1000));
    //   dispatch(
    //     setUser({
    //       id: "1",
    //       name: "John Doe",
    //       email: data.email,
    //       avatar:
    //         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    //     })
    //   );
    //   toast({
    //     title: "Success",
    //     description: "You have successfully logged in.",
    //   });
    //   navigate("/");
    // } catch (error) {
    //   console.log(error);
    //   toast({
    //     variant: "destructive",
    //     title: "Error",
    //     description: "Failed to log in. Please try again.",
    //   });
    // }
  };

  return (
    <div className="login-page flex min-h-[80vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                className={errors.password ? "border-destructive" : ""}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
