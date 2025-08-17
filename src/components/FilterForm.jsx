/*Todo: filtering funcction
    -Implement Client Side filtering due to small dataset
*/
import { useState } from 'react';
import './MatchForm.css'
import './FilterForm.css'

export default function FilterForm({matches, onFilterSubmitted}){   
    const [teamHomeFilter,setTeamHomeFilter] = useState("--");
    const [teamAwayFilter,setTeamAwayFilter] = useState("--");

    const handleSubmit = (e) => {
        e.preventDefault();
        const filterval = {
            "teamHomeFilter":teamHomeFilter,
            "teamAwayFilter":teamAwayFilter,
        };
        onFilterSubmitted(filterval);
    }
    
    return (
        <div className="form-container" style={{width:"70%"}}>
            <form className="filterForm" style={{width:"100%"}} onSubmit={handleSubmit}>
                <div className="formtitle">
                    <span id="title">
                        Filter
                    </span>
                </div>
                <div>
                    <label>Home  </label>
                    <select id="teamHome" onChange={(e) => {setTeamHomeFilter(e.target.value)}}>
                        <option>--</option>
                        {matches.map((m, idx) => (
                            <option key={idx} value={m.teamHomeName}>{m.teamHomeName}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Away  </label>
                    <select id="teamAway" onChange={(e) => {setTeamAwayFilter(e.target.value)}}>
                        <option>--</option>
                        {matches.map((m, idx) => (
                            <option key={idx} value={m.teamAwayName}>{m.teamAwayName}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}