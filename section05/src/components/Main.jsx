import "./Main.css";
import Bulb from "./Bulb";
import Counter from "./Counter";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다

// 자식 

// 부모 
// 부모 props 변경 -> 자식 랜더링 
// 부모 state 변경 -> 자식 랜더링 
function Main() {
    const user = {
        name : "Kim",
        isLogin : false
    };

    return (
        <main>
            <h1>-Main-</h1>
            <Bulb />
            <div>
                { user.isLogin ? (<div className="logout">로그아웃</div>) : (<div>로그인</div>) } 
            </div> 
            <Counter />
            <h1>---</h1>
        </main>
    );
};

export default Main;