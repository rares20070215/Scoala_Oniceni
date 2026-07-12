import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
}
from "react-router-dom";
import "./App.css"
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
    <div>
        <header>
        </header>
        
        <main className="main-body">
            <div className = 'body'>
                <h1>Prezentare</h1>
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
    <div id = "footer"></div>   
    </div>
  );
};

function App(){
  return(
    <Router>
      <nav className='navigare'>
            <Link className='link' to="/">Acasa</Link>

            <Dropdown title="Despre" noCaret className='link'>
              <Dropdown.Item><Link className='link' to="/istoric">Istoric</Link></Dropdown.Item>
              <Dropdown.Item><Link className='link' to="/structuri">Structuri</Link></Dropdown.Item>
              <Dropdown.Item><Link className='link' to="/cadre">Cadre Didactice</Link></Dropdown.Item>
              <Dropdown.Item><Link className='link' to="/CP">Consiliu Profesoral</Link></Dropdown.Item>
              <Dropdown.Item><Link className='link' to="/CA">Consiliu Administratie</Link></Dropdown.Item>
              <Dropdown.Item><Link className='link' to="/Materiala">Baza Materiala</Link></Dropdown.Item>
            </Dropdown>

          
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/istoric' element={<Istoric/>}/>
        <Route path='/structuri' element={<Structuri/>}/>
        <Route path='/cadre' element={<Cadre/>}/>
        <Route path='/CP' element={<CP/>}/>
        <Route path='/CA' element={<CA/>}/>
        <Route path='/Materiala' element={<Materiala/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App