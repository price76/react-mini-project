import "./form.scss";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";


function FormValidation() {
    const [fristName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fristNameError, setFirstNameError] = useState(true);
    const [firstAndLastSame, setFirstAndLastSame] = useState(true);


    const fristNameValidation = (e) => {
        setFirstName(e.target.value);
    }
    const lastNameValidation = (e) => {
        setLastName(e.target.value);
    }

    useEffect(() => {
        if (fristName.trim().length >= 3 && lastName.trim().length >= 3) {
            setFirstNameError(false);

        } else {
            setFirstNameError(true);
        }
        if (fristName === lastName) {
            setFirstAndLastSame(false);
        } else {
            setFirstAndLastSame(true);

        }
    }, [fristName, lastName])



    return (
        <>
            <form className="form-validation">
                <legend>Form Validation</legend>
                <div className="input-text two-col">
                    <ul>
                        <li>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" onChange={fristNameValidation} id="firstName" className="form-input" />
                        </li>
                        <li>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" onChange={lastNameValidation} id="lastName" className="form-input" />
                        </li>
                    </ul>
                </div>

                <div className="two-col">
                    <ul>

                        <li className="condition">
                            <ul>
                                <li className={fristNameError ? "hasError" : "isOk"}>3 Letter at Least </li>
                                <li className={firstAndLastSame ? "isOk" : "hasError"}>not same with last name  </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div className="input-email two-col">
                    <ul>
                        <li>
                            <label htmlFor="normalEmail">Normal Email</label>
                            <input type="email" id="normalEmail" className="form-input" />
                        </li>
                        <li>
                            <label htmlFor="regEmail">Reg Email</label>
                            <input type="email" id="regEmail" className="form-input" />
                        </li>
                    </ul>
                </div>
                <div className="input-password two-col">
                    <ul>
                        <li>
                            <label htmlFor="normalPassword">Normal password</label>
                            <input type="password" id="normalPassword" className="form-input" />
                        </li>
                        <li>
                            <label htmlFor="regPassword">Reg Password</label>
                            <input type="password" id="regPassword" className="form-input" />
                            <div className="toggle-password">
                                <span><FaEye /></span>
                                <span><FaEyeSlash /></span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="input-date two-col">
                    <ul>
                        <li>
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" className="form-input" />
                        </li>
                        <li>
                            result
                        </li>
                    </ul>
                </div>
                <div className="input-date-local two-col">
                    <ul>
                        <li>
                            <label htmlFor="dateLocal">Date Local</label>
                            <input type="datetime-local" id="dateLocal" className="form-input" />
                        </li>
                        <li>
                            result
                        </li>
                    </ul>
                </div>
                <div className="input-color two-col">
                    <ul>
                        <li>
                            <label htmlFor="normalColor">Normal Color</label>
                            <input type="color" id="normalColor" className="form-input" />
                        </li>
                        <li>
                            <label htmlFor="regColor">Reg Color</label>
                            <input type="color" id="regColor" className="form-input" />
                        </li>
                    </ul>
                </div>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </>
    );
}
export default FormValidation;