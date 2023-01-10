import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";

import { useDispatch } from "react-redux";
import useStyle from "./style";
import { deletePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId, currentId }) => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const handleDelete = () => {
    dispatch(deletePost(post._id));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.creatorAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            console.log(post._id);
            setCurrentId(() => post._id);
          }}
          lp
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} varient="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like {post.likeCount}
        </button>
        <button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          Delete
        </button>
      </CardActions>
    </Card>
  );
};

export default Post;
