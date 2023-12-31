import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import {Typewriter} from "react-simple-typewriter"
import {useState} from "react"
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Terima Kasih 2023 dan Segala Kenangannya"])

  const particleInitialization = async(engine) => {
    await loadFireworksPreset(engine)
  }

  function timeleft(){
    const newYearDate = new Date("Januari 1, 2024 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }


  return (
    <>
    <Particles
    init={particleInitialization} options={{ preset: "fireworks" }}
    />
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
    <span className="text-white text-4xl font-bold z-50">
      <Typewriter words={newYearMessage} loop ={false} cursorStyle={"_"} cursor typeSpeed={10}  deleteSpeed={0.1}/>
    </span>
    <div className="z-50 text-white font-bold text-2xl">
    <Countdown date={Date.now() + timeleft()} onComplete={() => setNewYearMessage([ "Welcome 2024! Hope This Year becomes the Best Year", ])}/>
    </div>
    </div>
    </>
   

    
  );
}

export default App;
