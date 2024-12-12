import { Link } from "react-router-dom";
import sprite from "../../images/icons.svg";

import css from './LoginPage.module.css'
export default function LoginPage () {
    return (
<div className={css.containerLoginPage}>
    <div className={css.dogBackground}>

    </div>
    <div className={css.registrationContainer}>
   <div>
   <p className={css.titleLogIn}>Log in</p>
<p className={css.paragraphLogIn}>Welcome! Please enter your credentials to login to the platform:</p>

   </div>
   <div>
   <form className={css.formLogIn} action="">
<input className={css.inputs}  type="email" placeholder='Email'/>

<input className={css.inputs} type="password " placeholder='Password '/>
<svg className={css.iconEyeOff} >
               <use xlinkHref={`${sprite}#${'icon-eye'}`}></use>
               </svg>
<div className={css.btnDiv} >
<button className={css.btnForm} type='submit'>Log In</button>
<p className={css.questionForm}>Don’t have an account? <Link to="/register" className={css.spanForm}>Register</Link>
</p>
</div>
</form>

   </div>
    </div>
</div>
    
    )
}