```javascript
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartComponent = ({ data, labels }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'AI Assistant Performance',
            data: data,
            backgroundColor: 'rgba(0,123,255,0.5)',
            borderColor: 'rgba(0,123,255,1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

      return () => {
        newChartInstance.destroy();
      };
    }
  }, [chartContainer, data, labels]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default ChartComponent;
```