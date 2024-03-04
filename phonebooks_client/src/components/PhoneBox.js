import SearchBar from "./SearchBar";
import Phonelist from "./PhoneList";
import { useState } from "react";



export default function PhoneBox() {

    const [keyword, setKeyword] = useState('');
    const [sort, setSort] = useState('asc');


    return (
        <div className="container">
            <div className="header">
                <SearchBar keyword={keyword} setKeyword={setKeyword} sort={sort} setSort={setSort}/>
            </div>
            <div className="body">
                <Phonelist keyword={keyword} sort={sort}/>
            </div>

        </div>
    )
}
