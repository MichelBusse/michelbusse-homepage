"use client";

const CTAButton = () => {
    return <button
    onClick={(_) => {
      document.getElementById('about')?.scrollIntoView({
        behavior: "smooth",
      });
    }}
  >
    Discover More
  </button>;
}

export default CTAButton;