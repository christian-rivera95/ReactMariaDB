import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import SettingsApplications from "@material-ui/icons/SettingsApplications";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

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

const useStyles = makeStyles(theme => ({
  icon: {
    color: "white"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function Dashboard({ isAdmin, history }) {
  const classes = useStyles();

  let onClick = () => {
    history.push("/checkout");
  };

  let logOut = () => {
    history.push("/login");
  };

  const createUserForm = () => {
    history.push("/createUser");
  };

  return (
    <React.Fragment>
      <AppBar position="relative">
        <Toolbar>
          <Grid item container direction="row" alignItems="center" xs={12}>
            <Grid item xs={10}>
              <Typography
                variant="h6"
                color="inherit"
                noWrap
                style={{ marginLeft: "85px" }}
              >
                Bienvenido
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Button>
                <SettingsApplications
                  className={classes.icon}
                  onClick={createUserForm}
                />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button onClick={logOut} className={classes.icon}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Consulta tu Referencia
            </Typography>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Button variant="contained" color="primary" onClick={onClick}>
                  Llena tu Referencia
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Consulta tu Red
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Mapas de Redes
                </Button>
              </Grid>
            </Grid>
          </Container>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Secretaria de Salud
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Presidencia de la Republica
        </Typography>
        <Copyright />
      </footer>
    </React.Fragment>
  );
}
