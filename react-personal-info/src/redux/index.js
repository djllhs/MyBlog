/**
 * Created by admin on 2017/2/28.
 */

export default function counter(state = 0, action) {
    switch (action.type) {
        case 'ADD' :
            return state + 1;
        case 'REDUCE':
            return state - 1;
        default:
            return state;
    }
}