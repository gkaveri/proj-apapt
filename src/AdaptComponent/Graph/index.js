import Chart from 'react-apexcharts'
import './index.css'

function LineChart() {
  return (
    <div className="container">
      <h2 className="heading1">Dashboard</h2>
      <Chart
        type="line"
        width={500}
        height={300}
        series={[
          {
            name: 'Orders',
            data: [
              1600,
              1400,
              1200,
              1000,
              800,
              600,
              600,
              600,
              600,
              600,
              600,
              600,
              600,
            ],
          },
          {
            name: 'Sales',
            data: [
              1500,
              1300,
              1200,
              1100,
              900,
              700,
              600,
              500,
              400,
              400,
              400,
              400,
              400,
            ],
          },
        ]}
        options={{
          xaxis: {
            categories: [
              '02/06/2024-07/06/2024',
              '09/06/2024-15/06/2024',
              '16/06/2024-21/06/2024',
            ],
          },
          yaxis: {
            categories: ['0', '0.4k', '0.8k', '1.2k', '1.6k'],
          },
        }}
      />
    </div>
  )
}

export default LineChart
