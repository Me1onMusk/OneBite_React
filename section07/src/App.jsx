import React from 'react';
import './App.css'  //index.css import 확인
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import { useState, useEffect, useRef } from 'react'; 
import Even from './components/Even'; 

function App() {

  const isMount = useRef(false); //플래그 
  
  // 1.마운트: 탄생 
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2.업데이트: 변화, 렌더링
  useEffect(() => {
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3.언마운트: 죽음

  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]); //의존성 배열 (dependency array) deps 

  const onClickButton =(value) => {
    setCount(count + value); 
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count = {count}/>  
        {count % 2 === 0 && count !== 0 ? <Even /> : null} 
      </section>
      <section>
        <Controller onClickButton = {onClickButton}/>
      </section>
    </div>
  );
};

export default App 

//  className="App"
// className="App-header"