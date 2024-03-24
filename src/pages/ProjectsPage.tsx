import { useCallback, useEffect, useState } from "react";
import { projects } from "../data";
import { ChevronBackOutline, ChevronForwardOutline } from "react-ionicons";
import { primaryColor } from "../data";
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
    const interval = setInterval(goNext, 5000);
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
        <div className="flex justify-center items-center w-full h-full gap-2 md:w-[70%] max-h-[70%] md:max-h-[90%]">
          {index !== 0 && (
            <ChevronBackOutline
              onClick={goPrev}
              style={{ fontSize: "30px", color: primaryColor }}
            />
          )}
          <ul className="h-full flex justify-center items-center gap-4">
            {project.images.map((image) => {
              return (
                <img
                  src={image}
                  key={image}
                  className="w-full h-full rounded-lg"
                  style={{ objectFit: "cover" }}
                />
              );
            })}
          </ul>
          {index !== length - 1 && (
            <ChevronForwardOutline
              onClick={goNext}
              style={{ fontSize: "30px", color: primaryColor }}
            />
          )}
        </div>

        <div className="w-full md:w-[30%] flex flex-col items-center text-center md:items-start md:text-start gap-2">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <AppButton text="Checkout" href={project.url} />
        </div>
      </div>
    </div>
  );
}
