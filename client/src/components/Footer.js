import React from 'react'

function Footer() {
  return (
    <div className='ft'>
      <main id='ft-main'>
        <section id='ft-left-section'>
          <img id='s-logo' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fauto-repair-garage-logo-automotive-industry_160069-63.jpg%3Fw%3D2000&f=1&nofb=1&ipt=e559a84fd6d530597592c192608d8d1d8485320330acdea977fb362857f9f44d&ipo=images'/>
          <h3>Our adress :</h3>
          <h5>999, Av. Salaheddine El Ayoubi, Zrig Eddakhlania - Gabes</h5>
          <h3>Working Hours</h3>
          <table>
            <tbody>
              <tr><td>Monday - Friday :</td>&nbsp;<td>8:00 - 17:00</td></tr>
              <tr><td>Saturday</td>&nbsp;<td>8:00 - 14:00</td></tr>
              <tr><td>Sunday</td>&nbsp;<td>Weekly rest</td></tr>
            </tbody>
          </table>
          
        </section>

        <section id='gmap'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.3210146837872!2d10.106338969049444!3d33.8565695304821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12556e46fe700db5%3A0xc0f82b5d2418af51!2sETS%20EL-FEKILI%20PEUGEOT!5e0!3m2!1sfr!2stn!4v1739328846933!5m2!1sfr!2stn"
            width="500"
            height="400"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            >
          </iframe>
        </section>

        <section id='ft-right-section'>
          <h3>Contact us at :</h3>
        <table>
            <tbody>
              <tr><td><svg xmlns="http://www.w3.org/2000/svg" 
                width="16"
                height="16" 
                fill="currentColor" 
                class="bi bi-facebook" 
                viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
              </td>
              <td><a href="facebook.com">Facebook</a></td></tr>

              <tr><td><svg xmlns="http://www.w3.org/2000/svg" 
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
              </svg></td>
              <td><a href="instagram.com">Instagram</a></td></tr>

              <tr><td><svg xmlns="http://www.w3.org/2000/svg" 
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-tiktok"
                  viewBox="0 0 16 16">
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
              </svg></td>
              <td><a href="tiktok.com">Tik Tok</a></td></tr>

              <tr><td><svg xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-at"
                viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg></td>
            <td><a href='mailto:wassim.besghayer@outlook.com'>mail us</a></td></tr>

            <tr><td><svg xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-telephone" 
                viewBox="0 0 16 16">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
            </svg></td>
            <td><a href="tel:+216 90 123 456">Call us</a></td></tr>

            <tr><td><svg xmlns="http://www.w3.org/2000/svg"
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-phone" 
                viewBox="0 0 16 16">
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg></td>
            <td><a href="tel:+216 90 123 456">Call us</a></td></tr>
            </tbody>
          </table>
        </section>
      </main>
      {/* <hr>
      This web site is developed by Wassim BESGHAYER &nbsp; 
	    <a href="mailto:wassim.besghayer@outlook.com" target="_blank" title="my mail adress">feel free to contact me 😊</a>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="https://www.linkedin.com/in/wassim-besghayer/" target="_blank" title="my Linkedin profile">Contact me on LinkedIn</a>
</hr> */}
    </div>
  )
}

export default Footer