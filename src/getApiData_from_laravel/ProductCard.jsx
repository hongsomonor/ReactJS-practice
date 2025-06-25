import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({name , image , price , id}) => {
  return (
    <article key={id} className=" transition-all duration-300 hover:scale-[1.05] hover:-rotate-[2deg] h-[340px] shadow-sm shadow-gray-400 bg-gray-100 flex flex-col items-center justify-center rounded-3xl py-4 px-4">
      <img
        src={`http://localhost/uploads/${image}`}
        alt={name}
        className="w-[90%] h-[250px] rounded-2xl shadow-sm"
      />
      <h3 className=" font-extrabold my-[10px]">{name}</h3>
      <div className="flex justify-between w-[90%] items-center">
        <p className=" text-[20px] font-extrabold text-red-500">${price}</p>
        <div className="size-[20px] p-4 rounded-full font-bold text-white bg-red-600 flex justify-center items-center">
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
