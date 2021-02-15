import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

export default function PaymentForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Datos Medicos
            </Typography>
            <Grid container spacing={3}>
                <Grid item container xs={12} md={6} direction="row">
                    <Grid item>
                        <Typography variant="body2">
                            Motivo Del Envio
                        </Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Diagnostico"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Tratamiento"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Seguimiento"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Rehabilitacion"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Padece de alguna enfermedad?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Sintomas del Paciente"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Ha recibido alguna vacuna?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="Tiene alergias?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="standard-multiline-static"
                        label="Resumen de Datos Clinicos"
                        multiline
                        rows="4"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">Signos Vitales</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="p/a" label="P/A" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="fr" label="FR" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="p/fc" label="P/FC" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="t" label="T" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="peso" label="Peso" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="talla" label="Talla" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="cabeza" label="Cabeza" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="orl" label="ORL" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="ojos" label="Ojos" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="cuello" label="Cuello" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id="torax" label="Torax" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="abdomen"
                        label="Abdomen"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="genitales"
                        label="Genitales"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="extremidades"
                        label="Extremidades"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="neurologicos"
                        label="Neurologico"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="resultados_complementarios"
                        label="Resultado de examenes complementarios"
                        multiline
                        rows="4"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="impresion_diagnostico"
                        label="Impresion Diagnostico"
                        multiline
                        rows="4"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="recomendacion"
                        label="Recomendaciones/Observaciones"
                        multiline
                        rows="4"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
