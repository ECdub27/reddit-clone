import react, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setSearchTerm } from '../../store/redditSlice';

const Header = () =>{
const [searchTermLocal, setSearchTermLocal] = useState('');
const dispatch =  useDispatch();
const searchTerm =  useSelector((state) => state.reddit.searchTerm);


const onSearchTermChange = (e) =>{
    setSearchTermLocal(e.target.value);
}

useEffect(() =>{
   setSearchTerm(searchTerm);

}, [searchTerm])


const onHandleSearchSubmit = (e) =>{
    e.preventDefault();
    dispatch( setSearchTermLocal(searchTermLocal))
}
return (
   <header>
    <div>
        {/* icon here */}
        <p>Reddit Clone &#128588;&#127998; </p>
        </div>
        <form className='search' onSubmit={onHandleSearchSubmit}>
            <input
            type='text'
            aria-label='search term'
            placeholder='Find fave subreddit'
            value={searchTermLocal}
            onChange={onHandleSearchSubmit}/>
        </form>
        <button type='submit' onClick={onHandleSearchSubmit}>Search</button>
   
   </header>
);
};




export default Header;