import React from 'react'

export default function PrizeTable() {
  const prizes = {
    "10/10": 2000,
    "9/10": 2000,
    "8/10": 2000,
    "7/10": 2000,
    "6/10": 2000
  }
  return (

    <div className="container col-md-12 text-center" style={{ width: "100%" }}>
      
      <div className="p-2 ">
        < h3 > Coin Distribution by Rank</h3 >
        
      </div >
      <div className="p-2 text-center mb-3 ">
        <table style={{ padding: "0px 90px" }} width="100%">
          <thead>
            <tr>
              <th>Score</th>
              <th>Coins</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(prizes).map((key, ind) => (
              <tr key={ind}>
                <td>{key}</td>
                <td>{prizes[key]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-danger text-xl fw-bold  ">
        <p>Prize coins will be split between the number of winners of perticular
        rank.</p>
      </div>
    </div>


  )
}
