import React, {useEffect} from 'react';
import { useQuery, useSubscription } from 'urql';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardStats from './CardStats';
import MultiSelect from './MultiSelect';
import { width } from '@material-ui/system';
import * as actions from '../store/actions';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '10px'
    },
    paper: {
       padding: '0 10px 10px',
      color: theme.palette.text.secondary,
      float: 'right',
      width: '30%',
      marginBottom: '10px'

    },
    charContainer: {
        padding: '10px',
        color: theme.palette.text.secondary,
        height: '100%'
    },
    item: {
        marginBottom: '10px'
    }
  }));

  const current_time = new Date().valueOf();
  const query_metric = `
      query {
          getMetrics
      }`;
  
  const query_multiple_measurements = `
  query($input: [MeasurementQuery] = [
    {metricName: "tubingPressure", after: ${current_time -
      1800000}, before: ${current_time}},
    {metricName: "casingPressure", after: ${current_time -
      1800000}, before: ${current_time}},
    {metricName: "oilTemp", after: ${current_time -
      1800000}, before: ${current_time}},
    {metricName: "flareTemp", after: ${current_time -
      1800000}, before: ${current_time}},
    {metricName: "waterTemp", after: ${current_time -
      1800000}, before: ${current_time}},
    {metricName: "injValveOpen", after: ${current_time -
      1800000}, before: ${current_time}}
  ]
  ){
    getMultipleMeasurements(input: $input) {
      metric
      measurements {
       at
       value
       metric
       unit
      }
    }
  }`;

  const FetchMetricList = () => {
    let query = query_metric;
    const dispatch = useDispatch();
    let [result] = useQuery({
      query,
      variables: {}
    });
    const { fetching, data, error } = result;

    // similar to component did mount, the useEffect gets calle 
    useEffect(() => {
      if (error) {
        dispatch({ type: actions.METRIC_API_CALL_FAIL, error });
      }
      if (!data) {
        return;
      }
      if (fetching) {
        return;
      }
      
      dispatch({ type: actions.METRICS_DATA_RECEIVED, getMetrics: data.getMetrics });
    }, [dispatch, data, error, fetching]);
  };
  
  const getMetric = state => {
    const getMetrics = state.metricFields.getMetrics;
   return getMetrics;
  };
  

const MetricData = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      switch: true,
      value: []
    });
    FetchMetricList()
    const getMetrics = useSelector(getMetric);
    
    if (getMetrics.length === 0)
    return (
      <div>Loading</div>
    );

    const handleSelectionChange = (event) => {
      setState({ ...state, value: event.target.value });
    };

    return(
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}> <MultiSelect getMetrics={getMetrics} handleSelectionChange={handleSelectionChange} values={state.value}/> </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={2} className={classes.item}>
                    <CardStats />
                </Grid>
                <Grid item xs={2}>
                    <CardStats />
                </Grid>
                <Grid item xs={2}>
                    <CardStats />
                </Grid>
                <Grid item xs={2}>
                    <CardStats />
                </Grid>
                <Grid item xs={2}>
                    <CardStats />
                </Grid>
                <Grid item xs={2}>
                    <CardStats />
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.charContainer}> Drop Down </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default MetricData;