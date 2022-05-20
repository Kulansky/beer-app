import lostBeer from 'assets/lostBeer.png';
import classes from './BeerError.module.css';
import { motion } from 'framer-motion';

const BeerError = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, stiffness: 800 }}
        >
            <div className={classes.mainContainer}>
                <div className={classes.errorWrapper}>
                    <div>
                        <p className={classes.errorInfo}>
                            404 beer not found
                        </p>
                    </div>
                    <div>
                        <img className={classes.errorImage}
                            src={lostBeer}
                            alt="got lost"
                        />
                    </div>
                    <div className={classes.errorMessageWrapper}>
                        <p className={classes.errorMessage}>
                            Whoops! Too much beers sir...
                            We got lost and we could not find your page.
                            Let's try to come back to home page!
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BeerError;