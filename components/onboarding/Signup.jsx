/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./styles/sign-up.module.scss";
import { useForm } from "react-hook-form";

import LeftFixes from "../design/LeftFixes";

const Signup = ({ setUiState }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const orgEmail = watch("orgEmail");

  // validation - mail
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  const checkEmailString = (str) => orgEmail?.includes(str);

  // form itself
  const onSubmit = (data) => {
    try {
      authSignIn();
    } catch (error) {
      console.log("error signing in", error);
      throw error;
    }
  };

  const authSignIn = async () => {
    try {
      setUiState("Success");
    } catch (error) {
      console.log("error signing in", error);
      throw error;
    }
  };

  useEffect(() => {
    const emailIsValid =
      //emailRegex.test(orgEmail) &&
      !checkEmailString("@gmail.com") &&
      !checkEmailString("@yahoo.com") &&
      !checkEmailString("@hotmail.com");
    if (orgEmail === "") {
      setIsValid(true);
      setMessage("");
    } else if (emailIsValid) {
      setIsValid(true);
      setMessage("");
    } else {
      setIsValid(false);
      setMessage(
        "Please enter your business email address. This form does not accept addresses from gmail.com"
      );
    }
  }, [orgEmail]);

  return (
    <div id={styles.onboard}>
      <LeftFixes />

      <div className={styles.wrap}>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img src="/ubisoft.svg" alt="Ubisoft Logo" />
          </div>
          <div className={styles.texts}>
            <h3>Signup</h3>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              id={styles.inputContainer}
              className={errors.orgURL ? "error" : "message"}
            >
              <div className={styles.input_content}>
                <label>Organization Website URL</label>
                <input
                  type="text"
                  name="org-url"
                  placeholder="Organization Website URL"
                  autoComplete="organization-url"
                  {...register("orgURL", { required: true })}
                />
              </div>
            </div>
            <small className="err-display">
              {errors.orgURL && "This field is required"}
            </small>
            <div
              id={styles.inputContainer}
              className={errors.orgEmail || !isValid ? "error" : "message"}
            >
              <div className={styles.input_content}>
                <label>Work Email</label>
                <input
                  type="email"
                  name="org-email"
                  placeholder="Work Email"
                  autoComplete="organization-email"
                  {...register("orgEmail", { required: true })}
                />
              </div>
            </div>
            <small className="err-display">
              {(errors.orgEmail && "Email Field is required") || message}
            </small>
            <div
              id={styles.inputContainer}
              className={errors.name ? "error" : "message"}
            >
              <div className={styles.input_content}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  {...register("name", { required: true })}
                />
              </div>
            </div>
            <small className="err-display">
              {errors.name && "This field is required"}
            </small>
            <div
              id={styles.inputContainer}
              className={errors.referral ? "error" : "message"}
            >
              <div className={styles.input_content}>
                <label>How did you hear about us?</label>
                <select
                  type="text"
                  name="referral"
                  {...register("referral", { required: true })}
                >
                  <option disabled select>
                    How did you hear about us?
                  </option>
                  <option>Linkedin</option>
                  <option>Google Ad</option>
                </select>
              </div>
            </div>
            <small className="err-display">
              {errors.orgURL && "This field is required"}
            </small>
            <div className={styles.terms}>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="agree"
                  {...register("checked", { required: true })}
                />
                <span
                  className={`${styles.checkmark} ${
                    errors.checked ? "error" : "message"
                  }`}
                ></span>
              </label>
              <small>
                Read and agree &nbsp;&nbsp;{" "}
                <a href="#0">Terms and Conditions.</a>
              </small>
            </div>
            <div className={styles.submit}>
              <button
                role="button"
                name="get started now"
                id="submit-btn"
                type="submit"
              >
                Get started now
              </button>
            </div>
            <div className={styles.option}>
              <small>
                Already have an account?&nbsp;<a href="#0">LogIn</a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
