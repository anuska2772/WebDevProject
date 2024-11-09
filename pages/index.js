import UserManagement from '../components/UserManagement';
import ContentModeration from '../components/ContentModeration';
import Analytics from '../components/Analytics';

export default function dashboard(){
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Admin dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <UserManagement />
                <ContentModeration />

            </div>
            <Analytics />
        </div>
    );
        
    
}