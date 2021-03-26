import React from 'react';
// import validator from 'validator';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'tachyons';



const Form = ({errorMessage, handleSubmit, flipFront, flipBack, 
               nameChangeHandler, numChangeHandler,
               month, monthChangeHandler, year, yearChangeHandler,
               cvnChangeHanlder, btnAvail 
              }) => {
// const Form = () => {

//      const [name, setName] = useState("Your Name") ; 
//      const [num, setNum] = useState("•••• •••• •••• ••••") ; 
//      const [month, setMonth] = useState("••") ; 
//      const [year, setYear] = useState("••") ; 
//      const [cvn, setCvn] = useState("•••") ; 
//      const [errorMessage, setErrorMessage] = useState('') 
//      const [btnAvail, setBtnAvail] = useState(true) ; 
//      const [validName, setValidName] = useState(false) ; 
//      const [validNum, setValidNum] = useState(false) ; 
//      const [validMonth, setValidMonth] = useState(false) ; 
//      const [validYear, setValidYear] = useState(false) ; 
//      const [validCvn, setValidCvn] = useState(false) ; 
    
//      const nameChangeHandler = (event) => {
//           console.log(event.target.value) ; // debug
//           const validate = /^[a-zA-Z]*$/;
//           let isValid = validate.test(event.target.value);
//             if (isValid === true)
//             {  
//                 setName(event.target.value);
//                 setErrorMessage('');
//                 setValidName(true);
//                 if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
//                 {
//                   setBtnAvail(false);
//                 }
//             }else
//             {
//                 setErrorMessage('Enter valid Cardholder Name!');
//                 setBtnAvail(true);         }
//      };
  
//      const numChangeHandler = (event) => {
//          console.log(event.target.value) ; // debug
//          // let isValid = validator.isCreditCard(event.target.value) ;
//          const validate = /^[0-9]*$/;
//           let isValid = validate.test(event.target.value);
//            if (!event.target.value.length) 
//            {
//               setErrorMessage('Please input');
//            } 
//              else if(isValid === true)
//            {
//                setNum(event.target.value);
//                setErrorMessage('');
//                setValidNum(true);
//                if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
//                {
//                  setBtnAvail(false);
//                }
//            }
//              else
//            {
//                setErrorMessage('Enter valid CreditCard Number!'); 
//            }
//      }; 
  
//      const monthChangeHandler = (event) => {
//          console.log(event.target.value) ; // debug
//          setMonth(event.target.value) ;
//          setValidMonth(true);
//          if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
//          {
//            setBtnAvail(false);
//          }
//      };
  
//      const yearChangeHandler = (event) => {
//          console.log(event.target.value) ; // debug
//          setYear(event.target.value) ;
//          setValidYear(true);
//          if ({validName} ===true && {validNum} ===true && {validMonth} ===true && {validYear} ===true && {validCvn} ===true)
//          {
//            setBtnAvail(false);
//          }
//      };
  
//      const cvnChangeHanlder = (event) => {
//           console.log(event.target.value) ; // debug
       
//           const validate = /^[0-9]*$/;
//           let isValid = validate.test(event.target.value);
//           if(isValid === true)
//           {
//               setCvn(event.target.value);
//               setErrorMessage('');
//               setValidCvn(true);
//               if ({validName}  && {validNum}  && {validMonth}  && {validYear}  && {validCvn} )
//               {
//                 setBtnAvail(false);
//               }
//           }
//             else
//           {
//               setErrorMessage('Enter valid CVN!'); 
//           }
//      } ;
  
//      const flipBack = () => {
//        document.getElementById("flipperContainer").classList.add('flip');
  
//      };
  
//      const flipFront = () => {
//        let cardBack = document.getElementById("flipperContainer");
    
//        if (cardBack.classList.contains('flip')) 
//        {
//           cardBack.classList.remove('flip');
//        };
//      };
   
  
  
//      const handleSubmit = (event) => {
//        alert('The submition has processed');
//        event.preventDefault();
//      } ;

    return (
        <div className='fr  w-70-ns '>
            <div className='tc center  pa4 ma2 bw2 '>
                <p className='red'>
                    {errorMessage}
                </p>
                <form onSubmit={handleSubmit} >
                    <div className='pa2'>
                        <label >Required Cardholder Name:</label><br/>
                        <input 
                            type="text" 
                            className='ma3'
                            name="cardholderName" 
                            placeholder="Cardholder Name"
                            onClick={flipFront} 
                            onChange={nameChangeHandler}
                            maxLength='16' 
                            minLength='16' 
                            required
                        />
                    </div>
                    <div className='pa2 '>
                        <label>Required Credit Card Number:</label><br/>
                        <input 
                            type="text" 
                            className='ma3'
                            name="creditCardNumber" 
                            placeholder="No More Than 16 Digit Number" 
                            maxLength='16' 
                            minLength='16' 
                            required
                            onClick={flipFront}
                            onChange={numChangeHandler}
                        />

                    </div>
                    <div className='flex justify-center pa4'>
                        <label className='ma3'>Expire Date:  </label><br/>
                        <FormControl variant="outlined" >
                            <InputLabel>Month</InputLabel>
                            <Select
                            name="expiryDateMonth" 
                            value={month}
                            onClick={flipFront} 
                            onChange={monthChangeHandler}
                            label="Expiry Month"
                            >
                              <MenuItem value={'01'}>01</MenuItem>
                              <MenuItem value={'02'}>02</MenuItem>
                              <MenuItem value={'03'}>03</MenuItem>
                              <MenuItem value={'04'}>04</MenuItem>
                              <MenuItem value={'05'}>05</MenuItem>
                              <MenuItem value={'06'}>06</MenuItem>
                              <MenuItem value={'07'}>07</MenuItem>
                              <MenuItem value={'08'}>08</MenuItem>
                              <MenuItem value={'09'}>09</MenuItem>
                              <MenuItem value={'10'}>10</MenuItem>
                              <MenuItem value={'11'}>11</MenuItem>
                              <MenuItem value={'12'}>12</MenuItem>
                            </Select>
                        </FormControl>
                        <div></div>   
                        <FormControl variant="outlined">
                            <InputLabel>Year</InputLabel>
                            <Select 
                            name="expiryYear" 
                            value={year}
                            onClick={flipFront} 
                            onChange={yearChangeHandler}
                            label="Expiry Year"
                            >
                            <MenuItem value={'21'}>21</MenuItem>
                            <MenuItem value={'22'}>22</MenuItem>
                            <MenuItem value={'23'}>23</MenuItem>
                            <MenuItem value={'24'}>24</MenuItem>
                            <MenuItem value={'25'}>25</MenuItem>
                            <MenuItem value={'26'}>26</MenuItem>
                            <MenuItem value={'27'}>27</MenuItem>
                            <MenuItem value={'28'}>28</MenuItem>
                            <MenuItem value={'29'}>29</MenuItem>
                            <MenuItem value={'30'}>30</MenuItem>
                            </Select>
                        </FormControl>   
                    </div>
                    <div className='pa3'>
                        <label>Required CVN, please flip the Credit Card to check:</label><br/>
                        <input 
                            type="text"
                            className='ma3'
                            name="cvn"  
                            placeholder="3 Digit Number" 
                            maxLength='3' 
                            minLength='3' 
                            required
                            onClick={flipBack}
                            onChange={cvnChangeHanlder}
                        />      
                    </div>  
                    <button 
                    className='f6 link br-pill ph3 pa3 pv2 mb2 dib  ' 
                    type='submit' 
                    disabled={btnAvail}
                    >Make payment
                    </button>
                </form>
            </div>
        </div>
      );

};


export default Form;