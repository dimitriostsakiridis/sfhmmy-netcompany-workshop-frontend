import { useState } from "react";

export default function SearchForm({onSearchSubmitted}){
    const [searchval,setSearchVal] = useState("");
    
    const handleSearch = (e) => {
        e.preventDefault();
        onSearchSubmitted(searchval);
    }

    return(
        <>
            <h3>Press Enter to search:</h3>
            <form onSubmit={handleSearch}>
                <input type="text" id="search" placeholder="Search..." onChange={(e) => setSearchVal(e.target.value)}/>
            </form>
        </>
    );
}