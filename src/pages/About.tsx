import AboutItem from "../components/AboutItem/AboutItem.tsx";
import aboutData from '../data/about.json';

function AboutPage() {
    return (
        <>
            {aboutData.map((about, index) => (
                <AboutItem key={about.name} about={about} imageOnRight={index % 2 === 1}/>
            ))}
        </>
    );
}

export default AboutPage;