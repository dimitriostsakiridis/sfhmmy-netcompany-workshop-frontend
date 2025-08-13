import { useState } from 'react';
import './MatchForm.css';
import  { submitMatch } from '../services/matchService'

export default function MatchForm({onMatchSubmitted}) {
    const [teamHomeName, setTeamHomeName] = useState("");
    const [teamHomeGoals, setTeamHomeGoals] = useState(0);
    const [teamAwayName, setTeamAwayName] = useState("");
    const [teamAwayGoals, setTeamAwayGoals] = useState(0);

    const API_URL = "http://localhost:8081/api";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const match = {
            teamHomeName,
            teamHomeGoals,
            teamAwayName,
            teamAwayGoals
        };

        if(teamHomeName=="" || teamAwayName==""){
            console.log("Team Name Fields cannot be empty.");
            return;
        }

        try {
          const data = await submitMatch(match).then(() => {
                onMatchSubmitted();
                setTeamHomeName("");
                setTeamAwayName("");
                setTeamHomeGoals(0);
                setTeamAwayGoals(0);
                });
        } catch (err) {
          console.error("Fetch error:", err);
        }
        
    };

    return (
        <div className="form-container">
            <form className='matchForm' onSubmit={handleSubmit}>
                <div className="formtitle">
                 <span id='title'>Create</span>
                </div>
                <div>
                    <label>Home:</label><br />
                    <input type="text" value={teamHomeName} onChange={(e) => setTeamHomeName(e.target.value)} />
                </div>
                <div>
                    <label>Away:</label><br />
                    <input type="text" value={teamAwayName} onChange={(e) => setTeamAwayName(e.target.value)} />
                </div>
                <span>
                    <label>Score:</label><br />
                    <input type="number" value={teamHomeGoals} onChange={(e) => setTeamHomeGoals(e.target.value)} className='scoreIn' />
                    <strong>-</strong>
                    <input type="number" value={teamAwayGoals} onChange={(e) => setTeamAwayGoals(e.target.value)} className='scoreIn' />
                </span>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
