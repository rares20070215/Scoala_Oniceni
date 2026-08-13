import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
}
from "react-router-dom";
import "./App.css"
import "./parts.jsx"
import {Dropdown} from "rsuite"
   import 'rsuite/dist/rsuite.min.css';
import { Istoric, Structuri, Cadre, CP, CA, Materiala } from "./Despre.jsx"
import {Clase, Curriculum, Optionale, Extracurriculare, ProecteParteneriate} from "./Oferte.jsx"
import {Orar, Regulament, Burse, Transport} from "./Elevi.jsx"
import {Inscrieri, Catalog, Documente, Intrebari} from "./Parinti.jsx"
import {Regulamente, PDI, Plan, Proceduri, Hotarari, Formulare} from "./Documente.jsx"
import Galerie from "./Galerie.jsx"
import Footer from "./parts.jsx"

const Home=() =>{
  const navigate = useNavigate();
  return (    
    <div className="corp">
        <header>
        </header>
        
        <main className="main-body">
            <div className = 'body'>
                <h1 align='center'>Prezentare</h1>
                <h3>Scoala Gimnaziala Oniceni are in componenta sa urmatoarele formatiuni de studiu:
                <ul>
                    <li>GPN ”Costică Nitu” Oniceni</li>
                    <li>GPN Manolea</li>
                    <li>GPN Boura</li>
                    <li>GPN Țolești</li>
                    <li>Școala Primară Forăști</li>
                    <li>Școala Primară Boura</li>
                    <li>Școala Gimnazială Manolea</li>
                </ul>
                </h3>
                <h4>The sun had not yet risen. The sea was indistinguishable from
                the sky, except that the sea was slightly creased as if a cloth
                had wrinkles in it. Gradually as the sky whitened a dark line lay
                on the horizon dividing the sea from the sky and the grey cloth
                became barred with thick strokes moving, one after another,
                beneath the surface, following each other, pursuing each oth-
                er, perpetually.<br/>As they neared the shore each bar rose, heaped itself, broke
                and swept a thin veil of white water across the sand. The wave
                paused, and then drew out again, sighing like a sleeper whose
                breath comes and goes unconsciously. Gradually the dark bar
                on the horizon became clear as if the sediment in an old wine-
                bottle had sunk and left the glass green. Behind it, too, the sky
                cleared as if the white sediment there had sunk, or as if the
                arm of a woman couched beneath the horizon had raised a
                lamp and flat bars of white, green and yellow spread across the
                sky like the blades of a fan. Then she raised her lamp higher
                and the air seemed to become fibrous and to tear away from
                the green surface flickering and flaming in red and yellow
                fibres like the smoky fire that roars from a bonfire. Gradually
                the fibres of the burning bonfire were fused into one haze, one
                incandescence which lifted the weight of the woollen grey sky
                on top of it and turned it to a million atoms of soft blue. The
                surface of the sea slowly became transparent and lay rippling
                and sparkling until the dark stripes were almost rubbed out.
                Slowly the arm that held the lamp raised it higher and then
                higher until a broad flame became visible; an arc of fire burnt
                on the rim of the horizon, and all round it the sea blazed gold.<br/>
                The light struck upon the trees in the garden, making one
                leaf transparent and then another. One bird chirped high up;
                there was a pause; another chirped lower down. The sun
                sharpened the walls of the house, and rested like the tip of a
                fan upon a white blind and made a blue finger-print of shadow
                under the leaf by the bedroom window. The blind stirred
                slightly, but all within was dim and unsubstantial. The birds
                sang their blank melody outside.</h4>
            </div>
        </main>
    </div>
  );
};

