import React from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';

import ScrollToTop from './util/ScrollToTop';
import Homepage from './pages/Homepage';
import Schedule from './pages/Schedule';
import Course from './pages/Course';
import WhoWeAre from './pages/WhoWeAre';
import PositiveDiscipline from './pages/PositiveDiscipline';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contact from './pages/Contact';
import Transformations from './pages/Transformations';

const Routes = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Switch>
            <Route exact path="/" component={ Homepage } />
            <Route exact path="/quem-somos" component={ WhoWeAre } />
            <Route exact path="/disciplina-positiva" component={ PositiveDiscipline } />
            <Route exact path="/transformacoes-positive" component={ Transformations } />
            <Route exact path="/agenda" component={ Schedule } />
            <Route exact path="/agenda/:id/:title" component={ Course } />
            <Route exact path="/blog" component={ Blog } />
            <Route exact path="/blog/:id/:title" component={ Post } />
            <Route exact path="/contato" component={ Contact } />
        </Switch>
    </BrowserRouter>
);

export default Routes;