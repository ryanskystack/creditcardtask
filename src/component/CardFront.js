import React  from 'react';
import './card.css';
import 'tachyons';



const CardFront = ({ name, num, month, year, issuer, bgColor }) => {
 
    return (
      <div className={`rccs__card--front fl .rccs--flipped ${bgColor }`} 
      >
        <div className="rccs__card__background" >
        </div>
        <div className="rccs__chip">
        </div>
        <div className={`rccs__issuer ${issuer}`
                       }        
        >
        </div>
        <div className="rccs__chip">
        </div>        
        <div className="rccs__number rccs--focused">
          <p>{num}</p>   
        </div>
        <div className="rccs__expiry__valid">
          Expire Date
        </div>
        <div className="rccs__expiry__value rccs--focused">
          <p>{month}/{year}</p>  
        </div>
        <div className="rccs__name rccs--focused">
          <p>{name}</p>
        </div>
      </div> 
    );
  }
  
  export default CardFront;