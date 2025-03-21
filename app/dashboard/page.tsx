import DashboardContent, { Post } from "./DashboardContent";
import { fetchPosts } from "@/utils/fetchPosts";

const Dashboard = async () => {
    const posts: Post[] = await fetchPosts();

    return (
        <div className="p-8 min-h-screen">
            <div
                className="rounded-xl  transition-all 
                            shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)] 
                            p-10 backdrop-blur-md"
            >
                <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
                    Dashboard
                </h1>
                <DashboardContent initialPosts={posts} />
            </div>
        </div>
    );
};

export default Dashboard;
