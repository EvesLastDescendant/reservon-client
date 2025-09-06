import { NavigationBar } from "@/custom-components/navigation-bars.jsx";
import {Header} from "@/custom-components/home/header.jsx";
import {Policy} from "@/custom-components/home/policy.jsx";
import {Services} from "@/custom-components/home/services.jsx";
import {Footer} from "@/custom-components/home/footer.jsx";

export const Home = () => {
    return (
        <div className={`min-h-screen flex flex-col justify-between items-center gap-10`}>
            <NavigationBar />
            <Header />
            <Policy />
            <Services />
            <Footer />
        </div>
    )
}