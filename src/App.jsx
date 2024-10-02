import AppBanner from "./components/AppBanner"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Service from "./components/Service"
import WhereToBuy from "./components/WhereToBuy"


function App() {
  

  return (
   <>
   <div className=" overflow-x-hidden">
    <Hero/>
    <Service/>
    <WhereToBuy/>
    <AppBanner/>
    <Footer/>
   </div>
   </>
  )
}

export default App
