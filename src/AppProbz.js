import React, {useEffect, useState} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import html2canvas from 'html2canvas'
import './App.css'

const App = () => {
  const [data, setData] = useState([])
  const [timeframe, setTimeframe] = useState('daily')

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  const filterDataByTimeframe = timeframe => {
    if (timeframe === 'daily') {
      return data
    } else if (timeframe === 'weekly') {
      return data.filter((_, index) => index % 7 === 0)
    } else if (timeframe === 'monthly') {
      return data.filter((_, index) => index % 30 === 0)
    } else {
      return data
    }
  }

  const handleTimeframeChange = event => {
    setTimeframe(event.target.value)
  }

  const handleClick = data => {
    alert(`Clicked on point with value: ${data.activePayload[0].payload.value}`)
  }

  const exportChart = () => {
    const chart = document.querySelector('.recharts-wrapper')
    html2canvas(chart).then(canvas => {
      const link = document.createElement('a')
      link.download = 'chart.png'
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  const filteredData = filterDataByTimeframe(timeframe)

  return (
    <div className="App">
      <h1>Chart Assignment </h1>
      <div>
        <label htmlFor="timeframe">Timeframe: </label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={handleTimeframeChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <button onClick={exportChart}>Export Chart</button>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={filteredData} onClick={handleClick}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{r: 8}}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default App
