import About from "@/ui/containers/About";
import Advantages from "@/ui/containers/Advantages";
import Contact from "@/ui/containers/Contact";
import FAQList from "@/ui/containers/FaqList";
import Hero from "@/ui/containers/Hero";
import Partners from "@/ui/containers/Partners";
import Statistics from "@/ui/containers/Statistics";

const Home = async () => {
    return (
        <div className="flex flex-col gap-[120px]">
            <Hero />
            <About />
            <Advantages />
            <Statistics />
            <Partners />
            <Contact />
            <FAQList />
        </div>
    );
};

export default Home;
