const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-100 w-full bg-white">
    
      <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>

    
      <p className="mt-4 text-[#64748B] text-sm font-medium tracking-wide capitalize">
        Loading Friends...
      </p>
    </div>
  );
};

export default Loading;
