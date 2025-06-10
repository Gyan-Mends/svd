import { Outlet } from "react-router";
import Navigation from "~/components/navigation";

export default function AppLayout() {
    return (
        <div className="min-h-screen">
             {/* Navigation */}
             <Navigation />
            <Outlet />
        </div>
    )
}