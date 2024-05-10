import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";

const SignIn = () => {
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signInUsers, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // handle all signIn methods
  const handleSignIn = (data) => {
    const email = data.email;
    const password = data.password;
    setError("");

    // email and password sign in
    signInUsers(email, password)
      .then(() => {
        toast.success("Sign in successful");
        reset();
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          setError("Email or password invalid");
        }
      });
  };
  // google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((res) => {
        const user = res.user;
        toast.success("Sign in successful");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((err) => {
        console.log("google", err.message);
      });
  };
  // gitHub sighIn
  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((res) => {
        const user = res.user;
        toast.success("Sign in successful");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((err) => {
        console.log("gitHub", err.message);
      });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign In || Crafty Corner</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-[#5C8392]">
        <div className="hero-content w-full md:w-[800px]">
          <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-[#ECEDF1] ">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleSignIn)} className="space-y-3">
                <h1 className="text-3xl font-bold text-center">Sign In</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    className="input input-bordered"
                  />
                  <>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="w-full flex items-center ">
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required",
                        },
                        minLength: {
                          value: 6,
                          message: "Password should be at least 6 characters",
                        },
                      })}
                      className="input input-bordered w-full"
                    />
                    <div onClick={handleShowPass} className="-ml-7">
                      {showPass ? (
                        <span>
                          <FaEye />
                        </span>
                      ) : (
                        <span>
                          <FaEyeSlash />
                        </span>
                      )}
                    </div>
                  </div>
                  <>
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                  <p className="text-red-500">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-[#5C8392] hover:bg-[#587987] text-white text-xl ">
                    Sign In
                  </button>
                </div>
              </form>
              <div className="w-full flex items-center gap-1">
                <span className="h-[1.5px] w-full bg-[#43414198]"></span>
                <p className="text-nowrap font-bold text-[#43414198]">Or</p>
                <span className="h-[1.5px] w-full bg-[#43414198]"></span>
              </div>
              <div className="w-full flex md:flex-row flex-col gap-2 text-center font-semibold">
                <button
                  onClick={handleGoogleSignIn}
                  className=" w-full py-3 bg-[#9BD8D9] hover:bg-[#81c2c3eb] rounded-md flex items-center justify-center gap-2 border border-[#3e3d3d4f]"
                >
                  <FcGoogle className="text-2xl " />
                  Google
                </button>
                <button
                  onClick={handleGitHubSignIn}
                  className=" w-full py-3 bg-[#9BD8D9] hover:bg-[#81c2c3eb] rounded-md flex items-center justify-center gap-2 border border-[#3e3d3d4f]"
                >
                  <FaGithub className="text-2xl " />
                  GitHub
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link
                  to={"/signUp"}
                  className="text-blue-500 font-semibold underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignIn;
