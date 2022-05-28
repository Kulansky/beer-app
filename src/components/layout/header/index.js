import logoImage from 'assets/images/logo.png';
import classes from './Header.module.css';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory()

    const redirectToMainPage = () => {
        history.push("/beers")
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={classes.header}>
            <img className={classes['main-img']}
                onClick={redirectToMainPage}
                src={logoImage}
                alt='beer logo'
            />
            <span className={classes.logoDescription}
                onClick={redirectToMainPage}
            >
                globo's beers
            </span>
        </div>
    );
};

export default Header;


