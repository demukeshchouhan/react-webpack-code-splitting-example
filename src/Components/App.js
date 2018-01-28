import React, { Component } from 'react'
import big from "../../assets/1200.jpeg"
import small from "../../assets/200.jpeg"

export default class App extends Component {
  render() {
		return (
			<div>
				<h2>Webpack Core with React !</h2>
				<img src={small} />
			</div>
		)
  }
}
