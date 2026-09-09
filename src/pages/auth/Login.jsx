
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "./css/Login.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (formData) => {
    try {
      setLoading(true);

      const response = await axios.post(
        "https://e-commerce-backend-t57z.onrender.com/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log("Login Response:", response.data);

      // Success toast
      toast.success(
        response.data.message || "Login successful!"
      );

      navigate("/dashboard")

      // If backend returns token
      if (response.data.token) {
        localStorage.setItem(
          "token",
          response.data.token
        );
      }

      // If backend returns user data
      if (response.data.data) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.data.data)
        );
      }

      // Clear form
      reset();

      // Navigate after login
      // window.location.href = "/dashboard";

    } catch (error) {
      console.error("Login Error:", error);

      toast.error(
        error.response?.data?.message ||
          "Invalid email or password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Welcome Back</h2>

        <p>Sign in to continue</p>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Email */}
          <div className="input-group">
            <label>Email</label>

            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",

                pattern: {
                  value:
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                />
              )}
            />

            {errors.email && (
              <span className="error">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required",

                minLength: {
                  value: 6,
                  message:
                    "Password must be at least 6 characters",
                },
              }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Enter your password"
                />
              )}
            />

            {errors.password && (
              <span className="error">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="login-options">

            <label>
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) =>
                      field.onChange(
                        e.target.checked
                      )
                    }
                  />
                )}
              />

              Remember Me
            </label>

            <a href="/forgot-password">
              Forgot Password?
            </a>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Signup */}
          <p className="signup-text">
            Don't have an account?

            <a href="/register">
              {" "}Sign Up
            </a>
          </p>

        </form>
      </div>
    </div>
  );
}

