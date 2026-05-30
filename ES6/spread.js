// spread 연산자 - 전개 연산자 
// ... (점 3개)를 (배열이나 객체 이름)앞에 붙임
// 여러개를 서로 합칠 때 ...을 사용

let arr1 = [1,2,3];
let arr2 = [4,5];

// arr1 배열에 arr2를 추가하여 새로운 배열을 생성함 (= [])
let newArr = [...arr1, ...arr2]         // 합쳐짐
console.log(newArr);        // 1,2,3,4,5

// 객체에서 사용 (= 중괄호)
let obj1 = {
    name: '무선마우스', 
    price: 32000
}

let obj2 = { description: 'M200 마우스 그레이'
}

let combineObj = {...obj1, ...obj2}
console.log(combineObj);
