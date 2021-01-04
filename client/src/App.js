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
import PrivateRoute from './helpers/PrivateRoutes'
import Page404 from './components/Page404';
import { fetch_user_success } from './redux/actions/userActions';
import { useEffect } from 'react';
import AddProducts from './components/AddProducts';
import Shipping from './components/Shipping';
import PaymentScreen from './components/PaymentScreen';
import OrderPage from './components/OrderPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
      const localData = JSON.parse(sessionStorage.getItem('data'));
      if(localData) {
          dispatch(fetch_user_success(localData.user));
      }
  }, []);
  return (
    <div>
        <Navbar />
        <Switch>
            <Route exact path='/' component={ProductContainer} />
            <Route path='/cart' component={Cart} />
            <PublicRoute path='/registration' component={Registration} />
            <PublicRoute path='/signin' component={SignIn} />
            <Route path='/product/:id' component={ProductDetails} />
            <PrivateRoute path='/add-products' component={AddProducts} />
            <PrivateRoute path='/shipping' component={Shipping} />
            <PrivateRoute path='/payment' component={PaymentScreen} />
            <PrivateRoute path='/order' component={OrderPage} />
            <Route>
              <Page404 />
            </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
