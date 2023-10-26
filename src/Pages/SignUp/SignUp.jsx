import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const signUpData = (name, email, password);
    console.log(signUpData);

    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
    })
    .catch(error=>{
      console.log(error)
    })
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-300 my-5">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl font-bold text-center text-orange-500 pt-5">
            Sign Up
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn text-xl bg-emerald-600 hover-btn-ghost text-white hover:text-black"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account?
              <Link to={"/login"} className="text-red-500 font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
