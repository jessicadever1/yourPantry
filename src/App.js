import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApplicationView from './components/ApplicationView';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';

function App() {

  return (
    <div className="App">
      <Header />
      <ApplicationView />
      <div className='mobileFooterMenu'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