function App(){
  return(
    <Router>
      <div className="content-wrapper">
      <nav className='navigare'>
            <a className="nav-dropdown nav-btn" to="/">Scoala Oniceni</a>
            <Dropdown title="Despre" noCaret className='nav-dropdown'>
              <Dropdown.Item as={Link} to="/istoric">Istoric</Dropdown.Item>
              <Dropdown.Item as={Link} to="/structuri">Structuri</Dropdown.Item>
              <Dropdown.Item as={Link} to="/cadre">Cadre Didactice</Dropdown.Item>
              <Dropdown.Item as={Link} to="/CP">Consiliu Profesoral</Dropdown.Item>
              <Dropdown.Item as={Link} to="/CA">Consiliu Administratie</Dropdown.Item>
              <Dropdown.Item as={Link} to="/Materiala">Baza Materiala</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Oferta Educationala" noCaret className="nav-dropdown">
              <Dropdown.Item as={Link} to="/clase">CP + Clase</Dropdown.Item>
              <Dropdown.Item as={Link} to="/curriculum">Curriculum</Dropdown.Item>
              <Dropdown.Item as={Link} to="/optionale">Programe Optionale</Dropdown.Item>
              <Dropdown.Item as={Link} to="/extracurriculare">Activitati Extracurriculare</Dropdown.Item>
              <Dropdown.Item as={Link} to="/proiecteparteneri">Proiecte si Parteneriate</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Elevi" noCaret className="nav-dropdown">
              <Dropdown.Item as={Link} to="/orar">Orar</Dropdown.Item>
              <Dropdown.Item as={Link} to="/regulament">Regulament</Dropdown.Item>
              <Dropdown.Item as={Link} to="/burse">Burse</Dropdown.Item>
              <Dropdown.Item as={Link} to="/transport">Transport Scolar</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Parinti" noCaret className="nav-dropdown">
              <Dropdown.Item as={Link} to="/inscrieri">Inscrieri</Dropdown.Item>
              <Dropdown.Item as={Link} to="/catalog">Catalog Electronic</Dropdown.Item>
              <Dropdown.Item as={Link} to="/documente">Documente</Dropdown.Item>
              <Dropdown.Item as={Link} to="/intrebari">Intrebari Frecvente</Dropdown.Item>
            </Dropdown>
            <Dropdown title="Documente" noCaret className="nav-dropdown">
              <Dropdown.Item as={Link} to="/regulamente">Regulamente</Dropdown.Item>
              <Dropdown.Item as={Link} to="/pdi">PDI</Dropdown.Item>
              <Dropdown.Item as={Link} to="/plan">Plan Managerial</Dropdown.Item>
              <Dropdown.Item as={Link} to="/proceduri">Proceduri</Dropdown.Item>
              <Dropdown.Item as={Link} to="/formulare">Formulare</Dropdown.Item>
              <Dropdown.Item as={Link} to="/hotarari">Hotarari CA</Dropdown.Item>
            </Dropdown>
            <a className='nav-dropdown nav-btn' to="/galerie">Galerie</a>
          
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/istoric' element={<Istoric/>}/>
        <Route path='/structuri' element={<Structuri/>}/>
        <Route path='/cadre' element={<Cadre/>}/>
        <Route path='/CP' element={<CP/>}/>
        <Route path='/CA' element={<CA/>}/>
        <Route path='/Materiala' element={<Materiala/>}/>
        <Route path='/clase' element={<Clase/>}/>
        <Route path='/curriculum' element={<Curriculum/>}/>
        <Route path='/extracurriculare' element={<Extracurriculare/>}/>
        <Route path='/optionale' element={<Optionale/>}/>
        <Route path='/proiecteparteneri' element={<ProecteParteneriate/>}/>
        <Route path='/regulamente' element={<Regulamente/>}/>
        <Route path='/orar' element={<Orar/>}/>
        <Route path='/burse' element={<Burse/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/inscrieri' element={<Inscrieri/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/regulament' element={<Regulament/>}/>
        <Route path='/intrebari' element={<Intrebari/>}/>
        <Route path='/documente' element={<Documente/>}/>
        <Route path='/pdi' element={<PDI/>}/>
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/proceduri' element={<Proceduri/>}/>
        <Route path='/hotarari' element={<Hotarari/>}/>
        <Route path='/formulare' element={<Formulare/>}/>
        <Route path='/galerie' element={<Galerie/>}/>
      </Routes>

    <hr /> 
      <Footer/>
      </div>
    </Router>
    
  );
};

export default App