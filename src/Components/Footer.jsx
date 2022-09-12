import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div id="contact">
      <div className={styles.footermain}>
        <div className={styles.subfooter}>
          <h3 className={styles.footerhead}>Get in touch</h3>
          <div className={styles.underlinefooter}></div>
          <h1 className={styles.footername}>Narayan Chatalwar</h1>
          <br />
          <div className={styles.footericonsection}>
            <div>
              <a
                href="https://www.linkedin.com/in/narayan-chatalwar-09905121a"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin  socialicon"></i>
                <p>LinkedIN</p>
              </a>
            </div>

            <div>
              <a href="https://twitter.com/@narayan1054" target="_blank">
                <i class="fa-brands fa-twitter-square socialicon"></i>
                <p>Twitter</p>
              </a>
            </div>

            <div>
              <a href="https://github.com/Narayan-Chatalwar" target="_blank">
                <i class="fa-brands fa-github socialicon"></i>
                <p>GitHub</p>
              </a>
            </div>

            <div>
              <a href="https://www.narayanchatalwar@gmail.com" target="_blank">
                <i class="fa-solid fa-envelope socialicon"></i>
                <p>E-mail</p>
              </a>
            </div>

            <div>
              <a href="https://medium.com/@narayanchatalwar" target="_blank">
                <i class="fa-brands fa-medium socialicon"></i>
                <p>Medium</p>
              </a>
            </div>
          </div>
          <br />
          <h6 style={{ color: "white" }}>&#169; 2022 copyright all reserved</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;