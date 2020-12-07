import './App.css';
import Header from './components/header';
import Footer from './components/footer';

import Feed from './pages/feed';
import Direct from './pages/direct';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Direct/> */}
        <Feed />
      </main>
      <Footer />
    </div>
  );
}

export default App;
