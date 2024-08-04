import './index.css'

const SidePanel = () => (
  <div className="side-container">
    <div className="panel">
      <h1 className="heading1">Dashboard</h1>
      <ul className="items">
        <li className="list-item">
          <h1 className="h2">Inventory</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Order</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Returns</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Customers</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Shipping</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Channel</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Integrations</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Calculators</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Reports</h1>
        </li>
        <li className="list-item">
          <h1 className="h1">Account</h1>
        </li>
      </ul>
    </div>
  </div>
)

export default SidePanel
