
import { useState } from 'react';
import NavBar from './../NavBar';
import Filter from './../filter';
import House_list from './../house_list';

const MainPage = () => {
    let [filter_data,set_filter_data] = useState({});
    return ( <>
     <NavBar/>
     <Filter set_filter_data={set_filter_data}/>
    <House_list filter_data={filter_data}/>
    </> );
}
 
export default MainPage;