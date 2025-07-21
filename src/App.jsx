import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"


function App() {

  return (
    <div className="bg-[var(--color-background)] overflow-x-hidden sm:overflow-x-auto">
      <div className="max-w-[1320px] w-full px-4 mx-auto pt-[2%]">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
