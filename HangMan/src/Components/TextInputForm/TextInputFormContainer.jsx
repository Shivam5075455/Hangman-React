import { useState } from "react";
import TextInputForm from "./TextInputForm";

// container component for TextInputForm

function TextInputFormContainer({onSubmit}){

    const [value, setValue] = useState(''); // created variable using States in React
    const [inputType, setInputType] = useState('password');
    
    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted: ",value);
        onSubmit?.(value); // if onSubmit is defined, call it with value
    }

    function handleTextInputChange(event){
        console.log("text input changed");
        console.log(event.target.value);
        setValue(event.target.value) // whenever i type the value in the input field, it will update the value
        
    }

    return(
        // Calling the Presentation Layer
        <TextInputForm
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            value={value}
            inputType={inputType}
            setInputType={setInputType}
        />
    );
    
}

export default TextInputFormContainer;