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
  const [cvn, setCvn] = useState("••••") ; 
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
      
      const validate = /^[0-9]*$/;
      const amexRegex = /^(?:3[47][0-9]{13})$/;
      const visaRegex = /^(?:4[0-9]{14})$/;
      const mastercardRegex = /^(?:5[1-5][0-9]{14})$/;
      const discoverRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
      const dinersClubRegex = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
      const jcbRegex = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
      const unionPayRegex = /^(?:6211[0-9]{12})$/;
      let inp = event.target.value;
      let str = inp.toString();
      let strArr = [];
      function strToArr(strNumber,strLength){
         for (let i = 0; i < (strLength/4); i++)
        {
          strArr[i] = strNumber.substring(i*4, 4*(i+1));
        }        
        setNum(strArr.join(" ").trim()); 
      }
      let amex = amexRegex.test(event.target.value);
      let visa = visaRegex.test(event.target.value); 
      let mastercard = mastercardRegex.test(event.target.value);
      let discover = discoverRegex.test(event.target.value);
      let dinersClub = dinersClubRegex.test(event.target.value);
      let jcb = jcbRegex.test(event.target.value);
      let unionPay = unionPayRegex.test(event.target.value);
      
      let isValid = validate.test(event.target.value);
        if (!str.length) 
        {
           setErrorMessage('Please input');
        } 
        else if(isValid === true)
        {          
            setErrorMessage('');
            if (str.length > 4) {
              if (amex || jcb || (discover && str.startsWith("5") ===true)) 
              {
                if (str.length > 15) 
                {
                  strToArr(str.slice(0, 15), str.length);
                }else 
                {
                  strToArr(str,str.length);
                }                
              }else if (dinersClub)
              {
                if (str.length > 14)
                {
                  strToArr(str.slice(0, 14),str.length);
                }else {
                  strToArr(str,str.length);
                } 

              }else {
                strToArr(str,str.length);
              }
            }else {
              setNum(str);
            }

            if (amex) { 
              if (num.length >15) {
                // strToArr(str.slice(0, 15),str.length);
                strToArr(str.slice(0, 15));
                console.log(str);
              }
              

              setIssuer("amex"); 
              setBgColor("amexBgColor");
              setValidNum(true);             
            }else if (visa) {
              strToArr(event.target.value.toString(),event.target.value.toString().length);
              setIssuer("visa");
              setBgColor("visaBgColor"); 
              setCvn("•••") ;  
              setValidNum(true);                          
            }else if (mastercard) {
              strToArr(event.target.value.toString(),event.target.value.toString().length);
              setIssuer("mastercard");
              setBgColor("mastercardBgColor"); 
              setCvn("•••") ; 
              setValidNum(true);            
            }else if (discover) {
              setIssuer("discover");
              setBgColor("discoverBgColor");   
              if (event.target.value.toString().startsWith("5")) {
                strToArr(event.target.value.toString().slice(0, 14),event.target.value.toString().length);
              }else{
                strToArr(event.target.value.toString(),event.target.value.toString().length);
              }
              setIssuer("discover");
              setBgColor("discoverBgColor");  
              setValidNum(true);     
            }else if (dinersClub) {
              strToArr(event.target.value.toString().slice(0, 15),event.target.value.toString().length);  
              setIssuer("dinersClub");
              setBgColor("dinersClubBgColor"); 
              setValidNum(true);    
            }else if (jcb) {
              if (event.target.value.toString().startsWith("2131")||
                  event.target.value.toString().startsWith("1800")) 
              {
                strToArr(event.target.value.toString().slice(0, 16),event.target.value.toString().length);  
              }else {
                strToArr(event.target.value.toString(),event.target.value.toString().length);  
              }
              setIssuer("jcb");
              setBgColor("jcbBgColor"); 
              setValidNum(true);    
            }else if (unionPay) {
              strToArr(event.target.value.toString(),event.target.value.toString().length); 
              setIssuer("unionPay");
              setBgColor("unionPayBgColor");   
              setValidNum(true);    
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

           if (issuer==="mastercard" ||issuer === "visa" ) {
            setCvn(event.target.value.toString().slice(0, 3));
            setValidCvn(true);
           }else {
            setCvn(event.target.value.toString());
            setValidCvn(true);
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

