import "./App.css";
import Header from "./components/Header";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <div className="h-screen flex flex-col overflow-hidden font-roboto">
      <Header />
      <div className="flex flex-col overflow-y-auto">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <SkillsPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
