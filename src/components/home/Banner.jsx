
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-24 px-6 text-center ">
        <h1 className="text-3xl md:text-nowrap md:text-5xl font-bold text-[#1F2937] leading-tight max-w-3xl">
          Friends to keep close in your life
        </h1>
        <p className="mt-6 text-base md:text-xl text-[#64748B] max-w-2xl">
          Your personal hub of meaningful connections. Manage, track, and
          nurture the relationships that matter most.
        </p>
        <button className=" mt-20  flex items-center gap-2 bg-[#244D3F] text-white px-4 py-3 rounded-sm font-semibold ">
          <FaPlus size={16} />
          Add a Friend
        </button>
      </section>
    </>
  );
}

export default Banner