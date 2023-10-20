import { Professional } from "./professional";

let professional1: Professional = new Professional("Jessica Chastain", 
    46, 56, 163, false, "American", 1, "actress");
let professional2: Professional = new Professional("Anthony Hopkins",
    85, 82, 173, false, "American", 2, "actor");
let professional3: Professional = new Professional("Joaquin Phoenix",
    48, 57, 173, false, "American", 1, "actor");

console.log(professional1.showData());
console.log(professional2.showData());
console.log(professional3.showData());
