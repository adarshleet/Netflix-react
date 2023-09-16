import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import { trending, originals, action, comedy, horror, romance, documenteries } from './urls';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <RowPost title={'Trending'} url={trending}/>
            <RowPost title={'Netflix Originals'} url={originals}/>
            <RowPost title={'Action'} url={action}/>
            <RowPost title={'Comedy'} url={comedy}/>
            <RowPost title={'Horror'} url={horror}/>
            <RowPost title={'Romance'} url={romance}/>
            <RowPost title={'Documentery'} url={documenteries}/>
        </div>
    );
}

export default App;
