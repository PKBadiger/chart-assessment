import React from 'react';
// import { useQuery, useSubscription } from 'urql';
// import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardStats from './CardStats';
import MultiSelect from './MultiSelect';
// import { width } from '@material-ui/system';
// import * as actions from '../store/actions';
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


const MetricData = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}> <MultiSelect /> </Paper>
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