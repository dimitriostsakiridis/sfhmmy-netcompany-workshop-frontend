import { useEffect, useState } from 'react';
import './MatchTable.css'
import MatchRow from './MatchRow';

export default function MatchTable({ matches }){
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Match</th>
                        <th>Score</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((m, idx) => (
                        <MatchRow key={idx} match={m} />
                    ))}
                </tbody>
            </table>
        </>
    );
}