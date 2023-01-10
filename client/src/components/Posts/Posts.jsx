import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";

import { useSelector } from "react-redux";
import useStyle from "./style";

const Posts = ({ setCurrentId, currentId }) => {
  const classes = useStyle();
  const posts = useSelector((state) => state.posts);
  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => {
        return (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post
              post={post}
              setCurrentId={setCurrentId}
              currentId={currentId}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Posts;
