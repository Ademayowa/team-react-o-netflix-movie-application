import React from 'react';
import SignupPlanformB from './Signup-planformb';
import './Signup-planform.styles.css'

class SignupPlanform extends React.Component {
	render(){
		return(
			<div className='signup-planform'>
				<div className="container">
					<div className="plan-container">
						<div className="plan-top-box">
							<span className="plan-logo">
								<img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="check-logo" />
							</span>
							<p>STEP 1 OF 3</p>
							<h2>Choose your plan.</h2>
						</div>
						<div className="plan-check">
							<ul>
								<li className="plan-check-item">
									<svg viewBox="0 0 24 24" className="plan-check-icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path></svg>
									No commitments, cancel anytime</li>
								<li className="plan-check-item">
									<svg viewBox="0 0 24 24" className="plan-check-icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path></svg>
									Everything on Netflix for one low price</li>
								<li className="plan-check-item">
									<svg viewBox="0 0 24 24" className="plan-check-icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z"></path></svg>
									Unlimited viewing on all your devices</li>
							</ul>
						</div>
						<div className="plan-btn">
							<button>See the plans</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default SignupPlanform;