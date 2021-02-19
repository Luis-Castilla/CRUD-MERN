import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import CreateClient from './pages/CreateClient/CreateClient'
import UpdateClient from './pages/Updateclient/UpdateClient'

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={CreateClient} />
        <Route exact path="/client/edit/:id" component={UpdateClient} />
      </Switch>
  )
}

export default App;
