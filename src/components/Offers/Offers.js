import React from "react";
import "./Offers.css";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div>
      <div className="offers-parent-div">
        <div className="welcome-parent-div">
          <div className="welcome-banner">
            <h2 className="welcome-heading">
              Welcome To Our Site <br />
              Please Scroll
            </h2>
          </div>
        </div>
        <h2 className="offers-heading">
          What we Offer for Growth <br />
          Yor Study
        </h2>
        <p className="offers-p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          nostrum voluptas explicabo cum dolore reiciendis corrupti impedit vero
          ipsam iusto esse sed repellat vel, excepturi et quod? Est qui vel
          placeat soluta facere autem eligendi et quibusdam perferendis repellat
          pariatur, sed eaque molestiae alias nulla numquam odit assumenda
          culpa. Veniam.
        </p>
      </div>
      <div className="auto">
        <div className="offers-cart-grid container">
          <div className="front-end">
            <h2>Front-End Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem sunt fugit omnis eligendi excepturi incidunt.
            </p>
            <Link>
              <button>Read more</button>
            </Link>
            <div className="blank"></div>
          </div>
          <div className="back-end">
            <h2>Back-End Development</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              laborum, repudiandae ipsa eaque est necessitatibus!
            </p>
            <Link>
              <button>Read more</button>
            </Link>
            <div className="blank"></div>
          </div>
          <div className="mern-stake">
            <h2>Mern-Stake Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              beatae vitae, exercitationem molestiae rem autem!
            </p>
            <Link>
              <button>Read more</button>
            </Link>
            <div className="blank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
