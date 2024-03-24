import {
  LogoFacebook,
  LogoGithub,
  LogoGoogle,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
import { primaryColor } from "../data";

export default function SocialMediaIcon({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <a
      href={link}
      target="blank"
      className="rounded-full flex items-center justify-center border-primary border-2 py-2 px-4 gap-2 text-primary
       hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
    >
      {name === "gmail" ? (
        <LogoGoogle color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : name === "github" ? (
        <LogoGithub color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : name === "linkedin" ? (
        <LogoLinkedin color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : name === "twitter" ? (
        <LogoTwitter color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : name === "facebook" ? (
        <LogoFacebook color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : name === "instagram" ? (
        <LogoInstagram color={primaryColor} style={{ width: 20, height: 20 }} />
      ) : (
        <></>
      )}
      <span className="capitalize text-md">{name}</span>
    </a>
  );
}
