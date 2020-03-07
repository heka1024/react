import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MenuListContainer from '../MenuListContainer'
import axios from 'axios'
import './Today.scss'
import { date2query, date2string } from '../DateUtil'

const today = date2string(new Date())
const yesterday = (() => {
	let pnew = new Date()
	pnew.setDate(pnew.getDate() - 1)
	return date2string(pnew)
})()
const tomorrow = (() => {
	let pnew = new Date()
	pnew.setDate(pnew.getDate() + 1)
	return date2string(pnew)
})()
const laquo = '\u00ab', raquo = '\u00bb'

class Today extends Component {
	state = {
		time: 0,
		date: new Date(),
		restaurants: [],
		menus: []
	}

	_getRestaurant() {
		const url = 'http://rest-api.run.goorm.io/restaurants/'
		axios.get(url)
			.then(res => {
					const data = res.data.results
					console.log("res is ", data)
					this.setState({
						restaurants: data
					})
				}
			)
			.catch(e => console.log(e))
	}

	_getMenus() {
		const url = 'http://rest-api.run.goorm.io/menus/'
		axios.get(url)
			.then(res => {
					console.log(res)
					const menus = res.data.results
					console.log("menus is ", menus)
					this.setState({
						menus: menus
					})
				}
			)
			.catch(e => console.log(e))
	}

	componentDidMount() {
		this._getRestaurant()
		this._getMenus()
	}

	
	handleTimeClick = () => {
		const idx = (this.state.time + 1) % 3
		this.setState({time: idx})
	}
	
	handlePrev = () => {
		let pnew = this.state.date
		pnew.setDate(this.state.date.getDate() - 1)
		this.setState({
			date: pnew
		})
	}
	
	handleNext = () => {
		let pnew = this.state.date
		pnew.setDate(this.state.date.getDate() + 1)
		this.setState({
			date: pnew
		})
	}
	
	render() {
		const time2string = ['아침', '점심', '저녁']
		const time_query = ['b', 'l', 'd']
		
		const date = date2string(this.state.date)
		return(
			<div>
				<center >
					<span className="move" onClick={this.handlePrev}>
						{ laquo } 
					</span>
					<span className="date" style={{verticalAlign: "middle"}}> 
						{ 
							date === today ? `오늘 (${date})` : 
								date === yesterday ? `어제 (${date})` :
									date === tomorrow ? `내일 (${date})` : date
						} 
					</span>
					<Button onClick={this.handleTimeClick} variant="outline-success"> 
						{ time2string[this.state.time] } 
					</Button>
					<span className="move" onClick={this.handleNext}>
						{ raquo }
					</span>
				</center>
				
				<hr/>
				{ 
					this.state.restaurants.map(r => {
						const queried = this.state.menus.filter(menu =>
							menu.rname === r.name &&
							menu.time === time_query[this.state.time] &&
							menu.date === date2query(this.state.date)
						)
						return (queried.length > 0 &&
							<MenuListContainer key={`${r.name}-${r.date}`}
								style={{textAlign: "left"}}
								restaurant={ r }
								menus={ queried	}
							/>
						)
					})
				}
			</div>
		)
	}
}

export default Today
