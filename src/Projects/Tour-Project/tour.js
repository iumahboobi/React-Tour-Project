import React from "react";
import { data } from "./tour_data"; // when not using default
import { Card } from "./card";

const TourProject = () => {
  const [places, setPlaces] = React.useState(data);

  const remItem = (id) => {
    const item = places.filter((place) => place.id !== id);
    setPlaces(item);
  };

  return (
    <>
      <div className="main-title">
        <h1>Our Tours</h1>
        <div className="underline"></div>
      </div>

      {places.map((place) => {
        return <Card {...place} key={place.id} remItem={remItem} />;
      })}
    </>
  );
};
export default TourProject;
/**
<div className="card">
        <div>
          <img src="https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg" />
        </div>

        <div className="info">
          <div className="title-price">
            <h3>Best Of Paris In 7 Days Tour</h3>
            <span className="price">$2,1986</span>
          </div>
          <div>
            <article>
              Starting in the colorful port city of Gdańsk, you'll escape the
              crowds and embrace the understated elegance of
              ready-for-prime-time Poland for 10 days. With an expert Rick
              Steves guide at your side, you'll experience mighty Malbork
              castle, <span>...</span>
              <button className="show-btn"> Show More</button> the cobbly-cute
              village of Toruń, Poland's contemporary capital of Warsaw, the
              spiritual Jasna Góra Monastery, and charming Kraków — Poland's
              finest city. In this land of surprises — so trendy and hip, yet
              steeped in history — there's so much to discover. Join us for the
              Best of Poland in 10 Days!
              <button className="show-btn"> Show less </button>
            </article>
          </div>
          <div className="button">
            <button className="btn">Not Interested</button>
          </div>
        </div>
      </div>
 */
