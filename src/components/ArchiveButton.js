import React from "react";

function ArchiveButton({ archived, onClick }) {
  return (
    <button className="warning" onClick={onClick}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

export default ArchiveButton;
