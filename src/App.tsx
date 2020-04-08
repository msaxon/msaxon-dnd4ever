import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/shared/Header';
import { Home } from './components/home/Home';
import { Random } from './components/random/Random';
import { Rules } from './components/rules/Rules';
import { About } from './components/about/About';
import { Monsters } from './components/monsters/Monsters';
import { Spells } from './components/spells/Spells';
import { Footer } from './components/shared/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/msaxon-dnd4ever/" component={Home} />
                <Route path="/random" component={Random} />
                <Route path="/rules" component={Rules} />
                <Route path="/monsters" component={Monsters} />
                <Route path="/spells" component={Spells} />
                <Route path="/about" component={About} />
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
