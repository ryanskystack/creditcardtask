import React  from 'react';
import './card.css';
import 'tachyons';



const CardBack = ({ cvn, issuer, bgColor }) => {
    return (
      <div className={`rccs__card--back fl .rccs--flipped ${bgColor }`}>
        
        <div className="rccs__card__background">
        </div>
        <div className="rccs__stripe">
        </div>
        <div className="rccs__signature">
        </div>
        <div className="rccs__cvc rccs--focused">
          {cvn}
        </div>
        <div className={`rccs__issuer issuer_back ${issuer}`
                       }        
        >
        </div>
      </div>  
    );
}
  
export default CardBack;

