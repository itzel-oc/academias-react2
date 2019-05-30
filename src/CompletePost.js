import React  from 'react';
import CardPost from './CardPost';
import Grid from '@material-ui/core/Grid';

function Post( props ) {
  return (
    <div>
      <Grid  > 
        <CardCompletePost posts={props.posts} />
      </Grid>    

    </div>
  );
}

export default CompletePost