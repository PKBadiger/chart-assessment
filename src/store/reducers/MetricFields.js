import * as actionTypes from '../actions';
const initialState = {
    getMetrics: [],
    isAPICallFailed: false
}

const metricFieldReducer = (state = initialState, action) => {
    const { type, getMetrics } = action;
    switch(type) {
        case actionTypes.METRICS_DATA_RECEIVED:
            return {...state, getMetrics}
        case actionTypes.METRIC_API_CALL_FAIL:
            return {...state, isAPICallFailed: true}
        default:
            return state;
    }
}

export default metricFieldReducer;