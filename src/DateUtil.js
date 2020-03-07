function date2string(d) {
	let mon = String(d.getMonth() + 1), date = String(d.getDate())
	mon = mon.length >= 2 ? mon : '0' + mon
	date = date.length >= 2 ? date : '0' + date
	return `${mon}-${date}`
}

function date2query(d) {
	let year = d.getFullYear()
	let mon = String(d.getMonth() + 1)
	let date = String(d.getDate())
	mon = mon.length >= 2 ? mon : '0' + mon
	date = date.length >= 2 ? date : '0' + date
	return `${year}-${mon}-${date}`
}

export { date2query, date2string }
