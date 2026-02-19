import Hero from '../../components/public/Hero';
import Services from '../../components/public/Services';
import Projects from '../../components/public/Projects';
import Process from '../../components/public/Process';
import Testimonials from '../../components/public/Testimonials';
import FinalCTA from '../../components/public/FinalCTA';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <Projects />
            <Process />
            <Testimonials />
            <FinalCTA />
        </div>
    );
};

export default Home;
