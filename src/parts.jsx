import React from 'react'
import "./parts.css"

const Footer = () => (
  <div>
    <footer className="footer">
        <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329.6754577429124!2d26.45914071467447!3d47.32345551042109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47353b3b5a2b904b%3A0xa3cf54cd7d4ff5c9!2sScoala!5e0!3m2!1sen!2sro!4v1783866977507!5m2!1sen!2sro"
          width="100%"
          height="100%%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div>
        <b>Contact:</b><br/>
        Str. Școlii, nr. 2<br/>
        Sat Oniceni, comuna Forăști, Suceava<br/>
        Nr. telefon: 0230536790<br/>
        Fax: 0230536790<br/>
        e-mail: <br/>
         <a href='mailto:scoalaoniceni@yahoo.com' className="mail">scoalaoniceni@yahoo.com</a><br/>
        <a href="mailto:scoalaoniceniforasti@gmail.com" className='mail'>scoalaoniceniforasti@gmail.com</a>
      </div>
    </footer>
  </div>
);

export default Footer;