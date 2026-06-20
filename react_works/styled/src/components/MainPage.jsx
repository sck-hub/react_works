import styled from "styled-components";

// 스타일 정의
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1`
    font-size: 1.5rem;
`

const Button = styled.button`
    padding: 6px 12px;
    font-size: 1rem;
    color: #eee;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{background-color: #0056b3};
    margin: 6px;
`

// 상속 : Button 컴포넌트 상속받기 - 소괄호안에 명시함
const RoundedButton = styled(Button)`
    border-radius:50px;
`

const MainPage = () => {
    return (
        <Wrapper>
            <Title>Hello~ React</Title>
            <Button>Click Me</Button>
            <RoundedButton>Click Me</RoundedButton>
        </Wrapper>
    )
}

export default MainPage;