
// const or let
const arr = [10, 20]  // 배열(정수,숫자형)
console.log(arr[0]);    // 10
console.log(arr[1]);    // 20

// 배열의 구조 분해 할당
// [a, b] = [10, 20]
// 리액트 배열 문법
// [] 배열 요소 ] = 배열 이름
const [a, b] = arr;
console.log(a); //10
console.log(b); //20

// 객체의 구조 분해 할당
const product = {
    name: "무선마우스",
    price: 27000
}

// const { 객체 속성 } = 객체
const { name, price } = product
console.log(`제품명 : ${name}`);
console.log(`가격 : ${price}`);





 
