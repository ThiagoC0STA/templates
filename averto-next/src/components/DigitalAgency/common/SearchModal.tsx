import React, { useState } from "react";

interface SearchModalProps {
  isOpenModal: boolean;
  closeModal: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({
  isOpenModal,
  closeModal,
}) => {
  const [modalStatic, setModalStatic] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    setModalStatic(true);
    setTimeout(() => {
      setModalStatic(false);
    }, 300);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`${searchText} is Searching.....`);
    setSearchText("");
    closeModal();
  };

  return (
    <>
      {/* Modal */}
      <div
        className={`modal fade ${modalStatic ? "modal-static" : ""} ${
          isOpenModal ? "show d-block" : ""
        }`}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
        aria-labelledby="search-template"
        aria-hidden={!isOpenModal}
        onClick={handleClick}
      >
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          data-bs-dismiss="modal"
          onClick={closeModal}
        ></button>
        <div
          className="modal-dialog modal-dialog-centered"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-body">
              {/* Close button */}

              {/* Search form */}
              <form className="form-search" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
