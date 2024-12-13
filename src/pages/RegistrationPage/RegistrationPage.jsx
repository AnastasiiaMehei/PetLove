import { Link } from "react-router-dom";
import sprite from "../../images/icons.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { registerUser } from '../../service/apiService';
import css from "./RegistrationPage.module.css";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function RegistrationPage() {
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
      const { name, email, password } = data;
      const response = await registerUser({ name, email, password });
      localStorage.setItem("token", response.token);
      toast.success('Registration succssful!')
      navigate("/profile");
    } catch (error) {
      alert(error.message); 
      toast.error(error.message);// Display error to the user
    }
  };

  return (
    <div className={css.containerRegistrationPage}>
            <ToastContainer />

      <div className={css.catBackground}></div>
      <div className={css.registrationContainer}>
        <div>
          <p className={css.titleLogIn}>Registration</p>
          <p className={css.paragraphLogIn}>
            Thank you for your interest in our platform.
          </p>
        </div>
        <div>
          <form className={css.formLogIn} onSubmit={handleSubmit(onSubmit)}>
            <input
              className={css.inputs}
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}

            <input
              className={css.inputs}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <p className={css.error}>{errors.email.message}</p>}

            <div className={css.divInputPassword1}>
              <input
                className={css.inputs}
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p className={css.error}>{errors.password.message}</p>}
              <svg className={css.iconEyeOff}>
                <use xlinkHref={`${sprite}#icon-eye`}></use>
              </svg>
            </div>

            <div className={css.divInputPassword1}>
              <input
                className={css.inputs}
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && <p className={css.error}>{errors.confirmPassword.message}</p>}
              <svg className={css.iconEyeOffConfirm}>
                <use xlinkHref={`${sprite}#icon-eye`}></use>
              </svg>
            </div>

            <button className={css.btnForm} type="submit">
              Registration
            </button>

            <div className={css.btnDiv}>
              <p className={css.questionForm}>
                Already have an account?{" "}
                <Link to="/users/signin" className={css.spanForm}>
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
