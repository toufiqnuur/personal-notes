import React from "react";
import { showFormattedDate } from "../utils";

function NoteItemBody({ title, createdAt, body }) {
  return (
    <div className="note__item-body">
      <h3>{title}</h3>
      <time dateTime={createdAt}>{showFormattedDate(createdAt)}</time>
      <p>{body}</p>
    </div>
  );
}

export default NoteItemBody;
