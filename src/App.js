import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage';
import MainPageBeers from 'pages/MainPageBeers';
import BeerDetail from 'pages/BeerDetail';
import ErrorPage from 'pages/ErrorPage';
import AgeVerificationContext from 'contexts/ageVerification-context';

const App = () => {
  const ctx = useContext(AgeVerificationContext);

  return (
    <Switch>
      <Route path='/' exact >
        <Redirect to='/welcome' />
      </Route>
      <Route path='/welcome' component={WelcomePage} />
      <Route path='/beers' exact>
        {ctx.userHasEnoughAge && <MainPageBeers />}
        {!ctx.userHasEnoughAge && <Redirect to='/welcome' />}
      </Route>
      <Route
        path='/beers/:id'>
        <BeerDetail />
        ({!ctx.userHasEnoughAge && <Redirect to='/welcome' />})
      </Route>
      <Route path='*' component={ErrorPage} />
    </Switch >
  );
};

export default App;
