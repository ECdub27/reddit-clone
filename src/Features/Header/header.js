import react, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () =>{
const [searchTermLocal, setSearchTermLocal] = useState('');
const dispatch =  useDispatch();
const selectSearchTerm =  useSelector((state) => state.reddit.setSearchTerm);


const handleSearch = e =>{
    setSearchTermLocal(e.target.value);
}

useEffect(() =>{
    setSearchTerm(selectSearchTerm);

}, [selectSearchTerm])


const handleSearchSubmit = (e) =>{
    e.preventDefault();
    dispatch(() => setSearchTermLocal(searchTermLocal))
}
return (
   <header>
    <div>
        {/* icon here */}
        <p>Reddit Clone &#128588;&#127998; </p>
        </div>
        <form className='form' onSearch={handleSearchSubmit}>
            <input
            type='text'
            aria-label='search term'
            placeholder='Find fave subreddit'
            value={searchTermLocal}
            onChange={handleSearch}/>
        </form>
        <button type='submit' onClick={handleSearchSubmit}>Search</button>
   
   </header>
);
};




export default Header;