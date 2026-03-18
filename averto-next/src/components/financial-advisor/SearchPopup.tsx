"use client";

import React, { useState, useRef, useEffect } from "react";
import { SearchPopupProps } from "@/types/financial-advisor/header";
import XMarkIcon from "@/icons/XMarkIcon";

const SearchPopup: React.FC<SearchPopupProps> = ({
  isActive,
  onClose,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
      handleClearClick();
      onClose();
    }
  };

  const handleClearClick = () => {
    setSearchQuery("");
    inputRef.current?.focus();
  };

  const handleWrapperClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={`search__popup${isActive ? " active" : ""}`}>
      <button
        type="button"
        className="search__popup-toggle"
        onClick={onClose}
        aria-label="Close search"
      >
        <XMarkIcon />
      </button>

      <div className="search__popup-wrapper" onClick={handleWrapperClick}>
        <form
          ref={formRef}
          className="search__popup-form"
          onClick={handleFormClick}
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            ref={inputRef}
            className="search__input"
            type="search"
            name="search"
            placeholder="Search here..."
            value={searchQuery}
            onChange={handleInputChange}
            autoComplete="off"
            spellCheck={false}
          />

          <div className="search__popup-btns-wrapper">
            <button
              type="submit"
              className="common-btn__variation9"
              disabled={!searchQuery.trim()}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPopup;
