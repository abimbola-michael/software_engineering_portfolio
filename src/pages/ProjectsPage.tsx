import { useCallback, useEffect, useState } from "react";
import { projects } from "../data";
import { ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";
// import { primaryColor } from "../data";
import AppButton from "../components/AppButton";

export default function ProjectsPage() {
  const [index, setIndex] = useState(0);
  const length = projects.length;
  const project = projects[index];
  const goNext = useCallback(
    function goNext() {
      setIndex((prevIndex) => (prevIndex + 1) % length);
    },
    [length]
  );
  function goPrev() {
    setIndex((prevIndex) => (prevIndex - 1) % length);
  }
  useEffect(() => {
    const interval = setInterval(goNext, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [goNext]);
  return (
    <div
      className="flex flex-col min-h-screen items-center text-center px-[5%] py-[5%] gap-4"
      id="projects"
    >
      <h1 className="text-4xl md:text-5xl font-bold py-3 first-letter:underline underline-offset-8 first-letter:decoration-orange-400">
        Projects
      </h1>
      <div className="flex flex-col md:flex-row items-center w-full h-full gap-4">
        <ul className="flex justify-center items-center w-full h-full gap-2 md:w-[70%] max-h-[70%] md:max-h-[90%] overflow-auto">
          {project.images.map((image) => {
            return (
              <div className="w-full h-full rounded-lg" key={image}>
                <img
                  src={image}
                  key={image}
                  className="w-full h-full  rounded-lg"
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </ul>
        {/* md:text-start md:items-start */}
        <div className="w-full md:w-[30%] flex flex-col items-center text-center gap-2">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <div className="flex items-center gap-2 justify-between">
            <div
              className={`${
                index !== 0 ? "bg-primary" : ""
              } w-[40px] h-[40px] rounded-full flex items-center justify-center`}
            >
              <ChevronBackOutline
                onClick={goPrev}
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </div>

            <AppButton text="Checkout" href={project.url} />

            <div
              className={`${
                index !== length - 1 ? "bg-primary" : ""
              } w-[40px] h-[40px] rounded-full flex items-center justify-center`}
            >
              <ChevronForwardOutline
                onClick={goNext}
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
