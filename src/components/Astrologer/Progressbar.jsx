const ProgressBar = ({ step, totalSteps }) => {
    return (
      <div className="w-full max-w-lg mb-8">
        <div className="relative">
          <div className="absolute inset-0 h-2 bg-gray-200 rounded"></div>
          <div
            className="absolute inset-0 h-2 bg-blue-500 rounded"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                step > index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default ProgressBar;  