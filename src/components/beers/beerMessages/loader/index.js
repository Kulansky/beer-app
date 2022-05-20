import classes from './Loader.module.css';

const Loader = () => {
    return (
        <div className={classes.loaderMessageContainer}>
            <p className={classes.loaderMessage}>
                <b>Loading...</b>
            </p>
        </div>
    );
};

export default Loader;