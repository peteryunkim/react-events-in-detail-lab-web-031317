import React from 'react'

class DelayedButton extends React.Component {
	constructor(props){
		super(props);
		

	}

	handleClick(event){
		event.persist();
		setTimeout(this.props.onDelayedClick, this.props.delay, event)
	}

	render(){
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}/>
			</div>
		)
	}
	
}



export default DelayedButton