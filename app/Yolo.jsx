import React from 'react'
import { Link } from 'react-router'

const Yolo = () =>
  <div>
    <h1>Yolo 世界</h1>
    <ul>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/e">Employment</Link></li>
    </ul>
  </div>

export default Yolo
