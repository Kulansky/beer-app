import classes from './EndMessage.module.css';

const EndMessage = () => {
    return (
        <div className={classes.endMessageContainer}>
            <p className={classes.endMessage}>
                <b>You have seen all beers sir!</b>
            </p>
        </div>
    );
};

export default EndMessage;