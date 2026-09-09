
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Register() {
  const [loading, setLoading] = useState(false);
<<<<<<< HEAD
  const [apiError, setApiError] = useState("");
  const [success, setSuccess] = useState("");
=======
>>>>>>> 1380236b6b0b1b834569464387484f6661213afe
const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
<<<<<<< HEAD
      setApiError("");
      setSuccess("");
=======
>>>>>>> 1380236b6b0b1b834569464387484f6661213afe

      // const response = await axios.post("http://localhost:5000/", formData)
      const response = await axios.post(
        "https://e-commerce-backend-t57z.onrender.com/api/auth/register",
        formData
      );

      console.log("Register Response:", response.data);

      toast.success(response.data.message)
navigate("/login")

<<<<<<< HEAD
      // setSuccess("Registration successful!");
=======
>>>>>>> 1380236b6b0b1b834569464387484f6661213afe

      reset();
    } catch (error) {
      console.error("Register Error:", error);
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg, #4e73df, #36b9cc)",
      }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-lg-5 col-md-7 col-sm-10 col-11">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-4">

              <h2 className="text-center mb-4 text-primary">
                Create Account
              </h2>

              
              <form onSubmit={handleSubmit(onSubmit)}>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">
                    Full Name
                  </label>

                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: "Full name is required",
                      minLength: {
                        value: 3,
                        message: "Minimum 3 characters required",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        placeholder="Enter your full name"
                      />
                    )}
                  />

                  {errors.name && (
                    <div className="invalid-feedback">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">
                    Email Address
                  </label>

                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        placeholder="Enter your email"
                      />
                    )}
                  />

                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Mobile */}
                <div className="mb-3">
                  <label className="form-label">
                    Mobile Number
                  </label>

                  <Controller
                    name="mobile"
                    control={control}
                    rules={{
                      required: "Mobile number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Enter a valid 10 digit mobile number",
                      },
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="tel"
                        className={`form-control ${
                          errors.mobile ? "is-invalid" : ""
                        }`}
                        placeholder="Enter your mobile number"
                      />
                    )}
                  />

                  {errors.mobile && (
                    <div className="invalid-feedback">
                      {errors.mobile.message}
                    </div>
                  )}
                </div>

                <div className="row">

                  {/* Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Password
                    </label>

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
                          className={`form-control ${
                            errors.password ? "is-invalid" : ""
                          }`}
                          placeholder="Password"
                        />
                      )}
                    />

                    {errors.password && (
                      <div className="invalid-feedback">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Confirm Password
                    </label>

                    <Controller
                      name="confirmPassword"
                      control={control}
                      rules={{
                        required: "Confirm password is required",
                        validate: (value) =>
                          value === password ||
                          "Passwords do not match",
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="password"
                          className={`form-control ${
                            errors.confirmPassword
                              ? "is-invalid"
                              : ""
                          }`}
                          placeholder="Confirm Password"
                        />
                      )}
                    />

                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword.message}
                      </div>
                    )}
                  </div>
                </div>

                {/* Terms */}
                <div className="mb-3">

                  <Controller
                    name="terms"
                    control={control}
                    rules={{
                      required: "You must accept Terms & Conditions",
                    }}
                    render={({ field }) => (
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className={`form-check-input ${
                            errors.terms ? "is-invalid" : ""
                          }`}
                          id="terms"
                          checked={field.value}
                          onChange={(e) =>
                            field.onChange(e.target.checked)
                          }
                        />

                        <label
                          className="form-check-label"
                          htmlFor="terms"
                        >
                          I agree to the Terms & Conditions
                        </label>

                        {errors.terms && (
                          <div className="invalid-feedback">
                            {errors.terms.message}
                          </div>
                        )}
                      </div>
                    )}
                  />

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary w-100 py-2"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>

                <div className="text-center mt-3">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-decoration-none"
                  >
                    Login
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;

