import React from 'react'
import User from '../models/userModel'

import ACTIONS from '../actions'

var Banner = React.createClass({
	runLink:function(){
		return (User.getCurrentUser()) ?  <a href= {`#addrun/user/${User.getCurrentUser().get('_id')}`} className= 'navATag'>Add/View Runs</a> : null
	},

	render: function() {
		var userLoggedOut = (User.getCurrentUser()) ? 'navATag hiddenLink' : ''
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
				<a className={userLoggedIn} href='#bossbattles'>Boss Battles</a>
				<a className={userLoggedIn} href='#quests'>Quests</a>
				<a className={userLoggedIn} href='#trainingplan'>Training Plan</a>
				{this.runLink()}
				<a className={userLoggedIn} href='#faq'>FAQ</a>
				<a className={userLoggedOut} href='#login'>Log In</a>
				<a className={userLoggedIn} onClick={ACTIONS.logUserOut}>Log Out</a>
				</nav>
			</div>
		)
	}
})

export default Banner