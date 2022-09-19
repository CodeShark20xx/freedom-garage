import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Authentication from "./pages/Authentication";
import OurGoals from "./pages/OurGoals";
import Welcome from "./pages/Welcome";
import { useSelector } from "react-redux";
import Bikes from "./pages/Bikes";
import ContactUs from "./pages/ContactUs";
import Dragon from "./components/AllBikes/BikesConfig/Dragon";
import BikesConfigPage from "./pages/BikesConfigPage";
import Cart from "./components/Cart/Cart";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  console.log(showCart);

  return (
    <Layout>
      <Switch>
        {!isLoggedIn && (
          <Route path="/auth">
            <Authentication />
          </Route>
        )}
        <Route path="/welcome">
          <Welcome />
        </Route>

        {showCart && <Cart />}

        <Route path="/goals">
          <OurGoals />
        </Route>

        <Route path="/bikes" exact>
          {isLoggedIn && <Bikes />}
          {!isLoggedIn && <Redirect to="/not-auth" />}
        </Route>
        <Route path="/bikes/:bikeId">
          <BikesConfigPage />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
