import React, {useState}  from 'react';
import './App.css';
import H2 from '../component/H2';
import Form from '../component/Form';
import CardFront from '../component/CardFront';
import CardBack from '../component/CardBack';
import 'tachyons';


const App = () => {

  const [name, setName] = useState("Your Name") ; 
  const [num, setNum] = useState("•••• •••• •••• ••••") ; 
  const [month, setMonth] = useState("••") ; 
  const [year, setYear] = useState("••") ; 
  const [cvn, setCvn] = useState("•••") ; 
  const [errorMessage, setErrorMessage] = useState('') 
  const [btnAvail, setBtnAvail] = useState(true) ; 
  const [validName, setValidName] = useState(false) ; 
  const [validNum, setValidNum] = useState(false) ; 
  const [validMonth, setValidMonth] = useState(false) ; 
  const [validYear, setValidYear] = useState(false) ; 
  const [validCvn, setValidCvn] = useState(false) ;
  const [issuer, setIssuer] = useState("none") ;
  const [bgColor, setBgColor] = useState("bgColor") ;  
  
    
  const nameChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       const validate = /^((?:[A-Za-z]+ ?){1,3})$/;
       let isValid = validate.test(event.target.value);
         if (isValid === true)
         {  
             setName(event.target.value);
             setErrorMessage('');
             setValidName(true);
             if (validName  && validNum  && validMonth  && validYear  && validCvn)
             {
               setBtnAvail(false);
             }
         }else
         {
             setErrorMessage('Enter valid Cardholder Name!');
             setBtnAvail(true);         }
  };

  const numChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      
      const validate = /^[0-9]*$/;
      const amexRegex = /^(?:3[47][0-9]{13})$/;
      const visaRegex = /^(?:4[0-9]{14})$/;
      const mastercardRegex = /^(?:5[1-5][0-9]{14})$/;
      const discoverRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
      const dinersClubRegex = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
      const jcbRegex = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
      const unionPayRegex = /^(?:6211[0-9]{12})$/;
      let amex = amexRegex.test(event.target.value);
      let visa = visaRegex.test(event.target.value); 
      let mastercard = mastercardRegex.test(event.target.value);
      let discover = discoverRegex.test(event.target.value);
      let dinersClub = dinersClubRegex.test(event.target.value);
      let jcb = jcbRegex.test(event.target.value);
      let unionPay = unionPayRegex.test(event.target.value);
      
      let isValid = validate.test(event.target.value);
        if (!event.target.value.length) 
        {
           setErrorMessage('Please input');
        } 
        else if(isValid === true)
        {           
          
            setErrorMessage('');
            setValidNum(true);

            if (amex) {                           
              setNum(event.target.value.toString().slice(0, 15));                          
              setIssuer("amex"); 
              setBgColor("amexBgColor");             
            }else if (visa) {
              setIssuer("visa");
              setBgColor("visaBgColor");                        
            }else if (mastercard) {
              setIssuer("mastercard");
              setBgColor("mastercardBgColor");   
            }else if (discover) {
              setIssuer("discover");
              setBgColor("discoverBgColor");   
              if (event.target.value.toString().startsWith("5")) {
                setNum(event.target.value.toString().slice(0, 14));
              }else{
                setNum(event.target.value.toString());
              }
            }else if (dinersClub) {
              setIssuer("dinersClub");
              setBgColor("dinersClubBgColor");   
              setNum(event.target.value.toString().slice(0, 13));
            }else if (jcb) {
              setIssuer("jcb");
              setBgColor("jcbBgColor");   
              if (event.target.value.toString().startsWith("2131")||
                  event.target.value.toString().startsWith("1800")) 
              {
               setNum(event.target.value.toString().slice(0, 4));
              }else {
                setNum(event.target.value.toString());
              }
            }else if (unionPay) {
              setIssuer("unionPay");
              setBgColor("unionPayBgColor");   
              setNum(event.target.value.toString());
            }
            if (validName  && validNum  && validMonth  && validYear  && validCvn)
            {
              setBtnAvail(false);
            };               
        }else
        {
            setErrorMessage('Enter valid CreditCard Number!'); 
        }
  }; 

  const monthChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setMonth(event.target.value) ;
      setValidMonth(true);
      if (validName  && validNum  && validMonth  && validYear  && validCvn)
      {
        setBtnAvail(false);
      }
  };

  const yearChangeHandler = (event) => {
      console.log(event.target.value) ; // debug
      setYear(event.target.value) ;
      setValidYear(true);
      if (validName  && validNum  && validMonth  && validYear  && validCvn)
      {
        setBtnAvail(false);
      }
  };

  const cvnChangeHanlder = (event) => {
       console.log(event.target.value) ; // debug
       
       const validate = /^[0-9]*$/;
       let isValid = validate.test(event.target.value);
       if(isValid === true)
       {  

           setErrorMessage('');
           setValidCvn(true);
           if (issuer=="mastercard" ||issuer == "visa" ) {
            setCvn(event.target.value.toString().slice(0, 3));
           }else {
            setCvn(event.target.value.toString());
           }
           if (validName  && validNum  && validMonth  && validYear  && validCvn )
           {
             setBtnAvail(false);
           }
       }
         else
       {
           setErrorMessage('Enter valid CVN!'); 
       }
  } ;

  const flipBack = () => {
    document.getElementById("flipperContainer").classList.add('flip');

  };

  const flipFront = () => {
    let cardBack = document.getElementById("flipperContainer");
    
    if (cardBack.classList.contains('flip')) 
    {
       cardBack.classList.remove('flip');
    };
  };
 


  const handleSubmit = (event) => {
    alert('The submission has processed');
    event.preventDefault();
  } ;



  return (
    <div >
      <div  >
        <H2 
        className="header"/>
      </div>
      <div            
        className="
        cards center
        flip-container 
        "
        id="flipperContainer"
      >
        <div className='flipper'>
          <CardFront
            name = {name}
            num = {num}
            month = {month}
            year = {year}
            issuer = {issuer}
            bgColor = {bgColor}
            />  
          <CardBack
              cvn = {cvn} 
              issuer = {issuer}
              bgColor = {bgColor}
            />
        </div> 
      </div>
      <div className="App center">
          <Form
            errorMessage = {errorMessage}
            handleSubmit = {handleSubmit} 
            flipFront = {flipFront} 
            flipBack = {flipBack} 
            nameChangeHandler = {nameChangeHandler}
            numChangeHandler = {numChangeHandler}
            monthChangeHandler = {monthChangeHandler}
            yearChangeHandler = {yearChangeHandler}
            cvnChangeHanlder = {cvnChangeHanlder}
            month = {month}
            year = {year}
            btnAvail = {btnAvail}
           />
      </div>
    </div>

    );
};



export default App;

