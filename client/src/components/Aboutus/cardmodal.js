import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import Slidecard from "./Slidecard";
import "./cardmodal.css";

function BasicModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalboxStyle = {
    backgroundImage: `url(${props.img2})`,
  };

  return (
    <div>
      <div onClick={handleOpen}>
        <Slidecard img={props.img} title={props.title} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div style={modalboxStyle} className="modalbox">
          <div className="modal-transparent">
            <div className="mdes">
            <u><h2>{props.title}</h2></u>
            {props.mdes}
            </div>
            <div className="vertical-line"></div>
            <div className="mtext">
            <u><h2>{props.mtext1}</h2></u>
              {props.mtext}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default BasicModal;
