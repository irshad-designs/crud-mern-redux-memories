import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      margin: "1rem",
    },
  },
  paper: {
    padding: "2rem",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "2rem 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
