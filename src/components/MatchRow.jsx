import { useState } from "react";

export default function MatchRow({match}){
    const [matchId,setmatchId] = useState(`${match.id}`);
    
    return (
        <tr>
            <td style={{width:"60px"}}>
                {matchId}
            </td>
            <td>
                <strong>{match.teamHomeName}</strong> 
                <br /> vs <br />
                <strong>{match.teamAwayName}</strong>
             </td>
            <td>
                <strong>{match.teamHomeGoals}-{match.teamAwayGoals}</strong>
            </td>
            <td>
                {match.date}
            </td>
        </tr>
    );
}