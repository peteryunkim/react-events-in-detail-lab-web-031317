import React from 'react'

function CoordinatesButton(props){

	function mouseCoordinates(e){
		var x = e.clientX
		var y = e.clientY
		props.onReceiveCoordinates([x,y])
	}


	return (
		<div>
			<button onClick={mouseCoordinates}/>
		</div>
	)
}


// class CoordinatesButton extends React.Component{

// 	mouseCoordinates(event){
// 		var x = event.clientX
// 		var y = event.clientY
// 		this.props.onReceiveCoordinates([x,y])
// 	}

// 	render(){
// 		return (
// 			<div>
// 				<button onClick={this.mouseCoordinates.bind(this)}/>
// 			</div>
// 		)
// 	}
// }


export default CoordinatesButton


