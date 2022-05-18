import Profile from "../objects/Profile";
import experiences from "./experience-data-provider";
import educations from "./education-data-provider";
import skill from "./skill-data-provider";
import awards from "./award-data-provider";
import traits from "./traits-data-provider";
import works from "./works-data-provider";
import socials from "./socials-data-provider";
/*profile data provider*/
const name = "Joy Kumar Pal";
const designation = "Software Engineer";
const image = "";
const email = "joypal.23.jkp@gmail.com";
const phone = "+8801923927992";
const aboutParagraph =
  "Use this area to say something about yourself or describe your goals. " +
  " Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat," +
  " ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos," +
  " qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, " +
  "cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.";

const profile = new Profile();
profile.name = name;
profile.designation = designation;
profile.image = image;
profile.email = email;
profile.phone = phone;
profile.description = aboutParagraph;
profile.experiences = experiences;
profile.educations = educations;
profile.skillSets = skill;
profile.awards = awards;
profile.traits = traits;
profile.recentWorks = works;
profile.socials = socials;

export { profile };
