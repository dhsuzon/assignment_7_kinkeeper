

const SummaryCard = () => {
     const summaryCards = [
       { title: "Total Friends", value: "10" },
       { title: "On Track", value: "3" },
       { title: "Need Attention", value: "6" },
       { title: "Interactions This Month", value: "12" },
     ];
  return (
    <>
      <section className="max-w-7xl mx-auto w-full  pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col rounded-md items-center justify-center p-10 border border-[#E9E9E9] bg-white"
            >
              <span className="text-3xl font-semibold text-[#244D3F] mb-2">
                {card.value}
              </span>
              <span className="text-lg text-nowrap font-normal text-[#64748B] capitalize tracking-wide text-center">
                {card.title}
              </span>
            </div>
          ))}
        </div>

        <div className="border-b border-b-[#E9E9E9] my-10"></div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-[#1F2937] inline-block pb-1">
            Your Friends
          </h2>
        </div>
      </section>
    </>
  );
}

export default SummaryCard