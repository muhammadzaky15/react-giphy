import logo from './logo.svg';
import './App.css';
import SearchBar from './component/SearchBar';
import GifList from './component/GifList';

function App() {
  return (
   <div className='px-20'>
    <SearchBar/>
    <GifList/>
   </div>
  );
}

export default App;
