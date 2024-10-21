import React, { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrency from "./hooks/useCurrency";

const App = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  
  const [fromvalue, setFromvalue] = useState("usd");
  const [tovalue, setTovalue] = useState("inr");
  

  const currency = useCurrency(fromvalue)
  const name = Object.keys(currency)

  const changeValue = () =>{
    setTo(from * currency[tovalue])
  }


  return (
    <>
      <div className="w-full h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        
        <form 
        onSubmit={(e)=>{
          e.preventDefault()
        }}
        className="bg-zinc-900 p-7 rounded-lg w-[400px] flex flex-col items-center justify-center gap-3">

        <h1
        className="text-3xl uppercase font-bold mb-5"
        >Currency Converter</h1>
          <InputBox title="From" amount={from} setAmount={setFrom} options={name} value={fromvalue} setValue={setFromvalue}/>

          <button 
          onClick={()=>{
            setFrom(to)
            setTo(from)
            setTovalue(fromvalue)
            setFromvalue(tovalue)
          }}
          className="bg-blue-700 px-2 py-1 rounded-md">Swap</button>

          <InputBox title="To" amount={to} setAmount={setTo} options={name} value={tovalue} setValue={setTovalue}/>

          <button 
          onClick={changeValue}
          className="w-full bg-blue-700 p-4 rounded-lg">
            Convert {fromvalue.toUpperCase()} to {tovalue.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
