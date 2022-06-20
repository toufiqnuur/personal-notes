import React from "react";

function DeleteButton({ onClick }) {
  return (
    <button className="danger" onClick={onClick}>
      Delete
    </button>
  );
}

export default DeleteButton;
