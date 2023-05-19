import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    border: "0",
    padding: "0",
    inset: " 0px",
  },
};

export default function Slide({eachWork}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="wow animate__animated" onClick={openModal}>
        <Image
          src={eachWork.image.url}
          alt="picture of the author"
          width={eachWork.image.width}
          height={eachWork.image.height}
        />
        <p>{eachWork.description}</p>
        <a onClick={closeModal} className="a-button">Read More</a>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
      <div className="modal-dialog outWork-modal">
        <div className="modal-content">
          <div className="modal-header">
            <button onClick={closeModal} type="button" className="btn btn-link" data-bs-dismiss="modal" aria-label="Close">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#E2E2E2"/>
                <path d="M10.1396 10L29.8605 30.2753" stroke="#464A4D" stroke-width="3" stroke-linecap="round"/>
                <path d="M10 30L30 10" stroke="#464A4D" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
          <div className="modal-body outWork-modal-content">
            <div className="content-top">
              <h2>
                {eachWork.title}
              </h2>
            </div>
            <div className="content-body">
              <div className="card-content">
                <p>
                  {eachWork.description}
                </p>
              </div>
              <div className="img-content">
                <Image
                  src={eachWork.image.url}
                  alt="picture of the author"
                  width={eachWork.image.width}
                  height={eachWork.image.height}
                />
              <span>Lorem Ipsum || 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Modal>
    </>
  )
}
