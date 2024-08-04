import {BrowserRouter as Router, Route} from 'react-router-dom'

import SidePanel from './AdaptComponent/SidePanel'

const App = () => (
  <Router>
    <Route exact path="/" element={<SidePanel />} />
  </Router>
)

export default App
