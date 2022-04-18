import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BlurOnIcon from '@material-ui/icons/BlurOn';
import { Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles(() => ({
    dot: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        backgroundColor: '#2E2E2E',
        borderRadius: '50px',
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 2px 3px 0px, rgba(60, 64, 67, 0.15) 0px 3px 6px 3px',
        //animation: `${ripple} 2s linear infinite`,
    },
}));

const Point = () => {
    const classes = useStyles();

    const good = () => {
        return <BlurOnIcon className={classes.dot} style={{ color: '#90EE90' }} />;
    };

    const medium = () => {
        return <BlurOnIcon className={classes.dot} style={{ color: '#ffa500' }} />;
    };
    const poor = () => {
        return <BlurOnIcon className={classes.dot} style={{ color: '#EE4B2B' }} />;
    };

    return <div>{good()}</div>;
};

export default Point;
