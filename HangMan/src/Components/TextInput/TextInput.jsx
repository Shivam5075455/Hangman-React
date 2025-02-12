function TextInput({label, type="text", value, onChange}){
    return (
        <label className="block">
            {label && <span className="text-gray-700">{label}</span>} {/* If lable is true then the span tag will be shown if false, it will not shown. This concept is called short-circuiting*/}
            <input 
            className="px-4 py-2 border border-grey-500 rounded-md w-full"
            onChange = {onChange}
            placeholder={label}
            type={type}
            value={value}                    
            />

        </label>
    );
}

export default TextInput;