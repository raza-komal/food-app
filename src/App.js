import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar dark color="secondary">
        <div className="container">
          <NavbarBrand href="/"> Komal's Cafe</NavbarBrand>

          <Menu />
        </div>
      </Navbar>
    </div>
  );
}

export default App;
