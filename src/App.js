import './App.css';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import Feed from './pages/Feed';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Feed/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
