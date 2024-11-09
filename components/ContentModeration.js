import { useDashboarddata } from '../services/api';

export default function ContentModeration(){
    const {data, isLoading, isError}= useDashboarddata();

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error Loading Data!</p>;

    return (
        <div className="bg-white shadow-md p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">ContentModeration</h2>
            <ul>
                {data.posts.map((post) =>(
                    <li key={post.id} className="p-2 border-b">
                        <p>{post.title}</p>
                        <p>Views: {post.views} | Shares: {post.shares} | Comments: {post.comments}</p>
                    </li>
                ))}
            </ul>

        </div>
    );
}