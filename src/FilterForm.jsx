/*Todo: filtering funcction
    -Implement Client Side filtering due to small dataset
*/

import './MatchForm.css'
import './FilterForm.css'

export default function FilterForm(){   
    return (
        <div className="form-container" style={{width:"70%"}}>
            <form className="filterForm" style={{width:"100%"}}>
                <div className="formtitle">
                    <span id="title">
                        Filter
                    </span>
                </div>
                <div>
                    <label>Home  </label>
                    <select id="teamHome">
                        <option value="">Sample A</option>
                        <option value="">Sample B</option>
                    </select>
                </div>
                <div>
                    <label>Away  </label>
                    <select id="teamAway">
                        <option value="">Sample A</option>
                        <option value="">Sample B</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}