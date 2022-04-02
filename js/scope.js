let person = 'Lee';

function greeting() {
  // Function Scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  // Function Scope
  let person = 'Robert';
  alert(`Goodmorning, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`)
greeting2();