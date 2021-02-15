import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Establecimiento
            </Typography>
            <Grid container spacing={3}>
                <Grid item container xs={12} md={6} direction="row">
                    <Grid item>
                        <Typography variant="body2">
                            Referido/Responde a
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="UAPS"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="CIS"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Policlinico"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hospital"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="name"
                        label="Nombre del Hospital"
                        fullWidth
                    />
                </Grid>
                <Grid item container xs={12} md={6} direction="row">
                    <Grid item>
                        <Typography variant="body2">
                            Amerita atencion en
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Consulta Externa"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Emergencia"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hospitalizacion"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Otros"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField id="otros" label="Tipo de atencion" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="nombre_referente"
                        label="Nombre del establecimiento al que se Refiere o Responde"
                        fullWidth
                    />
                </Grid>
                <Grid item container xs={12} md={6} direction="row">
                    <Grid item>
                        <Typography variant="body2">
                            Referencia/Respuesta elaborada por
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Medico General"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Enfermera"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Medico Especialista"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Auxiliar Enfermeria"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
