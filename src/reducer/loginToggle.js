const initialState = {
    toggle : false
}

const loginToggle = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE':
            switch(action.swit){
                case 'on':
                    return {
                        ...state,
                        toggle: true
                    }
                case 'off':
                    return {
                        ...state,
                        toggle: false
                    }
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default loginToggle;