import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Portfolio } from './layout/sections/portfolio/Portfolio';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Slogans } from './layout/sections/slogans/Slogans';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';



function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Portfolio />
            <Testimony />
            <Slogans />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;