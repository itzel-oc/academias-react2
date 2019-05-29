import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';

export default function CardPost( props ) {
  return props.posts.map( (post) => 
  (<Grid item xs={12} sm={6} key={post.id}> 
    <Card height='300px'>
    <CardActionArea> 
        <CardMedia 
        component="img" 
        src={post.image}         
        />
        <CardContent >
          <Typography variant="h3">{post.title}</Typography>
          <Typography >{`${post.comments.length} comments`}<Icon></Icon></Typography>
          <Typography >{post.shortDescription}</Typography>
          <Typography >{post.category}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>));
}