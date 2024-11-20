import sprite from "../../images/icons.svg";

import css from './RegistrationPage.module.css'
export default function RegistrationPage () {
    return (
        <div className={css.containerRegistrationPage}>
<div className={css.catBackground}>

</div><div className={css.registrationContainer}>
   <div>
   <p className={css.titleLogIn}>Log in</p>
<p className={css.paragraphLogIn}>Welcome! Please enter your credentials to login to the platform:</p>

   </div>
   <div>
   <form className={css.formLogIn} action="">
   <input className={css.inputs}  type="text " placeholder='Name'/>

<input className={css.inputs}  type="email" placeholder='Email'/>

<input className={css.inputs} type="password " placeholder='Password '/>
<input className={css.inputs} type="password " placeholder='Confirm password '/>

<svg className={css.iconEyeOff} >
               <use xlinkHref={`${sprite}#${'icon-eye'}`}></use>
               </svg>
               
<svg className={css.iconEyeOffConfirm} >
               <use xlinkHref={`${sprite}#${'icon-eye'}`}></use>
               </svg>
<div className={css.btnDiv} >
<button className={css.btnForm} type='submit'>Log In</button>
<p className={css.questionForm}>Don’t have an account? <span className={css.spanForm}>Register</span>
</p>
</div>
</form>

   </div>
    </div>
</div>
    
    )
}