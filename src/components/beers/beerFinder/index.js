import { useRef } from 'react';
import classes from './BeerFinder.module.css';

const BeerFinder = ({ setFilters }) => {
    const beerInputRef = useRef();

    const handleFilters = () => {
        const enteredBeerName = beerInputRef.current.value
        setFilters(enteredBeerName)
        beerInputRef.current.value = ''
    };

    return (
        <div className={classes.searchSectionWrapper}>
            <div className={classes.inputWrapper}>
                <input
                    type='text'
                    id='beer'
                    name='beer'
                    placeholder='You can find your beer by name here...'
                    ref={beerInputRef}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleFilters();
                        };
                    }}
                />
            </div>
            <div className={classes.buttonWrapper}>
                <button className={classes.searchButton} onClick={handleFilters}>Search</button>
            </div>
        </div>
    );
};

export default BeerFinder;



