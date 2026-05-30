import { useState } from "react";

const Car = () => {
    // 자동차 상태 관리 선언
    const [car, setCar] = useState({
        brand: '현대',
        model: 'Sonata',
        year: 2020
    }
    );
    // 상태 업데이트 핸들러
    const updeateYear = () => {
        // 스프레드(점 3개 ...) 연산자
        // 기존은 car객체를 복사하고 year 속성만 변경
        setCar({...car, year: 2026})
    }
    return (
        <div>
            <h2>자동차 연식 업데이트</h2>
            <p>브랜드: {car.brand}</p>
            <p>모델: {car.model}</p>
            <p>연식: {car.year}</p>
            <button onClick={updeateYear}>연식 업데이트</button>
        </div>

    );
}

export default Car;