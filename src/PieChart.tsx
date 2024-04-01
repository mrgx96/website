import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function PieChart() {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart<'doughnut', number[], string> | null>(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current?.getContext('2d');
    if (myChartRef) {
      chartInstance.current = new Chart(myChartRef, {
        type: 'doughnut',
        data: {
          labels: ['Presale & Liquidity', 'Development', 'Marketing', 'Community'],
          datasets: [
            {
              data: [70, 10, 10, 10],
              backgroundColor: ['rgb(153, 69, 255)', '#14F195', 'rgb(255, 205, 86)', '#4c366c'],
            },
          ],
        },

        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#35e0ff',

                font: {
                  size:12
              },
                padding: 60,
              },
            },
          },
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
    <div style={{ width: '100%', height: '580px'}}>
      <canvas ref={chartRef} />
    </div>
  );
}

export default PieChart;
