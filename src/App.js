import * as Components from "./Components/";
import { accordion_config } from "./Helpers/accordion_details";
function App() {
  const { Accordion } = Components;
  return (
    <div className="App">
      <Accordion config={accordion_config} />
    </div>
  );
}

export default App;
