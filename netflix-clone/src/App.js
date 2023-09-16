import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { trending } from './urls';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <RowPost title={'Trending'} url={trending}/>
        </div>
    );
}

export default App;
