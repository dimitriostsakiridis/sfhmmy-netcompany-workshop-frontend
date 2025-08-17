import MatchTable from "./MatchTable";
import MatchForm from "./MatchForm";
import SearchForm from "./SearchForm"
import './Dashboard.css';
import { useState, useEffect } from "react";
import FilterForm from "./FilterForm";
import { useDispatch, useSelector} from "react-redux";
import { fetchMatchesRequest } from "../store/matchActions";

export default function Dashboard() {
  const [filteredMatches, setFilteredMatches] = useState([]);
  const dispatch = useDispatch();
  const { matches, loading, error } = useSelector((state) => state.matchState);

    useEffect(() => {
    dispatch(fetchMatchesRequest());
  }, [dispatch]);

  useEffect(() => {
    setFilteredMatches(matches);
  }, [matches]);

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

  //Client Side Filtering
  const handleFilter = (filterval) => {
    console.log(filterval);
    if(filterval.teamAwayFilter == "--" && filterval.teamHomeFilter == "--"){
      setFilteredMatches(matches);
      return;
    }
    let results;

    if(filterval.teamAwayFilter == "--"){
      results = matches.filter(m=>(m.teamHomeName===filterval.teamHomeFilter));
    }else if(filterval.teamHomeFilter  == "--"){
      results = matches.filter(m=>(m.teamAwayName===filterval.teamAwayFilter));
    }else{
      results = matches.filter(
        m =>
          (m.teamHomeName == filterval.teamHomeFilter) &&
          (m.teamAwayName == filterval.teamAwayFilter)
      );
    }
    setFilteredMatches(results);
  }

  return (
    <>
      <div className="formscontainer">
        <MatchForm 
          className="matchform" 
          onMatchSubmitted={() => dispatch(fetchMatchesRequest())} 
        />
        <FilterForm className="filterform" matches={matches} onFilterSubmitted={handleFilter}/>
      </div>
      <div className="searchbox">
        <SearchForm onSearchSubmitted={handleSearch}/>
      </div>
      {loading && <p>Loading</p>}
      {error && <p style={{color:"red"}}>{error}</p>}
      <MatchTable matches={filteredMatches} />
    </>
  );
}
