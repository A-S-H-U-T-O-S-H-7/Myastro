const DashboardHeader = () => (
    <div className="flex items-center justify-between bg-[#0e1726] p-4 shadow-md">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-[#1e2737] text-[#888ea8] rounded-md p-2 focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#888ea8]">🔔</button>
        <img src="/profile.jpg" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
  export default DashboardHeader;
  