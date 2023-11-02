import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const loginData = (email, password);
    // console.log(loginData);

    signIn(email, password)
    .then(result=>{
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = { email };
      //token
      axios.post('http://localhost:5000/jwt', user, {
        withCredentials: true
      })
      .then(res=>{
        // console.log(res.data);
        if(res.data.success) {
          navigate( location?.state ? location?.state : "/" );
        }
      })
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
              Login
            </h1>
            <form onSubmit={handleLogin} className="card-body">
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
                  value="Login"
                  className="btn text-xl bg-emerald-600 hover-btn-ghost text-white hover:text-black"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctors?{" "}
              <Link to={"/signUp"} className="text-red-500 font-bold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
