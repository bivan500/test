// // "use strict"
// // let calculator = {
// //   read(num1, num2) {
// //     this.num1 = +num1;
// //     this.num2 = +num2;
// //     return;
// //   },
// //   sum(){
// //     let sum = null;
// //     return sum = this.num1 + this.num2;
// //   },
// //   mul(){
// //     let mul = null;
// //     return mul = this.num1 * this.num2;
// //   },
// // }
// // calculator.read( prompt ("number 2", ""), prompt ("number 2", "") );
// // alert( calculator.sum() );
// // alert( calculator.mul() );
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // показывает текущую ступеньку
//     return alert( this.step );
//   }
// };
// ladder.up().up().down().showStep();
// function ucFirst (currenString){
//   firstLetter = currenString.slice(0,1);
//   firstLetter = firstLetter.toUpperCase();
//   otherLettter = currenString.slice(1);
//   return firstLetter + otherLettter;
// }
// alert( ucFirst("name") );

// function extractCurrentValue( currentValue) {
//   return currentValue.slice(currentValue.indexOf("$") + 1)
//
// }
// // alert( extractCurrentValue("$123"));
// let n = currenString => currenString.toLowerCase().includes("xxx") || currenString.toLowerCase().includes("viagra") ? true : false;
// alert ( n("buy ViAgRA now"));
function printArr (arr){
  for (key of arr){
    alert(key);
  }
}
let arr = ['Джаз','Блюз'];
// printArr (arr);
arr.push('Рок-н-ролл');
// printArr (arr);
arr[Math.floor(arr.length/2)] = 'Классика';
alert ( arr.shift() );
arr.unshift('Рэп', 'Регги');
printArr (arr); 
