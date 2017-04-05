import Backbone from 'backbone'
import ACTIONS from './actions'
import {RunCollection} from './models/runModel'
import {RunnerCollection} from './models/runModel'
import User from './models/userModel'

var STORE = Object.assign({},Backbone.Events,{

	data:{
		userCollection: new User(),
		runCollection: new RunCollection(),
		runnerCollection: new RunnerCollection(),
		expPoints: 0,
		level: 0
	},

	get: function(prop) {

		return this.data[prop]
	},

	set: function(obj){
		this.data = Object.assign(this.data, obj)
		var totalXP = this.data
		this.trigger('dataUpdated')
	}
})

export default STORE
