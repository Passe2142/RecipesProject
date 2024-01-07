import '../Style/style.css';
import SearchInput from './SearchInput';
import { useForm } from 'react-hook-form';

function SearchBar () {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return(
            <form onSubmit={handleSubmit(onSubmit)}className='search-form'>
            <SearchInput className='search-bar' type="text" placeholder="Healthy greens for happy plates..." control={control}></SearchInput>
            <button className='search-button'>Search!</button>
            <button className=''>Filter!</button>

            </form>
    )

}


export default SearchBar;