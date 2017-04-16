import React from 'react'

import Banner from '../components/banner'
import UserInfo from '../components/userInfo'

var TrainingPlanPage = React.createClass({

	// this is a lot of lines of code for a simple marathon html-ish training plan table!

	render: function() {
		return (
			<div className='trainingPlanPage'>
				<Banner />
				<UserInfo />
				<h1 className='trainingPlanTitle'>Marathon Training Plan</h1>
				<hr />
				<table className='trainingPlanTable'>
					<thead>
						<tr>
							<th>Week</th>
							<th>Monday</th>
							<th>Tuesday</th>
							<th>Wednesday</th>
							<th>Thursday</th>
							<th>Friday</th>
							<th>Saturday</th>
							<th>Sunday</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Rest</td>
							<td>3m</td>
							<td>3m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>6m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Rest</td>
							<td>3m</td>
							<td>3m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>7m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Rest</td>
							<td>3m</td>
							<td>4m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>5m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>4</td>
							<td>Rest</td>
							<td>3m</td>
							<td>4m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>9m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>5</td>
							<td>Rest</td>
							<td>3m</td>
							<td>5m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>10m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>6</td>
							<td>Rest</td>
							<td>3m</td>
							<td>5m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>7m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>7</td>
							<td>Rest</td>
							<td>3m</td>
							<td>6m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>12m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>8</td>
							<td>Rest</td>
							<td>3m</td>
							<td>6m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>Half Marathon</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>9</td>
							<td>Rest</td>
							<td>3m</td>
							<td>7m</td>
							<td>4m</td>
							<td>Rest</td>
							<td>10m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>10</td>
							<td>Rest</td>
							<td>3m</td>
							<td>7m</td>
							<td>4m</td>
							<td>Rest</td>
							<td>15m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>11</td>
							<td>Rest</td>
							<td>4m</td>
							<td>8m</td>
							<td>4m</td>
							<td>Rest</td>
							<td>16m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>12</td>
							<td>Rest</td>
							<td>4m</td>
							<td>8m</td>
							<td>5m</td>
							<td>Rest</td>
							<td>12m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>13</td>
							<td>Rest</td>
							<td>4m</td>
							<td>9m</td>
							<td>5m</td>
							<td>Rest</td>
							<td>18m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>14</td>
							<td>Rest</td>
							<td>5m</td>
							<td>9m</td>
							<td>5m</td>
							<td>Rest</td>
							<td>14m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>15</td>
							<td>Rest</td>
							<td>5m</td>
							<td>10m</td>
							<td>5m</td>
							<td>Rest</td>
							<td>20m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>16</td>
							<td>Rest</td>
							<td>5m</td>
							<td>8m</td>
							<td>4m</td>
							<td>Rest</td>
							<td>12m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>17</td>
							<td>Rest</td>
							<td>4m</td>
							<td>6m</td>
							<td>3m</td>
							<td>Rest</td>
							<td>8m</td>
							<td>Cross</td>
						</tr>
						<tr>
							<td>18</td>
							<td>Rest</td>
							<td>3m</td>
							<td>4m</td>
							<td>2m</td>
							<td>Rest</td>
							<td>Rest</td>
							<td>Marathon</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
})

export default TrainingPlanPage