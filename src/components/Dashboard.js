import useSWR from 'swr';
import { Line } from 'react-chartjs-2';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data, error } = useSWR('https://api.socialverseapp.com/admin/dashboard', fetcher);

  if (error) return <div>Failed to load data</div>;
  if (!data) return <div>Loading...</div>;

  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'User Activity',
        data: data.activity,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        fill: false,
      },
    ],
  };

  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the Admin Dashboard!</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">User Engagement</h3>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;


