import {
  LogoFacebook,
  LogoGithub,
  LogoGoogle,
  LogoInstagram,
  LogoLinkedin,
  // LogoTwitter,
} from "react-ionicons";
import Project from "./models/project";
import Skill from "./models/skill";

export const primaryColor = "rgb(249, 115, 22)";

export const email = "abimbolamichael100@gmail.com";
export const name = "Abimbola Michael";

export const aboutMe = `Hello! I'm Abimbola Michael, a software engineer, currently a Mobile Developer with over 2 years of experience in mobile development, particularly focusing on
Flutter. Previously contributed to various projects in cross-functional teams, delivering responsive user interfaces
and scalable mobile applications. Eager to take on new challenges in a higher position where I can leverage my
skills in both mobile and web development technologies while promoting effective teamwork and innovation in a
dynamic environment.`;

export const introMessage =
  "Welcome to my Software Engineering portfolio, where innovation meets imagination! With a passion for crafting exceptional mobile and web applications, creating amazing solutions to problems, I strive to bring unique and captivating digital experiences to life.";
export const jobRole = "Software Engineer";
export const allRolles = [
  "Software Engineer",
  "Flutter Developer",
  "React Web Developer",
];
export const socialMediaIcons = [
  LogoGoogle,
  LogoGithub,
  LogoLinkedin,
  // LogoTwitter,
  LogoFacebook,
  LogoInstagram,
];
export const cvLink =
  "https://drive.google.com/file/d/1-cOhZgg2JJhWozhKN_G9_iR6mL3NWnJQ/view?usp=drivesdk";
export const socialMedialinks = [
  "mailto:abimbolamichael100@gmail.com",
  "https://github.com/abimbola-michael",
  "https://www.linkedin.com/in/michael-abimbola/",
  "https://twitter.com/urboihotshot?t=oscXe8CdJKyd8YxOqY6sIQ&s=09",
  "https://www.facebook.com/hotty.hotshot",
  "https://www.instagram.com/urboi_hotshot",
];

export const actions = ["Home", "About", "Skills", "Projects", "Contact"];
export const projects = [
  new Project(
    "Games Arena",
    "A games app which contains board, card, puzzle and quiz games",
    "https://play.google.com/store/apps/details?id=com.hms.gamesarena",
    ["assets/images/games1.jpg", "assets/images/games2.jpg"]
  ),
  new Project(
    "Vendease Marketplace",
    "A shopping app",
    "https://play.google.com/store/apps/details?id=com.vendease.marketplace",
    ["assets/images/vendease1.jpg", "assets/images/vendease2.jpg"]
  ),
  // new Project(
  //   "WhatsHot",
  //   "A social media app like WhatsApp, Facebook, Twitter and Instagram",
  //   "https://youtube.com/shorts/IL9t14X54KM?feature=share",
  //   ["assets/images/whatshot3.jpg", "assets/images/whatshot2.jpg"]
  // ),
  new Project(
    "NC Play",
    "A music streaming app incorporated with NC Crypto Coin",
    "https://github.com/Emusoft-Inc/ncplay-app",
    ["assets/images/ncplay1.jpg", "assets/images/ncplay2.jpg"]
  ),
  new Project(
    "Tunes Messenger",
    "A messenger app for chating and sharing of tunes",
    "https://github.com/Emusoft-Inc/tunemessenger-frontend-app",
    ["assets/images/tunesmess1.jpg", "assets/images/tunesmess2.jpg"]
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
    "Calcu8",
    "An easy to use scientific calculator",
    "https://github.com/abimbola-michael/Calcu8",
    ["assets/images/calc1.jpg", "assets/images/calc2.jpg"]
  ),
  new Project(
    "Portfolio",
    "My Portfolio website built with Flutter",
    "https://github.com/abimbola-michael/portfolio",
    ["assets/images/portfolio.png"]
  ),
  new Project(
    "Portfolio React",
    "My Portfolio website built with React",
    "https://abimbolamichael.vercel.app/",
    ["assets/images/portfolio_react.png"]
  ),
  new Project(
    "Airbnb Clone",
    "A clone of AirBnB which is broken into 4 versions",
    "https://github.com/abimbola-michael/AirBnB_clone_v4",
    ["assets/images/hbnb.png"]
  ),
  new Project(
    "Fix and Get",
    "A final portfolio project for a ALX Foundation section",
    "https://fix-and-get-portfolio-project.vercel.app/",
    ["assets/images/fixandget.png"]
  ),
  new Project(
    "Talking GPT",
    "A final portfolio project for a ALX Specialization section",
    "https://github.com/abimbola-michael/Talking-GPT",
    ["assets/images/talkinggpt.png"]
  ),
];
export const skills = [
  new Skill("Mobile Development", ["Flutter", "Dart"]),
  new Skill("Web Development", [
    "React",
    "NextJs",
    "HTML",
    "CSS",
    "JavaScript",
  ]),
  new Skill("Backend", ["Node", "Flask", "Express"]),

  new Skill("Database", ["Firebase", "Mongo DB"]),
  new Skill("State Management", ["Riverpod", "Bloc", "Provider", "Redux"]),
  new Skill("Version Control", ["Git and GitHub"]),
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
