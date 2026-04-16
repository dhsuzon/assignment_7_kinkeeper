import QuickCheckIn from "@/components/quickcheckin/QucikCheckIn";
import Image from "next/image";
import { FaClock, FaArchive, FaTrash } from "react-icons/fa";
import { promises as fs } from "fs"; 
import path from "path"; 


async function getFriendData(id) {
  try {
    
    await new Promise((resolve) => setTimeout(resolve, 1000));

  
    const filePath = path.join(process.cwd(), "public", "friendsData.json");
    const jsonData = await fs.readFile(filePath, "utf8");
    const allFriends = JSON.parse(jsonData);

    return allFriends.find((f) => String(f.id) === String(id));
  } catch (error) {
    console.error("Data fetch error:", error);
    return null;
  }
}

const FriendDetails = async ({ params }) => {
  const { id } = await params;
  const friend = await getFriendData(id);

  if (!friend) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-500 text-center">
          Friend not found! <br />
          <span className="text-sm font-normal">
            Check if ID {id} exists in JSON.
          </span>
        </h2>
      </div>
    );
  }

  const statusKey = friend.status?.toLowerCase();
  const statusStyles = {
    overdue: "bg-[#FE4444]",
    "almost due": "bg-[#EFAD44]",
    "on-track": "bg-[#244D3F]",
    "due soon": "bg-[#EFAD44]",
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-4 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
    
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="bg-white border border-[#E9E9E9] p-8 flex flex-col items-center rounded-sm shadow-sm">
            <div className="w-24 h-24 relative mb-4">
              <Image
                src={friend.picture}
                alt={friend.name}
                width={96}
                height={96}
               

                className="rounded-full object-cover border-2 border-gray-50"
              />
            </div>
            <h2 className="text-xl font-semibold text-[#1F2937]">
              {friend.name}
            </h2>
            <span
              className={`mt-2 py-1.5 px-4 rounded-full text-xs font-medium text-white capitalize tracking-widest ${statusStyles[statusKey] || "bg-gray-400"}`}
            >
              {friend.status}
            </span>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-4 mb-6">
              {friend.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-[#CBFADB] text-[#244D3F] text-xs font-medium uppercase rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-[#64748B] italic text-base font-medium text-center line-clamp-2">
              {friend.bio}
            </p>
            <p className="mt-2 text-[#64748D] text-sm font-normal">
              {friend.email}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ActionButton
              icon={<FaClock className="text-gray-400" />}
              label="Snooze 2 Weeks"
            />
            <ActionButton
              icon={<FaArchive className="text-gray-400" />}
              label="Archive"
            />
            <ActionButton icon={<FaTrash />} label="Delete" isDanger />
          </div>
        </div>

    
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatBox
              label="Days Since Contact"
              value={friend.days_since_contact}
            />
            <StatBox label="Goal (Days)" value={friend.goal} />
            <StatBox label="Next Due Date" value={friend.next_due_date} />
          </div>

          <div className="bg-white p-6 border border-[#E9E9E9] rounded-sm flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-medium text-[#244D3F] capitalize mb-1">
                Relationship Goal
              </h3>
              <p className="text-[#64748B] text-lg ">
                Connect every{" "}
                <span className="font-bold text-[#1F2937]">
                  {friend.goal} days
                </span>
              </p>
            </div>
            <button className="py-2 px-4.5 bg-[#F8FAfC] border-on font-medium text-sm text-[#1F2937] rounded">
              Edit
            </button>
          </div>
          <QuickCheckIn friendName={friend.name} />
        </div>
      </div>
    </div>
  );
};


function ActionButton({ icon, label, isDanger = false }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-3 border border-[#E9E9E9] bg-white text-sm font-semibold rounded-sm hover:bg-opacity-90 transition-all shadow-sm ${isDanger ? "text-[#EF4444] hover:bg-red-50" : "text-[#1F2937] hover:bg-gray-50"}`}
    >
      {icon} {label}
    </button>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="bg-white p-8 border border-[#E9E9E9] rounded-sm flex flex-col items-center shadow-sm">
      <span className="text-3xl tracking-tight font-semibold text-[#244D3F]">
        {value}
      </span>
      <span className="mt-3 text-lg font-normal text-[#64748B] capitalize text-center">
        {label}
      </span>
    </div>
  );
}

export default FriendDetails;
