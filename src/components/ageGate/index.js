import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AgeVerificationContext from 'contexts/ageVerification-context'
import Button from 'components/UI/Button';
import bartenderImage from 'assets/bartender.png';
import happyBeerImage from 'assets/happyBeer.png';
import sleepingBeerImage from 'assets/sleepingBeer.png';
import classes from './AgeGate.module.css';

const AgeGate = () => {
    const ctx = useContext(AgeVerificationContext)

    return (
        <div className={classes.background}>
            <div className={classes.ageGateWindow}>
                <img
                    className={classes.bartender}
                    src={bartenderImage}
                    alt="happy bartender"
                />
                <div className={classes.question}>
                    <h2>
                        are you at least
                        <span>
                            18
                        </span>
                        years old sir?
                    </h2>
                </div>
                <div className={classes.buttonsContainer}>
                    <Link to='/beers'>
                        <Button onClick={ctx.isVerified}>
                            yes sir
                            <img className={classes.happyBeer}
                                src={happyBeerImage}
                                alt="happy beer"
                            />
                        </Button>
                    </Link>
                    <Button
                        onClick={ctx.kickUser}>
                        not yet
                        <img
                            className={classes.sleepingBeer}
                            src={sleepingBeerImage}
                            alt="happy beer"
                        />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AgeGate;