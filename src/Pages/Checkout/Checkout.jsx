import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { _id, title, price } = service;
  const { user } = useContext(AuthContext);

  const handleCheckout = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const order = {
        name,
        email,
        date,
        service: _id,
        price: price
    }
    console.log(order);
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold">
        Booked Services: {title}
      </h2>
      <div className="mx-auto">
        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
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
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input
                type="text"
                name="due"
                defaultValue={'$' + ' ' + price }
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6 mx-2">
            <input
              type="submit"
              value="Oder Confirm"
              className="btn btn-accent btn-block"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
