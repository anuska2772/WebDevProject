import {Line} from 'react-chartjs-2';
import { useDashBoardData } from '../services/api';

export default function Analytics(){
    const {data, isLoading, isError} = useDashBoardData();

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error loading data</p>;

    const chartData={
        labels: data.analytics.map((entry)=> entry.date),
        datasets: [
            {
                label: 'Views',
                data: data.analytics.map((entry)=> entry.views),
                borderColor: 'rgba(75, 192, 192, 1)',
                fill:false,
            },
            {
                label: 'Likes',
                data: data.analytics.map((entry)=> entry.likes),
                borderColor: 'rgba(153, 102, 255, 1)',
                fill: false,
            },
        ],
    };
        

return(
    <div className="bg-white shadow-md p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-4">Analytics</h2>
      <Line data={chartData} />
    </div>
    );
}