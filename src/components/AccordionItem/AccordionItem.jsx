import { useState, useRef, useEffect } from "react";
import './style.css';

export default function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <svg
          className="accordion-icon"
          width="14" height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div
        className="accordion-content"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        <div className="accordion-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
}