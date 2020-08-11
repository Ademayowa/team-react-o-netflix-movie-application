import React from 'react';

const CardItem = ({title, cost, streamType, streamIn, watcOn, devices,backgroundColor}) => (
	<div className="plan-card-item">
		<div className="plan-card-main">
			<h3>{title}</h3>
			<p>NGN{cost}/month</p>
			<hr />
			<div className="plan-card-item-container">
				<div className="plan-card-item-left">
					<img src={streamType} alt="stream img"/>
					<p>Stream in {streamIn}</p>
				</div>
				<div className="plan-card-item-right">
					<img src={watcOn} alt="devices" />
					<p>Watch on {devices} at a time.</p>
				</div>
			</div>
		</div>
		<div className="plan-btn">
			<button style={{backgroundColor: backgroundColor}}>Continue</button>
		</div>
	</div>
)

export default CardItem;