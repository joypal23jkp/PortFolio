import Award from "../objects/Award";

const awards = [];

let award1 = new Award();
award1.title = "Award 1";
award1.date = "Mar. 2019";
let award2 = new Award();
award2.title = "Award 2";
award2.date = "Sept. 2015";
let award3 = new Award();
award3.title = "Award 3";
award3.date = "Feb. 2013";
let award4 = new Award();
award4.title = "Award 4";
award4.date = "Dec. 2011";

awards.push(award1);
awards.push(award2);
awards.push(award3);
awards.push(award4);

export default awards;
