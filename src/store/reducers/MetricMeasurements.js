import * as actionTypes from '../actions';
const initialState = {
    getMultipleMeasurements: [],
    isAPICallFailed: false
}

const metricMeasurements = (state = initialState, action) => {
    const { type, getMultipleMeasurements } = action;
    console.log("Reducer");
    console.log(action);
    switch(type) {
        case actionTypes.METRICS_MEASUREMENTS_RECEIVED:
            return {...state, getMultipleMeasurements}
        case actionTypes.NEW_MEASUREMENTS_RECEIVED:
            if (state.getMultipleMeasurements.hasOwnProperty("getMultipleMeasurements")) {
                for (let i = 0; i < Object.keys(state.getMultipleMeasurements.getMultipleMeasurements).length; i++) {
                  if (
                    state.getMultipleMeasurements.getMultipleMeasurements[i].metric ===
                    action.newMeasurementData.newMeasurement.metric
                  ) {
                    state.getMultipleMeasurements.getMultipleMeasurements[i].measurements.push(action.newMeasurementData.newMeasurement);
                    state.getMultipleMeasurements.getMultipleMeasurements[i].measurements.shift()
                  }
                }
              }
            return state;
        case actionTypes.MULTIPLE_MEASUREMENTS_API_CALL_FAIL, actionTypes.NEW_MEASUREMENTS_API_CALL_FAIL:
            return {...state, isAPICallFailed: true}
        default:
            return state;
    }
}

export default metricMeasurements;