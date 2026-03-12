"use client";

import styles from "./styles.module.scss";
import { FaLinkedin, FaGithub, FaStackOverflow } from "react-icons/fa";
import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { toast } from "react-toastify";
import TypeWriter from "@/components/TypeWriter";
import CircleSection from "@/components/CircleSection";

type Props = {
  content: {
    title: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    privacyLabel: string;
    submitLabel: string;
    invalidToast: string;
    successToast: string;
    errorToast: string;
  };
};

const Contact = ({ content }: Props) => {
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
      toast.error(content.invalidToast);
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
        toast.success(content.successToast);
        setFormState({
          email: "",
          text: "",
          privacy: false,
        });
      } else {
        toast.error(content.errorToast);
      }
    });
  };

  return (
    <CircleSection id="contact">
      <div className={styles.text}>
        <h2>
          <TypeWriter typewriterKey="contact">{content.title}</TypeWriter>
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
          placeholder={content.emailPlaceholder}
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
          placeholder={content.messagePlaceholder}
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
          {content.privacyLabel}
        </div>
        <button onClick={submit}>{content.submitLabel}</button>
      </div>
    </CircleSection>
  );
};

export default Contact;
