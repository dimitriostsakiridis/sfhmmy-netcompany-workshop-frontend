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
    setFilteredMatches(matches);
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

  return (
    <>
      <div className="formscontainer">
        <MatchForm 
          className="matchform" 
          onMatchSubmitted={() => dispatch(fetchMatchesRequest())} 
        />
        <FilterForm className="filterform"/>
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
