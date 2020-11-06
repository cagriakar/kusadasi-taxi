import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { green, grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react';
import createHref from '../../../../../helpers/createHref';
import useHover from '../../../../../hooks/useHover';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        backgroundColor: theme.palette.primary.main
    },
    actions: { display: `flex`, justifyContent: 'center' },
    destination: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    price: {
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.primary.dark
    },
    button: {
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
            backgroundColor: grey[900],
            color: theme.palette.primary.main
        },
        padding: theme.spacing(1, 2),
        borderRadius: 50
    }
}));

export default function PriceCard({ price }) {
    const classes = useStyles();

    const [hoverRef, isHovered] = useHover();

    return (
        <Card
            elevation={isHovered ? 15 : 5}
            ref={hoverRef}
            className={classes.root}
        >
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="180"
                image={price.image}
                title="Contemplative Reptile"
            />
            <CardContent className={classes.destination}>
                <Typography variant="h6" component="h4">
                    {`${price.to}`}
                </Typography>
            </CardContent>

            <CardContent className={classes.price}>
                <Typography gutterBottom variant="h4" component="p">
                    {`€ ${price.price}`}
                </Typography>
                <Typography variant="body2" component="p">
                    -- one way price --
                </Typography>
            </CardContent>

            <CardActions className={classes.actions}>
                <Button
                    className={classes.button}
                    size="small"
                    href={createHref(`whatsApp`, price.to)}
                    startIcon={
                        <WhatsAppIcon
                            fontSize="large"
                            style={{ color: green[500] }}
                        />
                    }
                >
                    Contact us
                </Button>
            </CardActions>
        </Card>
    );
}
