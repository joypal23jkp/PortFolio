import Experience from "../objects/Experience";

let experiences = [];
let firstExperience = new Experience();
firstExperience.designation = "front-end developer";
firstExperience.company = "Dropbox";
firstExperience.startingDate = "march2020";
firstExperience.endDate = "Present";
firstExperience.details =
  "Describe your responsibilities." +
  "  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat," +
  " ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, " +
  "qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, " +
  "cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.";
experiences.push(firstExperience);

let secondExperience = new Experience();

secondExperience.designation = "Visual Designer";
secondExperience.company = "OutboundEngine";
secondExperience.startingDate = "sept.2017";
secondExperience.endDate = "mar.2020";
secondExperience.details =
  "Describe your responsibilities." +
  "  Tum dicere exorsus est cur verear, ne ad id omnia referri oporteat," +
  " ipsum per se ipsam voluptatem, quia consequuntur magni dolores eos, " +
  "qui blanditiis praesentium voluptatum deleniti atque insitam in ea quid est eligendi optio, " +
  "cumque nihil ut ipsi auctori huius disciplinae placet: constituam, quid.";
experiences.push(secondExperience);

export default experiences;
