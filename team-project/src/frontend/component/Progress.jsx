// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

function Progress({ progressCount }) {
    const [count, setCount] = useState(progressCount);
    useEffect(() => {
        add_count();
    });
    function add_count() {
        if (count === 12) {
            setCount(12);
        } else {
            setCount(progressCount + 1);
        }
    }

    return (
        <Container
        // onClick={() => {
        //     add_count();
        // }}
        >
            {/*%로 부모넓이의 1/5 씩 넓어짐*/}
            <Go width={(count / 12) * 100 + '%'} />
            <Dot />
        </Container>
    );
}

export default Progress;

const Container = styled.div`
    margin: 50px auto;
    background-color: #eee;
    width: 500px;
    height: 40px;
    display: flex;
    align-items: center;
    border-radius: 20px;
`;
const Go = styled.div`
    background-color: blue;
    width: ${(props) => props.width};
    height: 100%;
    transition: width 1s;
    border-radius: 20px;
`;

//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    border: 10px solid blue;
    border-radius: 35px;
    background: yellow;
    margin-left: -35px;
`;
