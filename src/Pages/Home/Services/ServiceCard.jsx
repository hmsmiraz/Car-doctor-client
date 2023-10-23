import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
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
        <button className="btn btn-ghost hover:btn-neutral text-neutral-600 hover:text-white font-bold text-3xl">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
