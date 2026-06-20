function displayA() {
    console.log('A');
    
}

// 매개변수 - callBack
// 함수의 매개변수로 또 다른 함수를 전달시켜서 실행 순서를 제어
function displayB(callBack) {
    // console.log('B');
    // 2초 후에 'B'를 출력
    setTimeout(() => {
        console.log('B');
        callBack(); // 호출
        
    }, 2000);
    
}

function displayC() {
    console.log('C');
    
}

displayA();
displayB(displayC);
