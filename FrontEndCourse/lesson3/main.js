//alert('hello');
//alert(111+222);

let name = 'kenta';
console.log(name);


function helloConsole(name){
  console.log(`hello ${name}`);
}

helloConsole("kawamoto");

const add = (x,y) =>{
  const sum = x + y;
  return sum;
};

console.log(add(1,2));


const trafficright={
  blue:'go',
  red:'stop',
};

console.log(trafficright);
console.log(trafficright.blue);

console.log(trafficright['red']);

trafficright.blue="gogo";

console.log(trafficright.blue);

console.log(trafficright['red']);

const person={
  name:'kenta2',
  greet(name){
    console.log('hihi ' + `${name}`);
  },
};

person.greet("kenta");


const members = ['inu', 'kiji'];
console.log(members);
console.log(members.slice(1));

console.log(members);
members.push('hato');
console.log(members);


function addRespect(member){
  console.log(member + '-san');
}

members.forEach(addRespect);



document.getElementById('box').textContent = "hello";
document.getElementById('box').textContent = new Date().toLocaleString();



const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  alert('osareta');
});























