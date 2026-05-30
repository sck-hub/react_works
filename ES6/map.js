// map()함수 (배열 관련) : 배열의 각 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환하는 함수

const numbers = [1,2,3,4];

// 함수의 매개변수가 함수 인 것을 callback이라함
// map에는 콜백함수가 오는데 중괄호와 return은 생략 가능, 매개변수 x의 괄호도 생략 가능
const newNumbers = numbers.map(x => x * 2)
console.log(newNumbers);    // 2,4,6,8

// 객체배열에서 특정 속성만 추출하기
const users = [
    { name: 'Jerry', age: 25 },
    { name: 'Linda', age: 30 },
    { name: 'Tom', age:  35 }
]

// 이름만 mapping해서 한꺼번에 출력 : 이름을 저장하는 배열 생성
const names = users.map(user => user.name)  // names : 새로운 배열 , return 생략되어있음, cf. user : 변수 (임의로 지정한다 ex) abc 등 가능)
console.log(names);     // 이름만 출력됨

// 나이를 저장하는 배열 생성
const ages = users.map(user => user.age)
console.log(ages);  // 나이가 출력됨

