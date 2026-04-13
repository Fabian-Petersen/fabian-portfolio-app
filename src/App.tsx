import "./index.css";
import LandingPage from "./components/LandingPage";
// import ContactPage from "@/components/contact/ContactPage";
// import ProjectsPage from "@/components/projects/ProjectPage";
// import TestimonialPage from "@/components/testimonials/TestimonialPage";
// import AboutPage from "@/components/about/AboutPage";

export default function HomePage() {
  return (
    <main className="flex flex-col items-start justify-center h-auto mx-auto">
      <LandingPage />
      {/* <AboutPage /> */}
      {/* <ProjectsPage /> */}
      {/* <TestimonialPage /> */}
      {/* <ContactPage /> */}
    </main>
  );
}
