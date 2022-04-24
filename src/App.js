import "./App.css";
import Clothes from "./components/Clothes/Clothes";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Clothes />
      </main>
    </>
  );
}

export default App;
