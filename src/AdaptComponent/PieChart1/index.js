import Chart from 'react-apexcharts'

import './index.css'

function PieChart1() {
  return (
    <div className="vaccination-by-age-contaier">
      <div className="bottom-section1">
        <h1>Portion of Sales</h1>
        <Chart
          type="pie"
          width={440}
          height={250}
          series={[570, 330]}
          options={{
            labels: ['WooCommerceStore', 'Shopify store'],
          }}
        />
      </div>
    </div>
  )
}

export default PieChart1
