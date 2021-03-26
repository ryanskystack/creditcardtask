import React, {useState}  from 'react';
import './App.css';
import './card.css';
// import validator from 'validator';
import H2 from '../component/H2';
import Form from '../component/Form';
import CardFront from '../component/CardFront';
import CardBack from '../component/CardBack';
import Footer from '../component/Footer';
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
    
  const nameChangeHandler = (event) => {
       console.log(event.target.value) ; // debug
       const validate = /^[a-zA-Z]*$/;
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
      // let isValid = validator.isCreditCard(event.target.value) ;
      const validate = /^[0-9]*$/;
       let isValid = validate.test(event.target.value);
        if (!event.target.value.length) 
        {
           setErrorMessage('Please input');
        } 
          else if(isValid === true)
        {
            setNum(event.target.value);
            setErrorMessage('');
            setValidNum(true);
            if (validName  && validNum  && validMonth  && validYear  && validCvn)
            {
              setBtnAvail(false);
            }
        }
          else
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
           setCvn(event.target.value);
           setErrorMessage('');
           setValidCvn(true);
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
    alert('The submition has processed');
    event.preventDefault();
  } ;



  return (

    <div className="App">
      <div>
        <H2 />
      </div>
      <div className='mw9 center '>
        <div className='flex justify-center cf '>
          <div className= 'flip-container fl w-30-ns pa2' id="flipperContainer">
            <div className='flipper'>
             <CardFront
              name = {name}
              num = {num}
              month = {month}
              year = {year}
              />  
             <CardBack
                cvn = {cvn} 
              />                      
            </div>
          </div>
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
      <Footer />

    </div>
    );
};



export default App;

