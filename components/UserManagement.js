import { useDashboarddata } from '../services/api';
export default function UserManagement(){
    const {data, isLoading, isError}= useDashboarddata();

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error Loading Data!</p>;

    return(
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <ul>
                {data.users.map((user) =>(
                    <li key={user.id} className="p-2 border-b">
                        <p>{user.name}</p>
                        <p>{user.activity}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}