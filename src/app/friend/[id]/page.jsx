import Image from "next/image";
import {
  FaClock,
  FaArchive,
  FaTrash,
  FaPhoneAlt,
  FaCommentDots,
  FaVideo,
  FaEdit,
} from "react-icons/fa";


async function getFriendData(id) {
  try {

    const res = await fetch(`http://localhost:3000/friendsData.json`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const allFriends = await res.json();

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
          Friend not found! <br />{" "}
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
            <h2 className="text-xl font-semibold text-[#1F2937]">{friend.name}</h2>

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
              value={friend.stats?.daysSince || friend.days_since_contact}
             
              
            />
            <StatBox
              label="Goal (Days)"
              value={friend.stats?.goal || friend.goal}
           
            />
            <StatBox
              label="Next Due Date"
              value={friend.stats?.nextDue || friend.next_due_date}
              isText
            />
          </div>

  
          <div className="bg-white p-6 border border-[#E9E9E9] rounded-sm flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-medium text-[#244D3F] capitalize tracking-widest mb-1">
                Relationship Goal
              </h3>
              <p className="text-[#64748B] text-lg ">
                Connect every{" "}
                <span className="font-bold text-[#1F2937]">
                  {friend.stats?.goal || friend.goal} days
                </span>
              </p>
            </div>
            <button className="py-2 px-4.5  bg-[#F8FAfC] border-on font-medium text-sm text-[#1F2937] rounded">
             Edit
            </button>
          </div>

       
          <div className="bg-white p-6 border border-[#E9E9E9] rounded-sm shadow-sm">
            <h3 className="text-xl font-medium text-[#244D3F] capitalize tracking-widest mb-6">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-4 text-[#1F2937]">
              <CheckInOption icon={<FaPhoneAlt />} label="Call" />
              <CheckInOption icon={<FaCommentDots />} label="Text" />
              <CheckInOption icon={<FaVideo />} label="Video" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



function ActionButton({ icon, label, isDanger = false }) {
  return (
    <button
      className={`flex items-center justify-center gap-2 py-3 border border-[#E9E9E9] bg-white text-sm font-semibold rounded-sm hover:bg-opacity-90 transition-all shadow-sm ${
        isDanger
          ? "text-[#EF4444] hover:bg-red-50"
          : "text-[#1F2937] hover:bg-gray-50"
      }`}
    >
      {icon} {label}
    </button>
  );
}

function StatBox({ label, value}) {
  return (
    <div className="bg-white p-8 border border-[#E9E9E9] rounded-sm flex flex-col items-center shadow-sm">
      <span className="text-3xl font-semibold  text-[#244D3F]">
        {value}
      </span>
      <span className="mt-3 text-lg font-normal text-[#64748B] capitalize text-center">
        {label}
      </span>
    </div>
  );
}

function CheckInOption({ icon, label }) {
  return (
    <button className="flex flex-col items-center gap-3 py-8  bg-[#F8FAFC] btn h-auto border-none  rounded-sm shadow-sm">
      <div className="text-xl text-gray-400 ">
        {icon}
      </div>
      <span className="text-lg font-normal text-[#1F2937] uppercase ">
        {label}
      </span>
    </button>
  );
}

export default FriendDetails;
