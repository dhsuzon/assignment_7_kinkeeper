import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  
  const statusStyles = {
    overdue: "bg-[#FE4444]", 
    "almost due": "bg-[#EFAD44]", 
    "on-track": "bg-[#244D3F]",
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white border border-[#E9E9E9] p-6 flex  flex-col items-center text-center capitalize   cursor-pointer  rounded-md">
       
        <div className="w-20 h-20 relative mb-4  ">
          <Image src={friend.picture} alt={friend.name} width="80" height="80" className="rounded-full"></Image>
        </div>

       
        <h3 className="text-xl font-semibold text-[#1F2937]">
          {friend.name}
        </h3>

      
        <p className="text-xs text-[#64748B] font-normal mb-4">
          {friend.days_since_contact} days ago
        </p>

     
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1.5 bg-[#CBFADB]  text-[#244D3F] text-xs font-medium uppercase rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`w-auto py-1.5 px-2  rounded-full text-xs font-medium text-white capitalize tracking-widest ${statusStyles[friend.status]}`}
        >
          {friend.status}
        </span>
      </div>
    </Link>
  );
};

export default FriendCard;
