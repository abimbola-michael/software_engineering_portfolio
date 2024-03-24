import {
  LogoFacebook,
  LogoGithub,
  LogoGoogle,
  LogoInstagram,
  LogoLinkedin,
  LogoTwitter,
} from "react-ionicons";
import Project from "./models/project";
import Skill from "./models/skill";

export const primaryColor = "rgb(249, 115, 22)";

export const email = "abimbolamichael100@gmail.com";
export const name = "Abimbola Michael";

export const aboutMe =
  "I'm Abimbola Michael, a passionate Flutter developer with 2 years of experience in building stunning and performant mobile applications. With a keen eye for design and a knack for problem-solving, I specialize in crafting beautiful user interfaces and seamless user experiences using Flutter. My journey with Flutter began 2 years ago when I discovered its power to create cross-platform mobile applications with a single codebase. Since then, I've been hooked on the framework and have had the opportunity to work on a variety of projects spanning different industries. Throughout my career, I've had the pleasure of collaborating with talented teams to bring innovative ideas to life. Whether it's creating pixel-perfect UI designs, optimizing app performance, or implementing complex features, I thrive on the challenge of pushing the boundaries of what's possible with Flutter. Let's build something amazing together!";

export const introMessage =
  "Welcome to my Flutter app developer portfolio, where innovation meets imagination! With a passion for crafting exceptional mobile applications, I strive to bring unique and captivating digital experiences to life.";
export const jobRole = "Flutter Developer";
export const allRolles = [
  "Flutter Developer",
  //"Java/Kotlin Developer",
  "React Web Developer",
  "Software Engineer",
];
export const socialMediaIcons = [
  LogoGoogle,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
  LogoFacebook,
  LogoInstagram,
];
export const cvLink =
  "https://drive.google.com/file/d/1-cOhZgg2JJhWozhKN_G9_iR6mL3NWnJQ/view?usp=drivesdk";
export const socialMedialinks = [
  "mailto:abimbolamichael100@gmail.com",
  "https://github.com/abimbola-michael",
  "https://www.linkedin.com/in/abimbola-michael-227181193",
  "https://twitter.com/urboihotshot?t=oscXe8CdJKyd8YxOqY6sIQ&s=09",
  "https://www.facebook.com/hotty.hotshot",
  "https://www.instagram.com/urboi_hotshot",
];

export const actions = ["Home", "About", "Skills", "Projects", "Contact"];
export const projects = [
  new Project(
    "Games Arena",
    "An App of Games, consisting of 5 games which are Whot, Chess, Draught, Ludo and X and O",
    "https://play.google.com/store/apps/details?id=com.hms.gamesarena",
    ["assets/images/games1.jpg", "assets/images/games2.jpg"]
  ),
  new Project(
    "WhatsHot",

    "A social media app like WhatsApp, Facebook, Twitter and Instagram",
    "https://youtube.com/shorts/IL9t14X54KM?feature=share",
    ["assets/images/whatshot3.jpg", "assets/images/whatshot2.jpg"]
  ),
  new Project(
    "Calcu8",
    "An easy to use scientific calculator",
    "https://github.com/abimbola-michael/Calcu8",
    ["assets/images/calc1.jpg", "assets/images/calc2.jpg"]
  ),
  new Project(
    "Recipy",
    "A Recipy app reading from RapidApi",
    "https://github.com/abimbola-michael/Recipy",
    ["assets/images/recipy1.jpg", "assets/images/recipy2.jpg"]
  ),
  new Project(
    "Social Life",
    "A UI App for a social media",
    "https://github.com/abimbola-michael/SocialLife",
    ["assets/images/socialui1.jpg", "assets/images/socialui2.jpg"]
  ),
  new Project(
    "Traveller",
    "A UI app for travelling",
    "https://github.com/abimbola-michael/Traveller",
    ["assets/images/traveller1.jpg", "assets/images/traveller2.jpg"]
  ),
  new Project(
    "Chatty",
    "A Chat UI app",
    "https://github.com/abimbola-michael/Chatty",
    ["assets/images/chatty1.jpg", "assets/images/chatty2.jpg"]
  ),
  new Project(
    "Portfolio",
    "My Portfolio website built with Flutter",
    "https://github.com/abimbola-michael/portfolio",
    ["assets/images/portfolio.png"]
  ),
];
export const skills = [
  new Skill("Mobile Development", ["Flutter", "Dart"]),
  new Skill("Database", ["Firebase", "Mongo DB"]),
  new Skill("State Management", ["Riverpod", "Bloc"]),
  new Skill("Version Control", ["Git and GitHub"]),
  new Skill("Other Stacks", ["React", "Nodejs and Express", "Flask"]),
  new Skill("Programming Languages", [
    "Dart",
    "JavaScript",
    "TypeScript",
    "Python",
    "C",
    "Java",
    "Kotlin",
    "Swift",
  ]),
];
