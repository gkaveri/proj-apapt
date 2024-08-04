import Graph from '../Graph'
import SidePanel from '../SidePanel'
import PieChart1 from '../PieChart1'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="side-panel-container">
      <SidePanel />
    </div>
    <div className="main-content-container">
      <Graph />
      <PieChart1 />
    </div>
  </div>
)

export default Home
