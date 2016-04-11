import { FETCH_DATA } from '../app/actions/index';

const INITIAL_STATE = { all: [] };

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_DATA:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}
