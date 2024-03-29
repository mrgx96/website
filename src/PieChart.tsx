import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<"doughnut", number[], string> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current?.getContext('2d');
    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green'],
          datasets: [
            {
              data: [30, 45, 25, 10],
              backgroundColor: ['rgb(153, 69, 255)', 'rgb(20, 241, 149)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)'],
            },
          ],
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <canvas ref={chartRef} />
    </div>
  );
}

export default PieChart;
