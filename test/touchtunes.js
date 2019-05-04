import { expect } from 'chai'
import filterSettings from '../src/modules/touchtunes'

const fakeComponents = [
	{
		'name': 'audio'
	},
	{
		'name': 'LED array'
	},
	{
		'name': 'display'
	}
]
const fakeSettings = [
	{
		'name': 'Mixer',
		'requires': ['audio', 'pcb']
	},
	{
		'name': 'AttractLoop',
		'requires': []
	},
	{
		'name': 'Volume',
		'requires': ['audio']
	},
	{
		'name': 'Language',
		'requires': []
	},
	{
		'name': 'SleepMode',
		'requires': ['clock']
	},
	{
		'name': 'NightMode',
		'requires': ['pcb']
	},
	{
		'name': 'Promocode',
		'requires': []
	}
]

describe('Filter settings function', () => {
	it('Filters through the settings array and checks the components', () => {
		let cleanArray = filterSettings(fakeComponents, fakeSettings)

		expect(cleanArray).to.deep.equal([
			{
				'name': 'Mixer',
				'requires': ['audio', 'pcb']
			},
			{
				'name': 'AttractLoop',
				'requires': []
			},
			{
				'name': 'Volume',
				'requires': ['audio']
			},
			{
				'name': 'Language',
				'requires': []
			},
			{
				'name': 'Promocode',
				'requires': []
			}
		])
	})
})
