import { OurPeopleQuery } from "@/datalayer/Types/AllTypes";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    border: "0",
    padding: "0",
    inset: " 0px",
  },
};

type OurTeamSlideProps = {
  eachPeople: OurPeopleQuery;
};

export default function TeamSlide({
  eachPeople,
}: OurTeamSlideProps): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="slide wow animate__animated a-button" onClick={openModal}>
        <Image
          src={eachPeople.image.url}
          alt="picture of the author"
          width={300}
          height={300}
        />
        <h4>{eachPeople.name}</h4>
        <p>{eachPeople.designation}</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="modal-dialog team-modal">
          <div className="modal-content">
            <div className="modal-header">
              <button
                onClick={closeModal}
                type="button"
                className="btn btn-link"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="#E2E2E2" />
                  <path
                    d="M10.1396 10L29.8605 30.2753"
                    stroke="#464A4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10 30L30 10"
                    stroke="#464A4D"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-body team-modal-content">
              <div className="img-content">
                <Image
                  src={eachPeople.image.url}
                  alt="picture of the author"
                  width={300}
                  height={300}
                />
              </div>
              <div className="card-content">
                <h2>{eachPeople.name}</h2>
                <h5>{eachPeople.designation}</h5>
                <p>{eachPeople.details}</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
