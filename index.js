const body = document.querySelector("body");
const details = {
  myName: "Funsho Ayobanjo",
  age: 22,
  country: "Nigeria",
};

function showDetails() {
  const thename = document.createElement("p");
  const age = document.createElement("p");
  const country = document.createElement("p");
  thename.textContent = details.myName;
  age.textContent = details.age;
  country.textContent = details.country;
  body.append(thename, age, country);
}
body.addEventListener("window.onload", showDetails());
