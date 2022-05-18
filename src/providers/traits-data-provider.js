import Trait from "../objects/Trait";

let traits = [];

let trait1 = new Trait();
trait1.name = "Holistic Designer";
trait1.description =
  " Design should be treated as a living organism, guided by the environment it lives in as a whole.";

let trait2 = new Trait();
trait2.name = "User-Focused";
trait2.description =
  " I pay close attention to the user’s needs and pain points. I design with empathy. Launch, learn & iterate.";

let trait3 = new Trait();
trait3.name = "Proactive Evolution";
trait3.description =
  "Curiosity and a desire to learn constantly broadens my skill set, enabling me to wear many hats at once.";

let trait4 = new Trait();
trait4.name = "Bold, yet practical";
trait4.description =
  "I know when to push the boundaries vs. when to embrace simplicity to meet multiple deadlines.";

traits.push(trait1);
traits.push(trait2);
traits.push(trait3);
traits.push(trait4);

export default traits;
