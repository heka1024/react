import React, { Component } from 'react'
import { CardDeck, Col } from 'react-bootstrap'
import { observer, inject } from 'mobx-react'
import RestaurantCard from '../RestaurantCard'
import './RestaurantView.scss'

@inject(root => ({
  RestaurantStore: root.RestaurantStore
}))

@observer
class RestaurantView extends Component {  
	render() {
    const { RestaurantStore } = this.props

		return(
			<CardDeck tyle={{display: 'flex', flexDirection: 'row'}}>
				{ 
          RestaurantStore.array.map((res, idx) => (
              <Col md={4} key={idx}>
              <RestaurantCard 
                id={res.id}
                restaurant={res} 
              />
              </Col>
					  )
          )
        }
			</CardDeck>
		)
	}
}

export default RestaurantView