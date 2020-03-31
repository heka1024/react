import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import MenuListContainer from '../MenuListContainer'
import './Today.scss'
import { date2string, dateChange } from '../DateUtil'
import { observer, inject } from 'mobx-react'

const [ yesterday, today, tomorrow ] = [-1, 0, 1]
  .map(i => dateChange(new Date(), i))
  .map(date2string)

const laquo = '\u00ab', raquo = '\u00bb'

@inject(root => ({
  RestaurantStore: root.RestaurantStore,
  MenuStore: root.MenuStore
}))

@observer
class Today extends Component {
	handleTimeClick = () => {
    this.props.MenuStore.timeAdd()
	}
	
	handlePrev = () => {
    this.props.MenuStore.handleDate(-1)
	}
	
	handleNext = () => {
    this.props.MenuStore.handleDate(1)
	}
	
	render() {
		const time2string = ['아침', '점심', '저녁']
    const { RestaurantStore, MenuStore } = this.props
    const date = date2string(MenuStore.date)
    
    return (
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
						{ time2string[MenuStore.time] } 
					</Button>
					<span className="move" onClick={this.handleNext}>
						{ raquo }
					</span>
        </center>

        <hr/>

        {
          RestaurantStore.array.map(r => {
            const queried_menus = MenuStore.queriedMenus
              .filter(menu => menu.res_id == r.id)

            return( 
              queried_menus.length > 0 &&
              <MenuListContainer key={`${r.name}-${r.date}`}
                style={{textAlign: "left"}}
                restaurant={ r }
                menus={ queried_menus	}
              />
            )
          })
        }
      </div>
    )
	}
}

export default Today
