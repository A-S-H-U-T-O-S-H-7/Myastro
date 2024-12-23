const DashboardMetrics = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
    {[
      { title: "Users Logged In", value: 345, icon: "👤" },
      { title: "Chat Duration (hrs)", value: 120, icon: "💬" },
      { title: "Call Duration (hrs)", value: 200, icon: "📞" },
      { title: "Astrologers Logged In", value: 20, icon: "🔮" },
    ].map((metric, idx) => (
      <div
        key={idx}
        className="bg-[#1e2737] text-[#888ea8] p-4 rounded-lg shadow-md flex items-center gap-4"
      >
        <span className="text-3xl">{metric.icon}</span>
        <div>
          <h3 className="text-sm">{metric.title}</h3>
          <p className="text-lg font-bold">{metric.value}</p>
        </div>
      </div>
    ))}
  </div>
);
export default DashboardMetrics;
