import { useState, useRef } from "react"; 

// 간단한 회원가입 폼 // 
// 1.이름
// 2.생년월일
// 3.국적 
// 4.자기소개

const Register = () => {

    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("생일");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState(""); 

    const countRef = useRef(0);
    const inputRef = useRef(); 

    const [input, setInput] = useState({
        name: "",
        birth:"",
        country: "",
        bio:""
    });

    const onChange = (e) => {
        countRef.current++; 
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = () => {
        if(input.name === "") {
            inputRef.current.focus(); 
        }
    };

    // const onChangeName = (e) => { 
    //     setInput({
    //         ...input,
    //         name: e.target.value
    //     });    
    // };
    
    // const onChangeBirth = (e) => { 
    //     setInput({
    //         ...input,
    //         birth: e.target.value
    //     }); 
    // };

    // const onChangeCountry = (e) => { 
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     }); 
    // }

    // const onChangeBio = (e) => { 
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     }); 
    // }

    return (
        <div>
            <h1>회원가입</h1>
            <div>
                <input 
                    ref = {inputRef}
                    name = "name"
                    value={input.name}
                    onChange={onChange} 
                    placeholder="이름" /> 
            </div>
            <div>
                <input
                    name = "birth"
                    value={input.birth}
                    onChange={onChange} 
                    type="date" />
                    {birth}
            </div>
            <div>
                <select 
                    name = "country"
                    value={input.country} 
                    onChange={onChange}>
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
            </div>
            <div>
                <textarea 
                    name = "bio"
                    value={input.bio} 
                    onChange={onChange} 
                    placeholder="자기소개" /> 
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Register;