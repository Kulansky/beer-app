import { useHistory } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import classes from './BeerItem.module.css';
import barrelImage from 'assets/barrel.webp'

const Beer = (props) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/beers/${props.id}`);
    };

    return (
        <div className={classes.beer}>
            <div className={classes.beerWrapper}>
                <button onClick={() => handleClick()} className={classes.imagesWrapper}>
                    <div className={classes.styledBarrelImage}>
                        <LazyLoadImage
                            effect="blur"
                            src={barrelImage}
                            alt="Barrel"
                            height="300px"
                        />
                    </div>
                    <div className={classes.styledBeerImage}>
                        <LazyLoadImage
                            height="250px"
                            src={props.image_url}
                            alt="Beer"
                            effect="blur"
                        /></div>
                </button>
                <div className={classes.name}>
                    <h4>
                        {props.name}
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Beer;

