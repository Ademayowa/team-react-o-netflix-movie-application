import React from 'react';
import CardItem from './Signup-planform-card';

class SignupPlanformB extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			cards: [
				{
					title: 'Premium',
					cost: '4,400',
					streamType: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/quality_4KHDR-red_v2.svg',
					streamIn: 'Ultra Definition.',
					watcOn: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/screens_4S-red_v2.svg',
					devices: '4 devices',
					backgroundColor: '#e50914',
					id: 1
				},
				{
					title: 'Standard',
					cost: '3,600',
					streamType: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/quality_HD-magenta_v2.svg',
					streamIn: 'Higher Definition.',
					watcOn: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/screens_2S-magenta_v2.svg',
					devices: '2 devices',
					backgroundColor: '#ab1256',
					id: 2
				},
				{
					title: 'Basic',
					cost: '2,900',
					streamType: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/quality_SD-blue_v2.svg',
					streamIn: 'Standard Definition.',
					watcOn: 'https://assets.nflxext.com/ffe/siteui/acquisition/planSelection/cards/svg/screens_1S-blue_v2.svg',
					devices: '1 device',
					backgroundColor: '#2075c5',
					id: 3
				}
			]
		}
	}
	render(){
		return(
		<div className='signup-planform'>
			<div className="container">
				<div className="plan-container">
					<span className="plan-logo"></span>
					<p>STEP 2 OF 3</p>
					<h2>Choose the plans that's right for you.</h2>
					<p>Downgrade or upgrade at any time</p>
					<div className="plan-card">
						{this.state.cards.map(({title, cost, streamType, streamIn, watcOn, devices, backgroundColor, id}) => (
								<CardItem key={id} title={title} cost={cost} streamType={streamType} streamIn={streamIn} watcOn={watcOn} devices={devices} backgroundColor={backgroundColor} />
							))}
					</div>
					<div className="plan-footer">
						<p>HD and Ultra HD availability subject to your Internet service and device capabilities. Not all content available in HD or Ultra HD. See Terms of Use for more details.</p>
					</div>
				</div>
			</div>
		</div>
	)
	}
}

export default SignupPlanformB;