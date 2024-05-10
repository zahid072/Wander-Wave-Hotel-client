import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../provider/AuthProvider";

const SignUp = () => {
  const [defaultError, setDefaultError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { signUpUsers, updateUserProfile } = useContext(AuthContext);
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

  const submit = (data) => {
    const name = data.fullName;
    const photo = data.photoURL;
    const email = data.email;
    const password = data.password;

    signUpUsers(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("User successfully created");
        updateUserProfile(name, photo);
        reset();
        console.log(user)
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          setDefaultError("Email already in use");
        }
      });
  };
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign Up || Wander Wave</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="hero min-h-screen bg-[#335054]">
        <div className="hero-content w-full md:w-[800px]">
          <div className="card shrink-0 w-full max-w-3xl shadow-2xl bg-[#ECEDF1]">
            <form onSubmit={handleSubmit(submit)} className="card-body">
              <h1 className="text-3xl font-bold text-center">Sign Up</h1>
             
              <div className="flex md:flex-row flex-col gap-4 w-full">
              <div className="form-control w-full">
                <label className="label"> <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name"
                  {...register("fullName")}
                  className="input input-bordered w-full" />
              </div>
              <div className="form-control w-full">
                <label className="label"> <span className="label-text">Email</span> </label>
                <input type="email"  {...register("email")}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("photoURL")}
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control"> <label className="label"> <span className="label-text">Password</span> </label>
                <div className="w-full flex items-center ">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Password should be at least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/,
                        message: "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character",
                      },
                    })}
                    className="input input-bordered w-full"
                    required
                  />
                  <div onClick={handleShowPass} className="-ml-7">
                    {showPass ? (
                      <span> <FaEye />  </span>
                    ) : (
                      <span> <FaEyeSlash /> </span>
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
                <p className="text-red-500">{defaultError}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#30424E] hover:bg-[#3d5260] text-xl text-white">
                  Sign Up
                </button>
              </div>
              <p>
                Already have an account?{" "}
                <Link
                  to={"/signIn"}
                  className="text-blue-500 font-semibold underline"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUp;