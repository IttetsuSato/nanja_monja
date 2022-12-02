import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <p>他の人より早く出てきたカードの名前を呼ぼう！</p>
        <p>初めてみるカードには名前をつけよう！</p>
      </div>
    </ChakraProvider>
  );
}

export default App;
