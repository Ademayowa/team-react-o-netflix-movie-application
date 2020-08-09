import React from 'react'
import './Home.css'
import logo from '../../images/logo.svg'

class Home extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange (event){
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit (event){
        event.preventDefault();
        this.setState({
            email : ''
        })
    }

    render() {
        return (
            <div className="hero">
                <div className="logo">
                    <img src={logo} alt="logo" />
                    <a href=" "><button>Sign In</button></a>
                </div>
                <div className="hero-content">
                <div className="hero-title" >
                    <h1 style={{textAlign:'center'}}>100% entertainment guaranteed.</h1>
                    <h2>You'll love Netflix! If you don't, cancel within 7 days for a refund.</h2>
                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input className="email" type="email" valu={this.state.email} onChange={this.handleChange} name='email' placeholder='Email Address' />
                    <button className="submit" type="submit">GET STARTED <i style={{padding:'0 5px'}} class="fas fa-chevron-right"></i></button>
                </form>
                </div>
            </div>
        )
    }
}

export default Home
