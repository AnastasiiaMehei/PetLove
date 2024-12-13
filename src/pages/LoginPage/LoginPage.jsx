import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";import sprite from "../../images/icons.svg";
import { loginUser } from '../../service/apiService'; // припускаємо, що ця функція відправляє запит на бекенд
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './LoginPage.module.css'
const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email format")
      .required("Email is required"),
    password: yup
      .string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });
export default function LoginPage () {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data);
      localStorage.setItem("token", response.token);
      toast.success('Log in succssful!')

      navigate("/profile");
    } catch (error) {
      alert(error.message); // Відобразити помилку користувачеві
      toast.error(error.message);// Display error to the user

    }
  };

    return (
<div className={css.containerLoginPage}>
<ToastContainer />

    <div className={css.dogBackground}>

    </div>
    <div className={css.registrationContainer}>
   <div>
   <p className={css.titleLogIn}>Log in</p>
<p className={css.paragraphLogIn}>Welcome! Please enter your credentials to login to the platform:</p>

   </div>
   <div>
   <form className={css.formLogIn}  onSubmit={handleSubmit(onSubmit)}>
<input className={css.inputs}  type="email" placeholder='Email'{...register("email")}
            />
            {errors.email && <p className={css.error}>{errors.email.message}</p>}

<div className={css.divPassword}>
<input className={css.inputs} type="password " placeholder='Password ' {...register("password")}
            />
            {errors.password && <p className={css.error}>{errors.password.message}</p>}
<svg className={css.iconEyeOff} >
               <use xlinkHref={`${sprite}#${'icon-eye'}`}></use>
               </svg>
</div>
<div className={css.btnDiv} >
<button className={css.btnForm} type='submit'>Log In</button>
<p className={css.questionForm}>Don’t have an account? <Link to="/users/signup" className={css.spanForm}>Register</Link>
</p>
</div>
</form>

   </div>
    </div>
</div>
    
    )
}