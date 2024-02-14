import dog1 from "./dog1.png";
import dog2 from "./dog2.png";
import dog3 from "./dog3.png";
import "./App.css";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};
function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [firstClickOnNo, setFirstClickOnNo] = useState(false);
  const [yes, setYes] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    setFirstClickOnNo(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Coś poszło nie tak, maleńka...
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Spróbuj wcisnąć 'Tak'
          </Typography>
        </Box>
      </Modal>
      <div className="App">
        <div className="inside">
          {!firstClickOnNo ? (
            <img src={dog1} className="App-logo" alt="logo" />
          ) : !yes ? (
            <img src={dog2} className="App-logo" alt="logo" />
          ) : (
            <img src={dog3} className="App-logo" alt="logo" />
          )}
          <div className="buttons-with-text">
            {!yes ? (
              <span className="text">Czy zostaniesz moją walentynką?</span>
            ) : (
              <span className="text">
                Super!!!!!!!! Do zobaczenie niedługo :)))))
              </span>
            )}
            <div>
              {!yes && (
                <button className="yes" onClick={() => setYes(true)}>
                  Tak
                </button>
              )}
              {!firstClickOnNo && (
                <button className="no" onClick={openModal}>
                  Nie
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
