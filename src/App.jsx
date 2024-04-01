import "./App.css";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { Title } from "./components/Title";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Title />

        <Form />

        <Table />

        {/* <!-- toat time allocated --> */}
        <div className="alert alert-info">
          Total hrs per week allocated = <span id="totalHr">0</span>hr
        </div>
      </div>
    </div>
  );
}

export default App;
