"use client";

const DiscoverMoreButton = () => {
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

export default DiscoverMoreButton;