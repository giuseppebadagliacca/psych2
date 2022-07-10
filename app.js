const divDOM = document.querySelector('#main');
const div2DOM = document.querySelector('#main2');
const div3DOM = document.querySelector('#main3');
const h1DOM = document.querySelector('h1');

function random255(){
  return Math.floor(Math.random()*256);
}

divDOM.addEventListener('click', changeColor);
div2DOM.addEventListener('click', changeColor2);
div2DOM.addEventListener('click', changeColor3);

function changeColor(){
    let random1 = random255();
    let random2 = random255();
    let random3 = random255();
    divDOM.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3}`;
}
function changeColor2(){
    let random1 = random255();
    let random2 = random255();
    let random3 = random255();
    div2DOM.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3}`;

}
function changeColor3(e){
    let random1 = random255();
    let random2 = random255();
    let random3 = random255();
    div3DOM.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3}`;
}


