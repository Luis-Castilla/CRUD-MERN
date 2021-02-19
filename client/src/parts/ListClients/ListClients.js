import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: "1px solid gray",
        margin: "15px auto"
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const history = useHistory();

    const classes = useStyles();

    const [clients, setClients] = useState([]);

    const getClients = () => {
        axios
            .get('http://localhost:5000/api/clients/')
            .then((res) => {
                const clientsData = res.data.body;
                setClients(clientsData);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        getClients();
    }, []);



    const deleteClient = async (id) => {


        console.log("Holi " + id);
        await axios
            .delete(`http://localhost:5000/api/clients/delete/${id}`)
            .then(() => { 
                history.go(0); 
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const goToEdit = (id) => {
        history.push(`/client/edit/${id}`)
    }

    return (
        <Container maxWidth="sm">
            {clients.map((client) => {
                return <div key={client.cedula}>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Name: {client.nombre}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Email: {client.email}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Cédula: {client.cedula}
                                </Typography>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    Teléfono: {client.telefono}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={(id) => goToEdit(client._id)}>
                                Edit
                            </Button>
                            <Button size="small" color="secondary" onClick={(id) => deleteClient(client._id)}>
                                Delete
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            })
            }
        </Container>
    );
}