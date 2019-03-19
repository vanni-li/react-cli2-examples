import React from "react";
import { Link } from 'react-router-dom'
import './index.css';

export default (props) => (
	<div className="header">
		<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			<li><Link to="/users">Users</Link></li>
		</ul>
	</div>
)