import { Line } from "react-chartjs-2";

const ChartComponent= ({ data, options }) => (
  <div className="bg-[#1e2737] p-4 rounded-lg shadow-md">
    <Line data={data} options={options} />
  </div>
);

export default ChartComponent;
