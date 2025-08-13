import MatchTable from "./MatchTable";
import MatchForm from "./MatchForm";
import './Dashboard.css';
import { useState, useEffect } from "react";
import { getMatches } from '../services/matchService';
import FilterForm from "./FilterForm";

export default function Dashboard() {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const data = await getMatches();
      setMatches(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return (
    <>
      <div className="formscontainer">
        <MatchForm 
          className="matchform" 
          onMatchSubmitted={fetchMatches} 
        />
        <FilterForm className="filterform"/>
      </div>
      <div className="searchbox">
        <h3>Enter anything to search:</h3>
        <form>
          <input type="text" id="search" placeholder="Search..." />
        </form>
      </div>
      <MatchTable matches={matches} />
    </>
  );
}
