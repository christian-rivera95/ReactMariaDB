import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Secretaria de Salud
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: false,
      users: [],
      user: {
        username: "",
        password: "",
      },
      userError: false,
      passwordError: false,
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers = (_) => {
    fetch("http://localhost:4000/users")
      .then((response) => response.json())
      .then((response) => this.setState({ users: response.data }))
      .catch((err) => console.error(err));
  };

  addUser = (_) => {
    const { user } = this.state;
    const { username, password } = user;
    fetch(
      `http://localhost:4000/users/add?username="${username}"&userpassword="${password}"`
    )
      .then(this.getUsers)
      .catch((err) => console.error(err));
  };

  onClick() {
    const { users, username, password } = this.state;
    let userError = false;
    let passwordError = false;
    users.map((user) => {
      if (user.username === username && user.userpassword === password) {
        this.props.history.push("/dashboard");
      } else {
        user.username !== username ? (userError = true) : (userError = false);
        user.userpassword !== password
          ? (passwordError = true)
          : (passwordError = false);
      }
      return user;
    });
    if (userError) this.setState({ userError: true });
    if (passwordError) this.setState({ passwordError: true });
  }

  render() {
    const { classes } = this.props;
    const { userError, passwordError } = this.state;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar Sesion
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              error={userError}
              helperText={userError ? "Invalid user" : null}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Usuario"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <TextField
              error={passwordError}
              helperText={passwordError ? "Incorrect Password" : null}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => this.onClick()}
            >
              Iniciar Sesion
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default withStyles(styles)(Login);
