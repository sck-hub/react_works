// 배열 생성
let numbers = new Array(4);

// console.log(numbers);
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;

console.log(numbers);
console.log("배열의 크기 : " , numbers.length);

// for문을 이용한 요소 출력
let demo = document.getElementById("demo");



for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i]);    // 0일 때 10, 1일 때 20 ...
    demo.innerHTML += numbers[i] + '<br>';    // 10, 20, 30, 40

    
}

// 배열객체에서 제공된 forEach를 이용한 출력
// forEach(요소변수, 인덱스)

numbers.forEach( (number, index) => {   // 콜백함수(callbackFn)
    demo.innerHTML += `${(numbers[i])}<br>`

} )

