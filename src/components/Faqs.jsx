// src/components/Faqs.jsx
import React, { useState } from "react";
import "./Faqs.css";

const faqData = [
  {
    question: "What services does your architecture firm provide?",
    answer:
      "We offer complete architectural solutions including design, planning, interior & exterior layouts, 3D visualization, and construction documentation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on size and complexity. Typically, residential projects take 3-6 months from design to construction documents, while commercial projects take longer.",
  },
  {
    question: "Do you provide 3D visualization and renders?",
    answer:
      "Yes! We provide high-quality 3D renders for interiors, exteriors, and landscape planning to help you visualize your project before construction.",
  },
  {
    question: "Can you help with permits and approvals?",
    answer:
      "Absolutely. We prepare submission drawings and assist with local regulatory approvals to ensure your project complies with all laws.",
  },
  {
    question: "Do you offer renovation and remodeling services?",
    answer:
      "Yes, we specialize in renovations, refurbishments, and interior redesigns while preserving structural integrity and aesthetics.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faqs-section" id="faqs">
      <div className="faqs-heading">
        <h2>Frequently Asked Questions</h2>
        <p>Answers to common queries about our architectural services.</p>
      </div>

      <div className="faqs-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="faq-toggle">{activeIndex === index ? "-" : "+"}</span>
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
