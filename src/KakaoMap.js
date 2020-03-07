import React, { Component } from 'react';

class KakaoMap extends Component {
	state = {
		map: null
	}
	componentDidMount() {
		const { 
			props = {
				lat: 33.450701, 
				lng: 126.570667, 
				level: 3, 
				markers: [],
				map: null
			} 
		} = this.props
		const el = this.div
		const options = {	
			center: new window.kakao.maps.LatLng(props.lat , props.lng),	
			level: props.level
		}
		this.setState({
			map: new window.kakao.maps.Map(el, options)
		})

		props.markers
			.map(([lat, lng]) => new window.kakao.maps.LatLng(lat, lng))
			.map(pos => new window.kakao.maps.Marker({ position: pos }))
			.forEach(marker => marker.setMap(this.state.map))
	}

	componentDidUpdate(prevProps, prevState) {
		this.state.map.setCenter(new window.kakao.maps.LatLng(this.props.lat, this.props.lng))
		this.props.markers
			.map(([lat, lng]) => new window.kakao.maps.LatLng(lat, lng))
			.map(pos => new window.kakao.maps.Marker({ position: pos }))
			.forEach(marker => marker.setMap(this.state.map))
	}

	render() {
		const {width = "100%", height = "400px"} = this.props
		const map_style = {
			width: width,
			height: height
		}
		return (
			<div ref={ (ref) => this.div = ref }
				style = { map_style }>
			</div>
		);
	}
}

export default KakaoMap;