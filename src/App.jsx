import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Footer from "./components/footer/Footer";
import Skill from "./components/skill/Skill";
// import Navbar from "./components/navbar/Navbar";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <Skill />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
