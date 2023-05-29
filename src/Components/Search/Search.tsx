import React, { useState } from "react";
import "./Search.css";

interface SearchProps {
  onSearch: (searchString: string) => void;
}
export default function Search({ onSearch }: SearchProps) {
  return (
    <div className="topnav">
      <input
        type="search"
        className="topnav"
        placeholder="Search"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
