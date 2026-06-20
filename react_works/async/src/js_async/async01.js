function displayA() {
    console.log('A');
    
}

function displayB() {
    // console.log('B');
    // 2초 후에 'B'를 출력
    setTimeout(() => {
        console.log('B');
        
    }, 2000);
    
}

// 로그인 의 경우 db에서 가져온걸 기다렸다가 출력할 때 비동기를 씀

function displayC() {
    console.log('C');
    
}

displayA();
displayB();
displayC();