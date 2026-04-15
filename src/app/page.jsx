import Image from "next/image";

import FriendCard from "@/components/FriendCard/FriendCard";
import Banner from "@/components/home/Banner";
import SummaryCard from "@/components/home/SummaryCard";


const friendData = async() => {
    const FrienRes = await fetch("http://localhost:3000/friendsData.json");
    return FrienRes.json()
}

 const Home= async() =>{
    const friendsData = await friendData()

  return (
    <div className="flex flex-col flex-1 bg-white font-sans">
    
      <main className="flex flex-col w-full">
        
    <Banner />
    <SummaryCard/>
    <div className="grid max-w-7xl mb-5 md:mb-20  w-full mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {friendsData.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
              
            ))}
    </div>
      </main>
    </div>
  );
}
export default Home
