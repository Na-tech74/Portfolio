import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userData } from "../helpers/data/content";
import { images } from "../helpers/data/images";
import { icons } from "../helpers/icons/icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={images.avatar} alt="Avatar" />
        </figure>

        <div className="info-content">
          <h1 className="name" title={userData.name}>
            {userData.name}
          </h1>
          <p className="title">{userData.title}</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <FontAwesomeIcon icon={icons.chevronDown} />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          {userData.contacts.map((contact, index) => (
            <li key={index} className="contact-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={contact.icon} />
              </div>
              <div className="contact-info">
                <p className="contact-title">{contact.title}</p>
                {contact.link ? (
                  <a href={contact.link} className="contact-link">
                    {contact.text}
                  </a>
                ) : contact.isTime ? (
                  <time dateTime={contact.dateTime}>{contact.text}</time>
                ) : contact.isAddress ? (
                  <address>{contact.text}</address>
                ) : (
                  <span>{contact.text}</span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {userData.socials.map((social, index) => (
            <li key={index} className="social-item">
              <a href={social.url} className="social-link">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
