import Social from "../objects/Social";

const facebook = new Social();
facebook.name = "facebook";
facebook.link =
  "https://www.figma.com/file/OWY4rUxcBv05NUj89cWZky/2020-Responsive-Resume-Kit-(Community)?node-id=27%3A578";
facebook.img = require("../assets/images/facebook.png");

const instagram = new Social();
instagram.name = "instagram";
instagram.link =
  "https://www.figma.com/file/OWY4rUxcBv05NUj89cWZky/2020-Responsive-Resume-Kit-(Community)?node-id=27%3A578";
instagram.img = require("../assets/images/instagram.png");

const linkedin = new Social();
linkedin.name = "linkedin";
linkedin.link =
  "https://www.figma.com/file/OWY4rUxcBv05NUj89cWZky/2020-Responsive-Resume-Kit-(Community)?node-id=27%3A578";
linkedin.img = require("../assets/images/linkedin.png");

const twitter = new Social();
twitter.name = "twitter";
twitter.link =
  "https://www.figma.com/file/OWY4rUxcBv05NUj89cWZky/2020-Responsive-Resume-Kit-(Community)?node-id=27%3A578";
twitter.img = require("../assets/images/twitter.png");

let socials = [facebook, instagram, linkedin, twitter];

export default socials;
