import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
}from "react-router-dom";
import "./App.css"
import Despre from "./Despre.jsx"
import Oferte from "./Oferte.jsx"
import Elevi from "./Elevi.jsx"
import Parinti from "./Parinti.jsx"
import Documente from "./Documente.jsx"
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
            <Link className='link' to="/despre">Despre</Link>
            <Link className='link' to="/oferte">Oferte Educationale</Link>
            <Link className='link' to="/elevi">Elevi</Link>
            <Link className='link' to="/parinti">Parinti</Link>
            <Link className='link' to="/documente">Documente</Link>
            <Link className='link' to="/galerie">Galerie</Link>
          
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/despre' element={<Despre/>}/>
        <Route path='/oferte' element={<Oferte/>}/>
        <Route path='/elevi' element={<Elevi/>}/>
        <Route path='/parinti' element={<Parinti/>}/>
        <Route path='/documente' element={<Documente/>}/>
        <Route path='/galerie' element={<Galerie/>}/>
        
      </Routes>
      <Footer/>
    </Router>
    
  );
};

export default App