/**
 *
 * @param {array of objects} componentsParam
 * @param {array of objects} settingsParam
 */
let filterSettings = (componentsParam, settingsParam) => {
	const finalArray = []

	if (!Array.isArray(componentsParam) || !Array.isArray(settingsParam)) {
		return false
	} else {
		settingsParam.forEach(setting => {
			if (setting.requires.length < 1) {
				finalArray.push(setting)
			} else {
				componentsParam.forEach(component => {
					if (setting.requires.includes(component.name)) {
						finalArray.push(setting)
					}
				})
			}
		})
	}
	return finalArray
}
export default filterSettings
