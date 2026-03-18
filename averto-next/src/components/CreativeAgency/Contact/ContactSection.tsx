"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { IContact } from "@/constant/CreativeAgency/Contact/contact";
import Link from "next/link";

interface FormData {
  Name: string;
  Email: string;
  Messages: string;
}

interface ContactProps {
  data: IContact;
}

const ContactSection: React.FC<ContactProps> = ({ data: contactData }) => {
  const {
    subtitle,
    title,
    description,
    contactInfo,
    socialLinks,
    formFields,
    buttonText,
  } = contactData;

  const [formData, setFormData] = useState<FormData>({
    Name: "",
    Email: "",
    Messages: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Name, Email, Messages } = formData;
    if (!Name.trim() || !Email.trim() || !Messages.trim()) {
      toast.error("Please fill in all the fields before submitting.");
      return;
    }

    console.log(formData);
    const toastId = toast.loading("Sending your message...");
    try {
      await new Promise((r) => setTimeout(r, 900));
      toast.success("Your message has been sent successfully!", {
        id: toastId,
      });
      setFormData({
        Name: "",
        Email: "",
        Messages: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.", { id: toastId });
    }
  };

  return (
    <>
      <section className="contact-area">
        <div className="container">
          <div className="contact-area-inner section-spacing">
            <div className="section-content-wrapper">
              <div className="section-content fade-anim" data-direction="right">
                <div className="section-title-wrapper">
                  <div className="subtitle-wrapper">
                    <span className="section-subtitle">{subtitle}</span>
                  </div>
                  <div className="title-wrapper">
                    <h2 className="section-title">{title}</h2>
                  </div>
                </div>
                <div className="text-wrapper">
                  <p className="text">{description}</p>
                </div>
                <div className="contact-list">
                  <ul>
                    {contactInfo.map((item, index) => (
                      <li key={index}>
                        <img src={item?.icon} alt="icon image" />
                        <Link href={item?.link}>{item?.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="social-links-wrapper">
                  <p className="title">Follow us:</p>
                  <div className="social-links">
                    {socialLinks.map((social, index) => (
                      <Link key={index} href={social?.link}>
                        <i className={`fa-brands ${social?.icon}`}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="contact-wrap fade-anim" data-direction="left">
                <form onSubmit={handleSubmit}>
                  <div className="contact-formwrap">
                    {formFields?.map((field, index) => (
                      <div
                        className={`contact-formfield${
                          field?.name === "Messages" ? " messages" : ""
                        }`}
                        key={index}
                      >
                        <img
                          className="input-icon"
                          src={field?.icon}
                          alt="icon"
                        />
                        <h3 className="title">{field?.label}</h3>
                        <input
                          type={field?.type}
                          name={field?.name}
                          id={field?.name}
                          placeholder={field?.placeholder}
                          value={formData[field?.name as keyof FormData] || ""}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="submit-btn">
                    <button type="submit" className="t-btn t-btn-group">
                      <span className="t-btn t-btn-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span className="t-btn t-btn-primary">{buttonText}</span>
                      <span className="t-btn t-btn-circle">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
