import BeerError from '../components/beerError'
import AppTemplate from 'templates/AppTemplate';

const ErrorPage = () => {
    return (
        <AppTemplate>
            <BeerError />
        </AppTemplate>
    );
};
export default ErrorPage;