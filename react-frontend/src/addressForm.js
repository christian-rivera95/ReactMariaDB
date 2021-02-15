import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup } from '@material-ui/core';

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Datos Personales
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Primer Nombre"
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellido"
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        required
                        id="edad"
                        name="edad"
                        label="Edad"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item container xs={12} sm={3} direction="row">
                    <Grid item>
                        <Typography variant="body2">Sexo</Typography>
                    </Grid>
                    <Grid item>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="M"
                            />
                            <FormControlLabel
                                control={<Checkbox />}
                                label="F"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="telefono"
                        name="telefono"
                        label="Telefono"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address1"
                        name="address1"
                        label="Direccion 1"
                        fullWidth
                        autoComplete="billing address-line1"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="numero_identidad"
                        name="numero_identidad"
                        label="Numero de Identidad"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="no_expediente"
                        name="no_expediente"
                        label="Numero de Expediente"
                        fullWidth
                        autoComplete="billing address-line2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Municipio"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="depto"
                        name="Departamento"
                        label="Departamento"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="establecimiento"
                        name="establecimiento"
                        label="Establecimiento de salud"
                        fullWidth
                        autoComplete="billing postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="blood_type"
                        name="blood_type"
                        label="Tipo de Sangre"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="acompañante"
                        name="acompañante"
                        label="Acompañante"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="parentezco"
                        name="parentezco"
                        label="Parentezco"
                        fullWidth
                        autoComplete="billing country"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
