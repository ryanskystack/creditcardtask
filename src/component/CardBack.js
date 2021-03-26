import React  from 'react';
import '../containers/card.css';
import 'tachyons';



const CardBack = ({ cvn }) => {
    return (
      <div className="rccs__card--back fl .rccs--flipped">
        <div className="rccs__card__background">
        </div>
        <div className="rccs__stripe">
        </div>
        <div className="rccs__signature">
        </div>
        <div className="rccs__cvc rccs--focused">
          {cvn}
        </div>
      </div>  
    );
}
  
export default CardBack;

