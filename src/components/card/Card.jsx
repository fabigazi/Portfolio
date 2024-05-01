import * as React from "react";
import './card.css'


const Card = ({title, description, image, link}) => (
    <div className="column content-column">
      <div className="content-card">
        <div className="card-content">
          <img src={ image} className="card-image"/>
          <h2 className="card-title">{title}</h2>
          <p className="card-description">
            {description}
          </p>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e36bb1e6f5e6458674f601bae6cc6a40c7e2f4f740696060e39b8ce032a83ffa?apiKey=c18181df491445f49c3752cb0e8829d9&" alt="" className="card-icon" />
        </div>
      </div>
    </div>
  );

  export default Card