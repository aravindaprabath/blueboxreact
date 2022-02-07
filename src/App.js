import './styles/_App.scss';
import Accordion from "./components/Accordion/Accordion";
import Button from "./components/buttons/Button";
import Card from "./components/Card/Card";
import CardGrid from "./components/CardGrid/CardGrid";

function App() {
  return (
    <div className="App">
        <CardGrid/>
        <Button/>
      <Accordion/>
    </div>
  );
}

export default App;
