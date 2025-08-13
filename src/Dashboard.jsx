import MatchTable from "./MatchTable";
import MatchForm from "./MatchForm";
import './Dashboard.css'
import { useState,useEffect } from "react";
import FilterForm from "./FilterForm";
import SearchForm from "./SearchForm";

export default function Dashboard(){
  const [matches, setMatches] = useState([]);
  const [filteredMatches, setFilteredMatches] = useState([]);
  const apiUrl = "http://localhost:8081/api"

  //Client Side Searching
  const handleSearch = (searchval) => {
    if (searchval.trim() === "") {
      setFilteredMatches(matches);
      return;
    }
    
    const results = matches.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchval.toLowerCase())
      )
    );
    setFilteredMatches(results);
  };

  //Client side filtering
  const handleFilter = (e) => {
    return;
  }

  const fetchMatches = () => {
        fetch(`${apiUrl}/matches`)
            .then(res => res.json())
            .then(data => {setMatches(data);setFilteredMatches(data);})
            .catch(err => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchMatches();
    }, []);

  
    return (
        <>
          <div className="formscontainer">
            <MatchForm className="matchform" onMatchSubmitted={fetchMatches} apiUrl={apiUrl} />
            <FilterForm className="filterform"/>
          </div>
          <div className="searchbox">
            <SearchForm onSearchSubmitted={handleSearch}/>  
          </div>
         <MatchTable matches={filteredMatches}/>
        </>
    );
}