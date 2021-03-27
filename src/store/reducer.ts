export interface IState {
    user: any;
    userStatus: boolean | null;
    twofactor: boolean | null;
    token: string | null;
    phone: string | null;
}

export const initialState: IState = {
    user: null,
    token: null,
    userStatus: null,
    twofactor: null,
    phone: null,
};

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_TOKEN: 'SET_TOKEN',
    SET_USER_STATUS: ' SET_USER_STATUS',
    SET_TWO_FACTOR: ' SET_TWO_FACTOR',
    SET_PHONE: ' SET_PHONE',
};

const reducer = (state: IState, action: any) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return { ...state, user: action.value };
        case actionTypes.SET_TOKEN:
            return { ...state, token: action.value };
        case actionTypes.SET_TWO_FACTOR:
            return { ...state, twofactor: action.value };
        case actionTypes.SET_USER_STATUS:
            return { ...state, userStatus: action.value };
        case actionTypes.SET_PHONE:
            return { ...state, phone: action.value };
        default:
            return state;
    }
};

export default reducer;
