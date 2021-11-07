import React from 'react'
import { Line } from "react-chartjs-2";

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "CSAT",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      },
      {
        label: "DSAT",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774"
      }
    ]
  };
function Dashboard() {
    return (
        <div>
            <div className="card-ui">
                {/* <p>CSAT and DSAT Metric</p> */}
                <Line style={{padding:'20px'}} data={data} /> 
            </div>
        </div>
    )
}

export default Dashboard
