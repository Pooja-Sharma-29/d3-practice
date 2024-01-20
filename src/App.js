import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ScatterPlot from "./components/ScatterPlot";

function App() {
  return (
    <div className="App">
      <LineChart />
      <BarChart />
      <ScatterPlot />
      <PieChart />
    </div>
  );
}

export default App;
