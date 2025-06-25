import React from "react";

const Card = ({id , name , image}) => {
  return (
    <article key={id} className=" h-[300px] bg-neutral-400 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.04] hover:-rotate-[3deg]">
      <img
        src={image}
        alt=""
        className=" w-full h-[250px] rounded-2xl"
      />
      <h1 className="text-center py-1 font-extrabold text-white">{name}</h1>
    </article>
  );
};

export default Card;
