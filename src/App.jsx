import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"


function App() {

  return (
    <div className="bg-[var(--color-background)]">
      <div className="w-[1320px] mx-auto pt-[2%]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
