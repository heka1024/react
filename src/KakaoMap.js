import React, { Component } from 'react';

class KakaoMap extends Component {
    componentDidMount() {
			const { lat = 33.450701, lng = 126.570667, level = 3, markers = [] } = this.props, el = this.div
			const options = {	center: new window.kakao.maps.LatLng(lat, lng),	level: level }
			console.log(markers)
			
			const kakao_map = new window.kakao.maps.Map(el, options)
			
			markers
				.map(([lat, lng]) => new window.kakao.maps.LatLng(lat, lng))
				.map(pos => new window.kakao.maps.Marker({ position: pos }))
				.forEach(marker => marker.setMap(kakao_map))
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