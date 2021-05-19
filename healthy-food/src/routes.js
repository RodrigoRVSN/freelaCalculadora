import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarHealthy from './components/Navbar';

import Home from './pages/Home';
import CadastroPage from './pages/Cadastro';


export default function Routes() {
    return (
        <Router>
            <NavbarHealthy />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cadastro' component={CadastroPage} />
            </Switch>
        </Router>
    );
}