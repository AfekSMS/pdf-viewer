import React from "react";
import ControlPanel from "./ControlPanel";

const PDFSave = ({ file }) => {
  const save = () => {};
  return (
    <i className="far fa-save clickable" onClick={save} title="download" />
  );
};

export default PDFSave;
