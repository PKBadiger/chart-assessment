import { reducer as weatherReducer } from '../Features/Weather/reducer';
import MetricFields from './reducers/MetricFields';
export default {
  weather: weatherReducer,
  metricFields: MetricFields,
};
