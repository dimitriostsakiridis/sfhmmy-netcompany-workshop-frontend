import { useState } from 'react';
import './MatchForm.css';

export default function MatchForm({ onMatchSubmitted, apiUrl }) {
    const [teamHomeName, setTeamHomeName] = useState("");
    const [teamHomeGoals, setTeamHomeGoals] = useState(0);
    const [teamAwayName, setTeamAwayName] = useState("");
    const [teamAwayGoals, setTeamAwayGoals] = useState(0);

    const handleSubmit = (e) => {
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

        fetch(`${apiUrl}/matches`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(match)
        })
        .then(res => {
            if (!res.ok) throw new Error("Failed to submit match:");
            return res.json();
        })
        .then(() => {
            onMatchSubmitted();
            setTeamHomeName("");
            setTeamAwayName("");
            setTeamHomeGoals(0);
            setTeamAwayGoals(0);
        })
        .catch(err => console.error('Submit error:', err));
    };

    return (
        <div className="form-container">
            <form className='matchForm' onSubmit={handleSubmit}>
                <h3>Register a match:</h3>
                <div>
                    <label>Home:</label><br />
                    <input type="text" value={teamHomeName} onChange={(e) => setTeamHomeName(e.target.value)} />
                </div>
                <div>
                    <label>Away:</label><br />
                    <input type="text" value={teamAwayName} onChange={(e) => setTeamAwayName(e.target.value)} />
                </div>
                <div>
                    <label>Score:</label><br />
                    <input type="number" value={teamHomeGoals} onChange={(e) => setTeamHomeGoals(e.target.value)} className='scoreIn' />
                    <strong>-</strong>
                    <input type="number" value={teamAwayGoals} onChange={(e) => setTeamAwayGoals(e.target.value)} className='scoreIn' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
