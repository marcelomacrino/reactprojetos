import React, { useState } from 'react'
import Title from '../components/Title'

export default function EsignatureApp() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const inputStyle = {
        border: "none",
        borderBottom: "2px dotted",
        outline: "none",
        padding: ".35rem 0",
    };

    document.body.style.backgroundColor = "#f3f3f3";

    return (
        <div className='container text-center'>

            <Title classes={"title"} text={!name ? "Digite sua Assinatura" : name}/>

            <Title classes={"main-title mb-4"} text={!date ? "Digite uma Data" : date}/>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, cum dolor eum porro, 
            debitis eos nobis natus nisi, pariatur at officia alias tempora cumque illum quo possimus error facilis sint?</p>

            <footer className='d-flex' style={{justifyContent: "space-around", position: "relative", top: "40vh"}}>

                <input type="date" value={""} style={{inputStyle}} onChange={handleDateChange}/>

                <input type="text" value={name} style={{inputStyle}} onChange={handleNameChange}/>

            </footer>
            
        </div>
    )
}
