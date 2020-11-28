import React from 'react';
import { Route, Switch } from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import { Hompage, Account, Login, EditSellerInfo, Product ,Order,TestPages,ListProduct} from "./components/pages";
import Test from "./components/Test";

function App() {
  return (

    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route path="/" exact component={Hompage} />
          <Route path="/Order" exact component={Order} />
          <Route path="/Categories" exact component={Test} />
          <Route path="/Cart" exact component={Test} />
          <Route path="/Account" exact component={Account} />
          <Route path="/Login" exact component={Login} />
          <Route path="/EditSellerInfo" exact component={EditSellerInfo} />
          <Route path="/Product/:idProduct" exact component={Product} />
          <Route path="/ListProduct" exact component={ListProduct} />
          <Route path="/TestPage" exact component={TestPages} />

        </Switch>
      </IpfsRouter>
    </div>
  );
}

export default App;
