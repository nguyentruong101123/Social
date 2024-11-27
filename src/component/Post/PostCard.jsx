import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from "@mui/material/colors";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const PostCard = () => {
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="https://images.sftcdn.net/images/t_app-icon-m/p/d504146b-a787-4d64-9565-a82a92dd05e3/1285129883/one-piece-fighting-path-icon.png">
           
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="One piece"
        subheader="September 14, 2016"
      />
       <CardMedia
        component="img"
        height="194"
        image="https://assets-prd.ignimgs.com/2023/07/03/netflix-one-piece-1654901410673-1688416848504.jpg"
        alt="Paella dish"
      />
         <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions className="flex justify-between" disableSpacing>
       <div>
        <IconButton>
        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
        </IconButton>

        <IconButton>
        <ChatBubbleIcon/>
        </IconButton>

        <IconButton>
        <ShareIcon/>
        </IconButton>

     

       </div>
       
       <div>
       <IconButton>
        {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
        </IconButton>
       </div>
      </CardActions>
    </Card>
  );
};

export default PostCard;
