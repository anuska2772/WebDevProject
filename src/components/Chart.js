import { Line } from 'react-chartjs-2';

const Chart = ({ chartData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Line data={chartData} />
    </div>
  );
};

export default Chart;
