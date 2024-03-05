"use client";

import styles from "./styles.module.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { toast } from "react-toastify";
import TypeWriter from "@/components/TypeWriter";
import CircleSection from "@/components/CircleSection";

const Contact = () => {
  const [formState, setFormState] = useState({
    email: "",
    text: "",
    privacy: false,
  });

  const submit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (
      formState.email.trim() === "" ||
      formState.text.trim() === "" ||
      !formState.privacy
    ) {
      toast.error("Error! Please check your inputs.");
      return;
    }

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    }).then((res) => {
      if (res.status === 200) {
        toast.success("Sent successfully!");
        setFormState({
          email: "",
          text: "",
          privacy: false,
        });
      } else {
        toast.error("Error! Please send an email instead.");
      }
    });
  };

  return (
    <CircleSection id="contact">
      <div className={styles.text}>
        <h2>
          <TypeWriter typewriterKey="contact">Contact</TypeWriter>
        </h2>
        <hr />
        <div className={styles.info}>
          <span>
            <a href={"mailto:contact@michelbusse.dev"}>
              contact@michelbusse.dev
            </a>
          </span>
          <div className={styles.icons}>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/michel-busse"
            >
              <div className={styles.icon}>
                <FaLinkedin />
              </div>
            </Link>
            <div className={styles.spacer}></div>
            <Link target="_blank" href="https://github.com/MichelBusse">
              <div className={styles.icon}>
                <FaGithub />
              </div>
            </Link>
            <div className={styles.spacer}></div>
            <Link
              target="_blank"
              href={"https://stackoverflow.com/users/21434824/michel"}
            >
              <div className={styles.icon}>
                <FaStackOverflow />
              </div>
            </Link>
          </div>
        </div>
        <input
          type={"email"}
          placeholder="Your Email"
          required
          value={formState.email}
          onChange={(event) =>
            setFormState((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />
        <textarea
          placeholder="Your Message"
          required
          value={formState.text}
          onChange={(event) =>
            setFormState((prevState) => ({
              ...prevState,
              text: event.target.value,
            }))
          }
        />
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={formState.privacy}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                privacy: e.target.checked,
              }))
            }
          />
          I accept the privacy policy
        </div>
        <button onClick={submit}>Submit</button>
      </div>
    </CircleSection>
  );
};

export default Contact;
