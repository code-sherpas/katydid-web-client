import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Box, Card, CardContent } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    textAlign: 'center',
    backgroundColor: '#B1E2EF',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      textAlign: 'left',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    [theme.breakpoints.up('xl')]: {
      height: 420
    },
    [theme.breakpoints.down('md')]: {
      height: 600
    }
  },
  content: {
    [theme.breakpoints.up('md')]: {
      padding: 0,
      paddingLeft: theme.spacing(5)
    }
  }
}));

// ----------------------------------------------------------------------

Welcome.propTypes = {
  displayName: PropTypes.string,
  className: PropTypes.string
};

function Welcome({ displayName, className, ...other }) {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardContent className={classes.content}>
        <Box component="h4" sx={{ pb: 1, typography: 'h4', color: 'white' }}>
          Welcome back,
          <br /> {!displayName ? '...' : displayName}!
        </Box>

        <Box
          component="p"
          sx={{ typography: 'body2', color: 'grey.800', pb: { xs: 3, xl: 5 } }}
        >
          {}
        </Box>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#38B8F7' }}
          to="/app/children"
          component={RouterLink}
        >
          View children
        </Button>
      </CardContent>

      <Box
        component="img"
        alt="welcome"
        src="/static/illustrations/illustration_seo.svg"
        sx={{
          p: 2,
          height: 280,
          margin: { xs: 'auto', md: 'inherit' }
        }}
      />
    </Card>
  );
}

export default Welcome;
