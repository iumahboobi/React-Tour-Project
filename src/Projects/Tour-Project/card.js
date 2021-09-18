import React from "react";

export const Card = ({
  id,
  img,
  title,
  price,
  message1,
  message2,
  remItem,
}) => {
  const [showMore, setShowMore] = React.useState(false);

  //const message = showMore ? `${message1} ${message2}` : `${message1}...`;

  const btnMandL = showMore ? `Read Less < ` : "Read More >";
  const linkName = showMore ? ` ${message1}${message2}` : `${message1}`;
  return (
    <div className="card">
      <div>
        <img src={img} alt="" />
      </div>

      <div className="info">
        <div className="title-price">
          <h3>{title}</h3>
          <span className="price">${price}</span>
        </div>
        <div>
          <article>
            {linkName}

            <button
              id="show-btn"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              {btnMandL}
            </button>
          </article>
        </div>
        <div className="button">
          <button
            className="btn"
            onClick={() => {
              remItem(id);
            }}
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};
