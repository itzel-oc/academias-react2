import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Cards.css';

function CardCompletePost( props ) {
  return (
    props.posts.map( (post) => 
  <Grid item xs={12} sm={6} key={post.id}> 
    <Card>
    <CardActionArea> 
        <CardMedia component="img" src={post.image}/>
        <CardContent className="postCard"  style={{position: "absolute", padding: "30px", bottom: "0", color:"white"}}  >
          <Typography variant="h3">{post.title}</Typography>
          <Typography >3 Comments</Typography>
          <Typography >{post.shortDescription}</Typography>
          <Typography >{post.description}</Typography>
          <Typography >{post.category}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>));
}

export default CardCompletePost