import React from 'react'
import User from '../models/userModel'

import ACTIONS from '../actions'

const Banner = React.createClass({
	// ensures that runs logged correlate with logged in user
	runLink:function(){
		return (User.getCurrentUser()) ?  <a href= {`#addrun/user/${User.getCurrentUser().get('_id')}`} className= 'navATag'>Add/View Runs</a> : null
	},

	render: function() {
		// only show link when user is logged out
		var userLoggedOut = (User.getCurrentUser()) ? 'navATag hiddenLink' : ''

		// only show link when user is logged in
		var userLoggedIn = (!User.getCurrentUser()) ? 'navATag hiddenLink' : ''
		
		return (
			<div>
				<div className='banner'>
					<p className='quote'>The greatest wealth is health.</p>
				</div>
				<div>
					<h1 className='title'>HASHIRU</h1>
				</div>
				<nav className='navBar'>
				<a className={userLoggedIn} href='#home'>My Progress</a>
				<a className={userLoggedIn} href='#bossbattles'>Bosses</a>
				<a className={userLoggedIn} href='#quests'>Quests</a>
				<a className={userLoggedIn} href='#trainingplan'>Training Plan</a>
				{this.runLink()}
				<a className={userLoggedIn} href='#faq'>FAQ</a>
				<a className={userLoggedOut} href='#login'>Log In</a>
				<a className={userLoggedOut} href='#faqloggedout'>FAQ</a>
				<a className={userLoggedIn} onClick={ACTIONS.logUserOut}>Log Out</a>
				</nav>
			</div>
		)
	}
})

export default Banner