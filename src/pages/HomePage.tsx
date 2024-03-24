import ProfilePhoto from "../components/ProfilePhoto";
import { introMessage, jobRole, name } from "../data";

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen items-center text-center justify-center px-[5%] py-[5%]"
      id="home"
    >
      <ProfilePhoto />
      <p className="captialize text-xl text-primary">Hello, my name is</p>
      <h1 className="text-4xl md:text-5xl font-bold first-letter:underline underline-offset-8 first-letter:decoration-orange-400">
        {name}
      </h1>
      <p className="captialize text-xl text-primary pt-12">And, I am a</p>
      <h1 className="text-2xl md:text-3xl font-bold first-letter:underline underline-offset-8 first-letter:decoration-orange-400">
        {jobRole}
      </h1>
      {/* <div className="flex gap-3 pt-4">
        <SocialMediaIcon name="github" link={socialMedialinks[0]} />
        <SocialMediaIcon name="linkedin" link={socialMedialinks[1]} />
        <SocialMediaIcon name="twitter" link={socialMedialinks[2]} />
        <SocialMediaIcon name="facebook" link={socialMedialinks[3]} />
        <SocialMediaIcon name="instagram" link={socialMedialinks[4]} />
      </div> */}
      <p className="text-lg pt-8">{introMessage}</p>
    </div>
  );
}
