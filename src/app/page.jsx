import { FaPlus } from "react-icons/fa";

export default function Home() {
  const summaryCards = [
    { title: "Total Friends", value: "10" },
    { title: "On Track", value: "3" },
    { title: "Need Attention", value: "6" },
    { title: "Interactions This Month", value: "12" },
  ];

  return (
    <div className="flex flex-col flex-1 bg-white font-sans">
    
      <main className="flex flex-col w-full">
        
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

   
        <section className="max-w-7xl mx-auto w-full px-6 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summaryCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col rounded-md items-center justify-center p-10 border border-[#E9E9E9] bg-white"
              >
                <span className="text-3xl font-semibold text-[#244D3F] mb-2">
                  {card.value}
                </span>
                <span className="text-lg text-nowrap font-normal text-[#64748B] uppercase tracking-wide text-center">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          <div className="border-b border-b-[#E9E9E9] my-10"></div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-[#244D3F] border-b-2 border-[#244D3F] inline-block pb-1">
              Your Friends
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
