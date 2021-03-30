import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'tachyons';



const Form = ({errorMessage, handleSubmit, flipFront, flipBack, 
               nameChangeHandler, numChangeHandler,
               month, monthChangeHandler, year, yearChangeHandler,
               cvnChangeHanlder, btnAvail 
              }) => {


    return (
            <div >
                <p className='red'>
                    {errorMessage}
                </p>
                <form onSubmit={handleSubmit} >
                    <div className='db inputBox'>
                        <label>Card Number</label><br/>
                        <input 
                            type="text" 
                            name="creditCardNumber" 
                            placeholder="No More Than 16 Digit Number" 
                            maxLength='16' 
                            minLength='14' 
                            required
                            onClick={flipFront}
                            onChange={numChangeHandler}
                        />
                    </div>
                    <div className='db inputBox'>
                        <label >Card Name</label><br/>
                        <input 
                            type="text" 
                            name="cardholderName" 
                            placeholder="Cardholder Name"
                            onClick={flipFront} 
                            onChange={nameChangeHandler}
                            maxLength='16' 
                            minLength='16' 
                            required
                        />
                    </div>
                    <div className='flex inputBox '>
                        <div className='inputBox'>
                          <label >Expire Date </label><br/>
                        <div className='flex justify-between w-70 '>
                            <FormControl className='w-50 ' variant="outlined" >
                                <InputLabel htmlFor="outlined-month-native-simple">Month</InputLabel>
                                <Select                                
                                className ="mt1 mr3"
                                native
                                value={month}
                                onClick={flipFront} 
                                onChange={monthChangeHandler}
                                label="Expiry Month"
                                name="expiryMonth"
                                id="outlined-month-native-simple"
                                >
                                <option aria-label="None" value="" />
                                <option value={'01'}>01</option>
                                <option value={'02'}>02</option>
                                <option value={'03'}>03</option>
                                <option value={'04'}>04</option>
                                <option value={'05'}>05</option>
                                <option value={'06'}>06</option>
                                <option value={'07'}>07</option>
                                <option value={'08'}>08</option>
                                <option value={'09'}>09</option>
                                <option value={'10'}>10</option>
                                <option value={'11'}>11</option>
                                <option value={'12'}>12</option>
                                </Select>
                            </FormControl> 
                            <FormControl className='w-50 ' variant="outlined">
                                <InputLabel htmlFor="outlined-year-native-simple">Year</InputLabel>
                                <Select 
                                 className ="mt1 mr3"
                                 native
                                 value={year}
                                 onClick={flipFront} 
                                 onChange={yearChangeHandler}
                                 label="Expiry Year"
                                 name="expiryYear" 
                                 id="outlined-year-native-simple"                               
                                >
                                <option aria-label="None" value="" />
                                <option value={'21'}>21</option>
                                <option value={'22'}>22</option>
                                <option value={'23'}>23</option>
                                <option value={'24'}>24</option>
                                <option value={'25'}>25</option>
                                <option value={'26'}>26</option>
                                <option value={'27'}>27</option>
                                <option value={'28'}>28</option>
                                <option value={'29'}>29</option>
                                <option value={'30'}>30</option>
                                </Select>
                            </FormControl>   
                          </div>
                        </div>
                        <div className='db inputBox w-30'>
                            <label>CVN</label><br/>
                            <input 
                                type="text"
                                name="cvn"  
                                placeholder="3/4 DigitNumber" 
                                maxLength='4' 
                                minLength='3' 
                                required
                                onClick={flipBack}
                                onChange={cvnChangeHanlder}
                            />      
                        </div>                          
                    </div>
                    <div className = 'center'>
                        <button 
                            className='f6 link  ph3 pa1 pv2 mb2 ' 
                            type='submit' 
                            disabled={btnAvail}
                            >Make payment
                        </button>
                    </div>
                </form>
            </div>

      );

};


export default Form;