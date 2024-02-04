import './App.css';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 10,
  });

  const validData = userInput.duration >= 1;

  const handleInput = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return { ...prevUserInput, [inputIdentifier]: +newValue };
      //+ transform string to number
    });
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleInput} />
      {!validData && <p className='center'>Please enter the duration greater than 0.</p>}
      {validData &&<Results input={userInput} />}
    </>
  );
}

export default App;
