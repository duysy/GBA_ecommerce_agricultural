import React from 'react';
import {HomePage , Categories, Cart} from "./components/pages";
import Test from "./components/Test";
import { Route, Switch } from "react-router-dom";
import IpfsRouter from 'ipfs-react-router';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <div className="App">
      <IpfsRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Categories" exact component={Categories} />
          <Route path="/Cart" exact component={Cart} />
          <Route path="/Account" exact component={HomePage} />
        </Switch>
      </IpfsRouter>
    </div>
  );
}

export default App;
