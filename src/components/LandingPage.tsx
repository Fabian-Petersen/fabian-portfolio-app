// import HeroImage from "./HeroImage";
// import HeroInfo from "./HeroInfo";
import useScreenSize from "../../src/hooks/useScreenSize";
import backgroundImage from "@/app/public/images/Element.png";

const LandingPage = () => {
  const isMobile = useScreenSize(640);
  return (
    <main
      id="landing"
      className="relative w-full bg-bgLight dark:bg-bgDark z-[0]"
    >
      <div className="absolute w-full h-[80%] top-1/2 -translate-y-1/2 -z-[1] opacity-50">
        <img
          src={backgroundImage}
          alt="background image"
          className="bg-contain invert brightness-150 dark:invert-0"
        />
      </div>
      <div
        className={`mx-auto max-w-6xl grid grid-flow-row grid-cols-[minmax(200px,400px),1fr] md:grid-cols-[minmax(300px,1fr),auto] ${
          isMobile && "grid-cols-[1fr]"
        } items-start justify-center text-gray-600 dark:text-white tracking-wider w-full sm:min-h-screen h-160`}
      >
        {/* <HeroInfo /> */}
        {/* <HeroImage /> */}
      </div>
    </main>
  );
};

export default LandingPage;
