import { utilsActions, utilsState } from "../../types/utils"

const initinalState:utilsState = {
	showLogin:false,
	showPassword: false,
	showRegistration: false
}
export const utilsReducer = (state:utilsState = initinalState, action:utilsActions ):utilsState => {
	switch(action.type) {
		default:
			return state
	}
}