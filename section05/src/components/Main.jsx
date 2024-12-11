import { useState } from "react";
import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다

function Main() {
    const user = {
        name : "Kim",
        isLogin : false
    };
    const [num, changeNum] = useState(0);

    return (
        <main>
            <h1>-Main-</h1>
            <div>
                { user.isLogin ? (<div className="logout">로그아웃</div>) : (<div>로그인</div>) } 
            </div> 
            <div> 
                <h2> { num } <button onClick={ () => { changeNum((num) => num+1) } }>버튼</button> </h2> 
            </div>
            <h1>---</h1>
        </main>
    );
};

export default Main;