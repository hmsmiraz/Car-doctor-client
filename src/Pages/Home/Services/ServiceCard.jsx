// import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const {_id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-orange-500 font-bold">Price: ${price}</p>
      </div>
      <div className="card-actions justify-end pb-4 pr-4">
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-accent hover:btn-neutral text-slate-950 hover:text-white">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
