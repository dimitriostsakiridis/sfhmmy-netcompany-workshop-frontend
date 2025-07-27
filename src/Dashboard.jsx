import MatchTable from "./MatchTable";
import MatchForm from "./MatchForm";
import './Dashboard.css'
import { useState,useEffect } from "react";

export default function Dashboard(){
  const [matches, setMatches] = useState([]);
  const apiUrl = "http://localhost:8081/api"

  const fetchMatches = () => {
        fetch(`${apiUrl}/matches`)
            .then(res => res.json())
            .then(data => setMatches(data))
            .catch(err => console.error('Fetch error:', err));
    };

    useEffect(() => {
        fetchMatches();
    }, []);

  
    return (
        <>
          <MatchForm className="matchform" onMatchSubmitted={fetchMatches} apiUrl={apiUrl} />
          <div className="searchbox">
            <h3>Enter anything to search:</h3>
            <form>
              <input type="text" id="search" placeholder="Search..."/>
            </form>
          </div>
         <MatchTable matches={matches}/>
        </>
    );
}