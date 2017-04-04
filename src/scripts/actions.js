import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import User from './models/userModel'
import STORE from './store'

var ACTIONS = {

	increaseLevel: function(miles) {
		console.log('miles =', miles)
		STORE.set({
			expPoints: STORE.get('expPoints') + parseInt(miles)
		})
	},

	loggedInStatus: function() {
		console.log(User.getCurrentUser())
		if(User.getCurrentUser() != null){

			STORE.set({userLoginStatus: 'Log Out'})
			console.log(STORE.data.userLoginStatus)

			return 'Log Out'
		}

		else{

			STORE.set({userLoginStatus: 'Log In'})
			console.log(STORE.data.userLoginStatus)

			return 'Log In'
		}
	},

	logUserIn: function(email, password) {
		User.login(email, password)
		.done(
			function(response){
				alert('logged in!')
				console.log(response)
				location.hash = 'home'
			}
		)
		.fail(
			function(error){
				alert('problem logging in')
				console.log(error)
			}
		)
	},

	logUserOut: function(){
		User.logout()
		.done(
			function(response){
				alert('logged out')
				location.hash = 'login'
			}
		)
		.fail(
			function(error){
				alert('problem logging out')
				console.log(error)
			}
		)
	},

	registerUser: function(userData) {
		User.register(userData)
		.done(
			function(res){
				alert(`new user ${res.email} registered!`)
				console.log(res)
				ACTIONS.logUserIn(userData.email, userData.password)
			}
		)
		.fail(
			function(error){
				alert('problem registering user')
				console.log(error)
			}
		)
	}
}

export default ACTIONS