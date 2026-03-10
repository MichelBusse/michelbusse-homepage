"use client";

type Props = {
  label: string;
};

const CTAButton = ({ label }: Props) => {
    return <button
    onClick={(_) => {
      document.getElementById('about')?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    {label}
  </button>;
}

export default CTAButton;
