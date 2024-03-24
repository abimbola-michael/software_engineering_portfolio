import { aboutMe } from "../data";

export default function AboutPage() {
  return (
    <div
      className="flex flex-col min-h-screen items-center text-center justify-center px-[5%] py-[5%] gap-4"
      id="about"
    >
      <h1 className="text-4xl md:text-5xl font-bold py-3 first-letter:underline underline-offset-8 first-letter:decoration-primary">
        About Me
      </h1>
      <p className="text-lg">{aboutMe}</p>
    </div>
  );
}
