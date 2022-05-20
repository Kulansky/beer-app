import logoImage from 'assets/logo.png'
import classes from './Header.module.css'

const Header = () => {

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={classes.header}>
            <img className={classes['main-img']}
                onClick={scrollToTop}
                src={logoImage}
                alt='beer logo'
            />
            <span className={classes.logoDescription}>
                globo's beers
            </span>
        </div>
    );
};

export default Header;


