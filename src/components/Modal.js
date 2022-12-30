import React from "react";
import styled from "styled-components";

const Modal = ({ openModal, setOpenModal, active }) => {
  return (
    <Wrapper>
      <div className="section container">
        <dialog className="modal" id="modal" open={openModal ? "open" : false}>
          <p>
            Ooops!! I have no <span className="language">{active}</span>
            {""} projects yet, coming soon.
          </p>
          <button
            className="btn hero-btn-1 close-modal"
            onClick={() => setOpenModal(false)}
          >
            Close
          </button>
        </dialog>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    position: relative;
    width: 100%;
  }

  .modal {
    max-width: 500px;
    padding: 2rem;
    border-radius: 8px;
    border: 3px solid rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    margin-top: 3rem;
  }

  dialog::backdrop {
    background: purple;
  }

  .modal p {
    color: black;
    margin-bottom: 1.5rem;
  }

  .close-modal {
    padding: 0.7rem 1rem;
  }

  .language {
    text-transform: capitalize;
    font-weight: bold;
    color: var(--clr-red);
  }
`;
export default Modal;
