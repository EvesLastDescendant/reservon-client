import { NavigationBar } from "@/custom-components/navigation-bars.jsx";
import {Header} from "@/custom-components/home/header.jsx";
import {Policy} from "@/custom-components/home/policy.jsx";
import {Services} from "@/custom-components/home/services.jsx";
import {Footer} from "@/custom-components/home/footer.jsx";

export const Home = () => {
    const url = import.meta.env.VITE_APP_API_URL
    return (
        <div className={`min-h-screen flex flex-col justify-between items-center gap-10`}>
            <NavigationBar />
            <Header />
            <Policy />
            <div>url = {url}</div>
            <Services />
            <Footer />
        </div>
    )
}