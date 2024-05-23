

type ActionPropTypes = {
    type: 'SET_THEME';
    payload: string;
}

interface StatePropTypes {
    theme: string;

}

export const themeReducer = (state: StatePropTypes, action: ActionPropTypes) => {
    switch (action.type) {
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}
