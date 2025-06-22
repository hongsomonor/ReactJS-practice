const Card = ({ id, avatar_url, login }) => {
  return (
    <article key={id} className=" h-52 rounded-2xl shadow-2xl bg-neutral-500 flex flex-col justify-center items-center gap-[20px] transition-all duration-[0.4s] hover:scale-[1.07]">
      <img
        src={avatar_url}
        alt={login}
        className=" size-[100px] rounded-[50%]"
      />
      <div className="bg-gray-400 py-2 px-4 rounded-xl font-extrabold text-white">
        {login}
      </div>
    </article>
  );
};

export default Card;
