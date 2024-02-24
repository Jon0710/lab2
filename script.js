if (!sessionStorage.getItem('alertShown')) {     // If not, show the alert     
    alert("Welcome to my personal profile!");     // Mark the alert as shown in sessionStorage     
    sessionStorage.setItem('alertShown', 'true');   }

let name = "Jon Morieshi";
let age = 20;
let occupation = "Student";

console.log("Name:", name);
console.log("Age:", age);
console.log("Occupation:", occupation);

let availableForHire = false;

if (availableForHire) {
  console.log("I am available for hire.");
} else {
  console.log("I am not available for hire at the moment.");
}