import "./styles.css";
import { homePage } from "./initialPage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";

//Select buttons
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

//Standard page
document.addEventListener("DOMContentLoaded", homePage);


//Fire events
homeBtn.addEventListener("click", homePage);
menuBtn.addEventListener("click", menuPage);
aboutBtn.addEventListener("click", aboutPage);
