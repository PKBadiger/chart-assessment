import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    
  }));

  const getNewMeasurementData = state => {
    const getMultipleMeasurements =
      state.metricMeasurements.getMultipleMeasurements;
    return getMultipleMeasurements;
  };

const CardStats = (props) => {

    const classes = useStyles();
    //sconst theme = useTheme();
    const getNewMeasurementDatas = useSelector(getNewMeasurementData);
    let list = getNewMeasurementDatas.getMultipleMeasurements;
    let displayUnit = '';
    for (let index = 0; index < list.length; index++) {
      let data = list[index].measurements.slice(-1)[0];
      // console.log(data.metric);
      // console.log(props.value);
      if (props.value == data.metric) {
        console.log("IF condition");
        console.log(data);
        displayUnit = data;
      }
    }
    console.log("Disaply unit");
    console.log(displayUnit);
    return(
        <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {`${displayUnit.value}  ${displayUnit.unit}`}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {displayUnit.metric}
          </Typography>
        </CardContent>
        
      </div>
      </Card>
    )
}

export default CardStats;
