import { skills } from "../data";

export default function SkillsPage() {
  return (
    <div
      className="flex flex-col min-h-screen items-center text-center justify-center px-[5%] py-[5%] gap-4"
      id="skills"
    >
      <h1 className="text-4xl md:text-5xl font-bold first-letter:underline underline-offset-8 first-letter:decoration-orange-400">
        Skills
      </h1>
      <ul className="w-full flex flex-wrap justify-center gap-10 my-4">
        {skills.map((skill) => {
          return (
            <li key={skill.title} className="flex flex-col">
              <h3 className="font-bold text-lg">{skill.title}</h3>
              <p className="text-md">{skill.names.join(", ")}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
