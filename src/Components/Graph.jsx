import React from "react";
import "./graph.css";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";
defaults.plugins.title.font.size = 30;

function Graph() {
  const dataValues = [40, 50, 55, 85, 40]; // Your marks data
  const colors = dataValues.map((value) => {
    if (value > 80) {
      return "#2f9e44"; // Dark green for exemplary performance
    } else if (value > 50) {
      return "#51cf66"; // Light green for passing marks
    } else if (value == 50) {
      return "#69db7c"; // Light green for passing marks
    } else {
      return "#fa5252"; // Red for fail
    }
  });
  return (
    <div className="graph-page">
      <div className="graph-box">
        <Bar
          data={{
            labels: [
              "OOPS",
              "Cryptography",
              "Software Testing",
              "Graphics",
              "Maths",
            ],
            datasets: [
              {
                label: "attendance",
                data: dataValues,
                backgroundColor: colors,
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Your Attendence",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Graph;