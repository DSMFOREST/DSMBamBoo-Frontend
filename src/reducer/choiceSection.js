const initialState = {
    section : '공지사항',
    post : false
}

const choiceSection = (state = initialState, action) => {
    switch(action.type) {
        case 'SECTION':
            switch(action.section) {
                case '제보하기' :
                    return {
                        ...state,
                        post : true
                    }
                case 'exit' :
                    return {
                        ...state,
                        post : false
                    }
                default :
                    return {
                        ...state,
                        section : action.section
                    }
            }
        default:
            return state
    }
}

export default choiceSection