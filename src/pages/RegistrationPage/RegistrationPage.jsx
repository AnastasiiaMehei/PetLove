import { Link } from "react-router-dom";
import sprite from "../../images/icons.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import css from "./RegistrationPage.module.css";
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
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
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const result = await response.json();
      localStorage.setItem("token", result.token);
      navigate("/profile");
    } catch (error) {
      alert(error.message); // Відобразити помилку користувачеві
    }
  };
  return (
    <div className={css.containerRegistrationPage}>
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
              type="text "
              placeholder="Name"
              onSubmit={handleSubmit(onSubmit)}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}

            <input
              className={css.inputs}
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className={css.error}>{errors.email.message}</p>
            )}

            <input
              className={css.inputs}
              type="password "
              placeholder="Password "
              {...register("password")}
            />
            {errors.password && (
              <p className={css.error}>{errors.password.message}</p>
            )}

            <input
              className={css.inputs}
              type="password "
              placeholder="Confirm password "
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className={css.error}>{errors.confirmPassword.message}</p>
            )}

            <svg className={css.iconEyeOff}>
              <use xlinkHref={`${sprite}#${"icon-eye"}`}></use>
            </svg>

            <svg className={css.iconEyeOffConfirm}>
              <use xlinkHref={`${sprite}#${"icon-eye"}`}></use>
            </svg>
            <div className={css.btnDiv}>
              <button className={css.btnForm} type="submit">
              Registration              </button>
              <p className={css.questionForm}>
                Already have an account?{" "}
                <Link to="/login" className={css.spanForm}>
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
