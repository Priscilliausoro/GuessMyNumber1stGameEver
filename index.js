// const array1=[17, 21,23]
// const arr2 = [12,5,-5,0,4]

// const printForecast = function(arr){
// let str = '';
// for(let i = 0; i < arr.length; i++){
// str +=` ${arr[i]} °C in ${i +1} days ...`
// }
// console.log("...." + str)
// }
// printForecast(arr2)

// const input = document.getElementById('input')
//  const data = document.querySelector('.data')
// const btn = document.querySelector('.btn')
// let str = 'hello'

// function clickBtn(){
// data.textContent =  input.value

// if (input === str){
//     document.querySelector("body").style.backgroundColor = 'red'
// }
// console.log(input.value)

// }

// input.addEventListener("click", clickBtn)
let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector(".highscore").textContent = highscore;

document.querySelector(".score").textContent = score;

// const message = function(msg){
//     document.querySelector(".message").textcontent = ''
// }

console.log(number);

const check = document.querySelector(".check");
// const again = document.querySelector('.again')

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);

  if (guess === number) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".section1").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "12rem";
    document.querySelector(".number").textContent = number;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "🤷‍♀️ No Number....";
  }
  //   else if (guess > number) {
  //     document.querySelector(".message").textContent = "👆 Too High....";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  else if (guess !== number) {
    if (score > 1) {
      guess > number
        ? (document.querySelector(".message").textContent = "👆 Too High....")
        : (document.querySelector(".message").textContent = "👇 Too low....");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😓 Try Again";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "😬 Start guessing...";
  document.querySelector(".score").textContent = score;

  document.querySelector(".section1").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "9rem";
  document.querySelector(".input").value = "";
 });
