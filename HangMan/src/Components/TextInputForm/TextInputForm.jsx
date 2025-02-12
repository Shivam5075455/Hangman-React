import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

// Presentation Layer(UI File)

function TextInputForm({handleFormSubmit, handleTextInputChange, value, inputType='text', setInputType})
{    

    return (

        <form className="flex" onSubmit={handleFormSubmit}>

        <div className="mr-2 flex-1">
            <TextInput 
                label="Enter a word of phrase" 
                type={inputType} 
                onChange={handleTextInputChange}
                value={value}
            />
        </div>

        <div className="flex">
            <Button 
            styleType="warning"
                text={inputType=='password' ? 'Show' : 'Hide'}
                onClickHandler={()=> setInputType(inputType == 'password' ? 'text' : 'password')}
            />
        </div>

        <div className="flex">
            <Button 
            text="OK" 
            buttonTtype="Submit" 
            styleType="primary"/>
        </div>
        </form>

    );
}

export default TextInputForm;