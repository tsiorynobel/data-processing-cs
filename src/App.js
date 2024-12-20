import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TradeList from './components/modules/TradeList';



const App = () => {

  return (
    <div className="App">
      <Header />
      <TradeList />
      <Footer />
    </div>
  );
}

export default App;
