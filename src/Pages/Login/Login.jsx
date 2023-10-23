import login from '../../assets/images/login/login.svg'
const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault();
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-300 my-5">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left w-1/2">
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center text-orange-500 pt-5">Login Here</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                <input type="submit" value="Login" className='btn text-xl bg-emerald-600 hover-btn-ghost text-white hover:text-black' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
