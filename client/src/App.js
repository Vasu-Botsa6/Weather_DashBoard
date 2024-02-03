import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import WeatherCard from './Components/WeatherCard';
import WeatherList from './Components/WeatherList';
import SearchBar from './Components/SearchBar';
import WeatherDashboard from './Components/WeatherDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      {/* <Header  /> */}
      {/* <WeatherCard /> */}
      {/* <WeatherList /> */}
      {/* <SearchBar /> */}
      <WeatherDashboard />
    </div>
  );
}

export default App;
