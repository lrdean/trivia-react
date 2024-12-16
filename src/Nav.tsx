import React from "react";

interface NavProps {
  onPrevious: () => void; // Function to handle "Previous" button click
  onNext: () => void; // Function to handle "Next" button click
  disablePrevious: boolean; // Disable "Previous" button if true
  disableNext: boolean; // Disable "Next" button if true
}

const Nav: React.FC<NavProps> = ({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "80%",
        maxWidth: "800px",
        marginTop: "20px",
      }}
    >
      <button
        className="btn btn-outline-primary"
        onClick={onPrevious}
        disabled={disablePrevious}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
      >
        Previous
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={onNext}
        disabled={disableNext}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Nav;
