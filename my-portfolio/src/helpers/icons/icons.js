// src/icons.js
import {
  faEnvelope,
  faPhone,
  faCalendar,
  faLocationDot,
  faBook,
  faEye,
  faPaperPlane,
  faChevronDown,
  faXmark,
  faMobileAlt,
  faPalette,
  faCode,
  faRobot,
  faMusic,
  faBookOpen,
  faPlane,
  faLightbulb,
  faRunning,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

// Export object chứa toàn bộ icon
export const icons = {
  mail: faEnvelope,
  phone: faPhone,
  calendar: faCalendar,
  location: faLocationDot,
  eye: faEye,
  paperPlane: faPaperPlane,
  chevronDown: faChevronDown,
  close: faXmark,

  // Social
  facebook: faFacebook,
  linkedin: faLinkedin,
  instagram: faInstagram,
  github: faGithub,

  // Services
  mobile: faMobileAlt,
  webdesign: faPalette,
  webdev: faCode,
  ai: faRobot,
  music: faMusic,
  code: faCode,
  travel: faPlane,
  idea: faLightbulb,
  sport: faRunning,

  // Timeline
  book: faBook,
  education: faBookOpen,
};
