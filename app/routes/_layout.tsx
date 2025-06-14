import { Outlet } from "react-router";
import Navigation from "~/components/navigation";
import Footer from "~/components/footer";

export default function AppLayout() {
    return (
        <div className="min-h-screen">
             {/* Navigation */}
             <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}