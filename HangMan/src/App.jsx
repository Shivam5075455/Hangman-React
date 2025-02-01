// import Button from "./Components/Button/Button";

// import TextInput from "./Components/TextInput/TextInput";
// import TextInputForm from "./Components/TextInputForm/TextInputForm";
import TextInputFormContainer from "./Components/TextInputForm/TextInputFormContainer";


function App(){
  return(
    <div>
      <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
      {/* <TextInputForm onSubmit={(value) => console.log("value coming from hidden form is: ",value)}/> */}
      <TextInputFormContainer onSubmit={(value) => console.log("value coming from hidden form is: ",value)}/>

     </div>
  );
}

export default App;