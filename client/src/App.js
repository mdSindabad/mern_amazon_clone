import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import ProductContainer from './components/ProductContainer';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Registration from './components/Registration';
import SignIn from './components/SignIn';
import { useDispatch } from 'react-redux';
import PublicRoute from './helpers/PublicRoute';
import Page404 from './components/Page404';
import { fetch_user_success } from './redux/actions/userActions';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const localData = JSON.parse(sessionStorage.getItem('data'));
      console.log(localData);
      if(localData) {
          dispatch(fetch_user_success(localData.user));
      }
  }, []);
  return (
    <Switch>
      <div>
        <Navbar />
        <Route exact path='/' component={ProductContainer} />
        <Route path='/cart' component={Cart} />
        <PublicRoute path='/registration' component={Registration} />
        <PublicRoute path='/signin' component={SignIn} />
        <Route path='/product/:id' component={ProductDetails} />
        {/* <Route path='*' component={Page404} /> */}
        <Footer />
      </div>
    </Switch>
  );
}

export default App;
