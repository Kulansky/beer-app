import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBeerDetails } from 'services/beerService';
import { motion } from "framer-motion";
import AppTemplate from 'templates/AppTemplate';
import classes from './BeerDetail.module.css';

const BeerDetails = () => {
    const [details, setDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {
            const response = await fetchBeerDetails(id);
            setDetails(response);
        };
        getDetails();
    }, [id]);

    const beerDetails = details.map((detail) => (
        <div className={classes.beerDetailWrapper}
            id={detail.id}
            key={detail.id}
        >
            <div className={classes.beerName}>
                <h2>{detail.name}</h2>
            </div>

            <div className={classes.beerTagline}>
                <h3>{detail.tagline}</h3>
            </div>

            <div className={classes.beerImgWrapper}>
                <img src={detail.image_url}
                    className={classes.beerImg}
                    alt='tasty beer!'
                >
                </img>
            </div>

            <div className={classes.beerParametresWrapper}>
                <p>ABV {detail.abv}</p>
                <p>IBU {detail.ibu}</p>
                <p>EBC {detail.ebc}</p>
            </div>

            <div className={classes.beerDescription}>
                <p>{detail.description}</p>
            </div>
        </div>
    ));

    return (
        <AppTemplate>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, stiffness: 500 }}
            >
                <div className={classes.container}>
                    {beerDetails}
                </div>
            </motion.div>
        </AppTemplate>
    );
};

export default BeerDetails;