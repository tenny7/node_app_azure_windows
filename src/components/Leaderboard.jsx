import React from 'react'
import trophy from './../troph.png'

function Leaderboard() {
    return (
        <div>
            
            <h4>Leaderboard</h4>
            <img src={trophy} alt="golden-trophy" className="image-size-edit"/>
            <table className="table-style">
                <tr>
                    <th>Pos</th>
                    <th>Manager</th>
                    <th>Pts</th>
                </tr>
                <tr>
                    <td style={{backgroundColor: '#0d598f'}}>1</td>
                    <td>Manager 1</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td style={{backgroundColor: '#0d598f'}}>2</td>
                    <td>Manager 2</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td style={{backgroundColor: '#e47d29'}}>3</td>
                    <td>Manager 3</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td>4</td>
                    <td>Manager 4</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td>5</td>
                    <td>Manager 5</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td>6</td>
                    <td>Manager 6</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td>7</td>
                    <td>Manager 7</td>
                    <td>10</td> 
                </tr>
                <tr>
                    <td>8</td>
                    <td>Manager 8</td>
                    <td>10</td> 
                </tr>
                
            </table>
        </div>
    )
}

export default Leaderboard
