import { images } from "./images";
import { icons } from "../icons/icons";

export const userData = {
  name: "Nam Nguyễn",
  title: "Backend Developer",
  contacts: [
    {
      icon: icons.mail,
      title: "Email",
      link: "https://mail.google.com/mail/u/0/#starred",
      text: "namn98561@gmail.com",
    },
    {
      icon: icons.phone,
      title: "SĐT",
      link: "tel:0378623181",
      text: "0378623181",
    },
    {
      icon: icons.calendar,
      title: "Ngày sinh",
      text: "21/01/2004",
      isTime: true,
      dateTime: "21-01-2004",
    },
    {
      icon: icons.location,
      title: "Địa chỉ",
      text: "Thành phố Hồ Chí Minh, Việt Nam",
      isAddress: true,
    },
  ],
  socials: [
    { icon: icons.facebook, url: "https://www.facebook.com/nguyen.nam.394402" },
    { icon: icons.linkedin, url: "https://www.linkedin.com/in/nam-nguy%E1%BB%85n-9606532aa/" },
    { icon: icons.instagram, url: "https://www.instagram.com/bf.leonhart/" },
    { icon: icons.github, url: "https://github.com/Na-tech74" }
  ],
};

const servicesDataVi = [
  {
    icon: icons.webdesign,
    title: "Thiết kế Website & UI Frontend",
    text: "Xây dựng giao diện hiện đại, responsive và tối ưu trải nghiệm người dùng bằng React, Bootstrap, animation mượt mà và tư duy UI/UX thực tế.",
  },
  {
    icon: icons.webdev,
    title: "Phát triển Backend & API",
    text: "Thiết kế hệ thống backend với Express.js, FastAPI, Flask và ASP.NET. Tập trung vào API hiệu năng cao, authentication JWT, database và kiến trúc thực tế.",
  },
  {
    icon: icons.mobile,
    title: "Ứng dụng Mobile & Cross Platform",
    text: "Phát triển ứng dụng mobile bằng React Native và Android Studio với giao diện trực quan, tối ưu hiệu năng và khả năng mở rộng.",
  },
  {
    icon: icons.ai,
    title: "AI / Machine Learning",
    text: "Nghiên cứu và xây dựng các hệ thống AI, chatbot, Machine Learning và xử lý dữ liệu. Có kinh nghiệm tích hợp AI local với Ollama và triển khai thực tế.",
  },
];

const servicesDataEn = [
  {
    icon: icons.webdesign,
    title: "Website Design & UI Frontend",
    text: "Build modern, responsive interfaces optimized for user experience using React, Bootstrap, smooth animations and practical UI/UX thinking.",
  },
  {
    icon: icons.webdev,
    title: "Backend & API Development",
    text: "Design backend systems with Express.js, FastAPI, Flask and ASP.NET. Focus on high-performance APIs, JWT authentication, databases and real-world architecture.",
  },
  {
    icon: icons.mobile,
    title: "Mobile & Cross Platform Apps",
    text: "Develop mobile applications using React Native and Android Studio with intuitive interfaces, optimized performance and scalability.",
  },
  {
    icon: icons.ai,
    title: "AI / Machine Learning",
    text: "Research and build AI systems, chatbots, Machine Learning and data processing. Experienced in integrating local AI with Ollama and real-world deployment.",
  },
];

export const servicesData = (lang) => lang === 'en' ? servicesDataEn : servicesDataVi;

const hobbiesDataVi = [
  {
    name: "Lập Trình",
    icon: icons.code,
    description:
      "Lập trình không chỉ là công việc mà còn là đam mê giúp tôi biến ý tưởng thành sản phẩm thực tế. Tôi thích xây dựng hệ thống từ frontend, backend đến AI và luôn tìm cách tối ưu code sạch, dễ mở rộng.",
  },
  {
    name: "Công Nghệ & AI",
    icon: icons.idea,
    description:
      "Tôi yêu thích khám phá AI, Machine Learning và các công nghệ mới. Việc nghiên cứu chatbot, mô hình local AI hay hệ thống thông minh giúp tôi mở rộng tư duy kỹ thuật mỗi ngày.",
  },
  {
    name: "Guitar",
    icon: icons.music,
    description:
      "Tôi yêu thích guitar vì âm nhạc giúp tôi giải tỏa căng thẳng và cân bằng cảm xúc sau những giờ học tập, lập trình. Việc tự học và luyện tập guitar cũng giúp tôi kiên nhẫn và tập trung hơn mỗi ngày.",
  },
  {
    name: "Đọc Sách & Tự Học",
    icon: icons.book,
    description:
      "Tôi thích tự học qua sách, tài liệu và các dự án thực tế. Những chủ đề tôi quan tâm nhiều nhất là công nghệ, phát triển bản thân và tư duy xây dựng sản phẩm.",
  },
  {
    name: "Xây Dựng Dự Án",
    icon: icons.webdev,
    description:
      "Tôi thích tự tay xây dựng các dự án cá nhân từ ý tưởng đến triển khai hoàn chỉnh. Quá trình biến một sản phẩm hoạt động thực tế mang lại cho tôi rất nhiều động lực.",
  },
  {
    name: "Sáng Tạo Nội Dung",
    icon: icons.travel,
    description:
      "Tôi thích chia sẻ kiến thức, trải nghiệm học tập và công nghệ thông qua bài viết, video hoặc portfolio cá nhân. Đây là cách tôi lưu lại hành trình phát triển của mình.",
  },
];

const hobbiesDataEn = [
  {
    name: "Coding",
    icon: icons.code,
    description:
      "Coding is not just a job but a passion that turns ideas into real products. I enjoy building systems from frontend, backend to AI and always strive for clean, extensible code.",
  },
  {
    name: "Technology & AI",
    icon: icons.idea,
    description:
      "I love exploring AI, Machine Learning and emerging technologies. Researching chatbots, local AI models or intelligent systems helps expand my technical thinking every day.",
  },
  {
    name: "Guitar",
    icon: icons.music,
    description:
      "I love playing guitar because music helps me relieve stress and balance emotions after studying and coding. Self-learning and practicing guitar also builds patience and focus.",
  },
  {
    name: "Reading & Self-Learning",
    icon: icons.book,
    description:
      "I enjoy self-learning through books, documentation and real projects. My favorite topics are technology, personal development and product-building mindset.",
  },
  {
    name: "Building Projects",
    icon: icons.webdev,
    description:
      "I love building personal projects from idea to complete deployment. The process of making a real working product gives me a lot of motivation.",
  },
  {
    name: "Content Creation",
    icon: icons.travel,
    description:
      "I enjoy sharing knowledge, learning experiences and technology through articles, videos or personal portfolios. This is how I document my development journey.",
  },
];

export const hobbiesData = (lang) => lang === 'en' ? hobbiesDataEn : hobbiesDataVi;

const educationDataVi = [
  {
    title: "Trường Đại học Nguyễn Tất Thành",
    period: "2022 — 2026",
    text: "Chuyên ngành: Kỹ thuật công nghệ thông tin. Tập trung vào phát triển phần mềm, cơ sở dữ liệu và ứng dụng web.",
  },
  {
    title: "Thành tích học tập",
    details: [
      {
        year: "2022 — 2023 (Năm 1)",
        content: "Hoàn thành các môn cơ sở: Toán Tin, Toán Rời Rạc, Xác suất thống kê, Lập trình Java, Cấu trúc dữ liệu và giải thuật. đạt 2 học bổng năm 1 và năm 3 .",
      },
      {
        year: "2023 — 2024 (Năm 2)",
        content: "Tập trung vào phát triển Website Frontend (HTML, CSS, JavaScript, Bootstrap) và Backend (C#, ASP.NET MVC). Đồng thời tìm hiểu phát triển ứng dụng mobile với Android Studio và tham gia các dự án cá nhân, dự án nhóm.",
      },
      {
        year: "2024 — 2025 (Năm 3)",
        content: "Tự nghiên cứu và học các framework Backend hiện đại như FastAPI, Express.js cùng các công nghệ như JWT Authentication, Cookie, RESTful API, Middleware và kiến trúc hệ thống Backend. Xây dựng đồ án chuyên ngành hệ thống Chatbot AI với Ollama, tham gia cuộc thi trí tuệ nhân tạo do trường tổ chức và đạt giải Khuyến khích."
      },
      {
        year: "2025 — 2026 (Năm 4)",
        content: "Thực hiện đồ án tốt nghiệp về website bán đàn guitar tích hợp AI Chatbot và triển khai thực tế. Tập trung phát triển mạnh kỹ năng Backend, tư duy kiến trúc hệ thống và hoàn thiện kinh nghiệm Fullstack cho môi trường làm việc chuyên nghiệp."
      },
    ],
  },
  {
    title: "Chứng chỉ & Khóa học",
    period: "tháng 3/2026",
    details: [
      { content: "Đạt chứng chỉ giải thuật trên HackerRank." },
      { content: "Đạt chứng chỉ TOEIC 700." },
    ]
  },
];

const educationDataEn = [
  {
    title: "Nguyen Tat Thanh University",
    period: "2022 — 2026",
    text: "Major: Information Technology Engineering. Focused on software development, databases and web applications.",
  },
  {
    title: "Academic Achievements",
    details: [
      {
        year: "2022 — 2023 (Year 1)",
        content: "Completed foundation courses: Discrete Mathematics, Probability & Statistics, Java Programming, Data Structures & Algorithms. Achieved Good academic scholarship.",
      },
      {
        year: "2023 — 2024 (Year 2)",
        content: "Focused on Frontend Website development (HTML, CSS, JavaScript, Bootstrap) and Backend development (C#, ASP.NET MVC). At the same time, explored mobile application development with Android Studio and participated in both personal and team projects.",
      },
      {
        year: "2024 — 2025 (Year 3)",
        content: "Self-studied and learned modern Backend frameworks such as FastAPI and Express.js, along with technologies like JWT Authentication, Cookies, RESTful APIs, Middleware, and Backend system architecture. Developed an AI Chatbot graduation project using Ollama, participated in the university AI competition, and achieved the Consolation Prize.",
      },
      {
        year: "2025 — 2026 (Year 4)",
        content: "Developed a graduation project focused on an AI-powered guitar e-commerce website integrated with a chatbot and deployed in a real-world environment. Strengthened Backend development skills, system architecture thinking, and practical Fullstack experience for professional work."
      },
    ],
  },
  {
    title: "Certificates & Courses",
    period: "March 2026",
    details: [
      { content: "Achieved Algorithm certificate on HackerRank." },
      { content: "Achieved TOEIC 700 certificate." },
    ]
  },
];

export const educationData = (lang) => lang === 'en' ? educationDataEn : educationDataVi;

const experienceDataVi = [
  {
    title: "Dự án: Xây dựng Portfolio cá nhân (Frontend Vite + React)",
    period: "Tháng 10/2025",
    details: [
      { title: "Layout & Component", content: "Thiết kế layout portfolio với Vite + React, sử dụng component hóa, quản lý state cơ bản." },
      { title: "Responsive Design", content: "Đảm bảo hiển thị chuẩn trên desktop, tablet và mobile, tối ưu trải nghiệm người dùng." },
      { title: "SEO & Accessibility", content: "Áp dụng các kỹ thuật SEO, thẻ meta, heading, alt text; Đảm bảo người dùng khuyết tật có thể truy cập dễ dàng." },
      { title: "Sections tích hợp", content: "Tích hợp Hobbies, Timeline, Orientation, Skills sections; Sử dụng FontAwesome icons." },
    ],
  },
  {
    title: "Dự án: Chatbot GnarAI Fullstack (Đồ án chuyên ngành)",
    period: "Tháng 9/2025",
    details: [
      { title: "Backend", content: "FastAPI + Python: xây dựng API, xử lý JWT authentication, quản lý chat history, ứng dụng LLM." },
      { title: "Frontend", content: "React + Redux: thiết kế layout chat, sidebar, modal history; tích hợp voice input/output, animation mượt mà." },
      { title: "Database", content: "PostgreSQL: lưu trữ lịch sử chat, tối ưu truy vấn và backup dữ liệu." },
      { title: "Docker & Deployment", content: "Đóng gói backend, frontend và cơ sở dữ liệu trong Docker containers; triển khai môi trường phát triển và production." },
      { title: "UI/UX", content: "Thiết kế giao diện thân thiện, dễ sử dụng và trực quan; tối ưu trải nghiệm người dùng trên desktop và mobile." },
      { title: "Công nghệ khác", content: "WebSocket cho realtime chat, Framer Motion cho animation, Git/GitHub quản lý source." },
    ],
  },
  {
    title: "Dự án: So sánh thuật toán Linear Regression & Random Forest trong dự đoán giá nhà Hà Nội (Đồ án cơ sở ngành)",
    period: "Tháng 5/2025",
    details: [
      { title: "Thu thập dữ liệu", content: "Thu thập dữ liệu bất động sản Hà Nội từ kaggle, tiền xử lý dữ liệu thiếu và outlier." },
      { title: "Mô hình hóa", content: "Áp dụng Linear Regression và Random Forest để dự đoán giá nhà và huấn luyện trên Colab Google và đánh giá mô hình." },
      { title: "So sánh & phân tích", content: "So sánh kết quả dự đoán giữa hai thuật toán; đánh giá độ chính xác và tính ứng dụng." },
      { title: "Báo cáo", content: "Trình bày kết quả dưới dạng biểu đồ, bảng tổng hợp; viết báo cáo chi tiết các bước thực hiện." },
    ],
  },
  {
    title: "Dự án: Xây dựng Website thương mại điện tử bán iPhone Fullstack MERN (Đồ án)",
    period: "Tháng 12/2024",
    details: [
      { title: "Frontend", content: "React + Redux: thiết kế UI animation DATA AOS, quản lý state, tạo trang sản phẩm, giỏ hàng, checkout." },
      { title: "Backend", content: "Node.js + Express: xây dựng REST API cho sản phẩm, người dùng, đơn hàng; bảo mật JWT." },
      { title: "Database", content: "MySQL: quản lý dữ liệu sản phẩm, người dùng, đơn hàng; tối ưu truy vấn." },
      { title: "Tính năng nâng cao", content: "Đặt hàng, thanh toán trực tuyến, filter sản phẩm, đánh giá, dashboard admin, thông báo email." },
      { title: "Responsive & UI/UX", content: "Đảm bảo hiển thị tốt trên mọi thiết bị; tối ưu trải nghiệm người dùng và tốc độ tải trang." },
    ],
  },
  {
    title: "Dự án: Thiết kế Website thương mại điện tử bán đồ công nghệ Apple (Đồ án)",
    period: "Tháng 6/2023",
    details: [
      { title: "Frontend", content: "HTML semantic - CSS - JS - Bootstrap - JQuery: thiết kế UI, tạo trang sản phẩm, giỏ hàng, checkout..." },
    ],
  },
];

const experienceDataEn = [
  {
    title: "Project: Personal Portfolio (Frontend Vite + React)",
    period: "October 2025",
    details: [
      { title: "Layout & Component", content: "Designed portfolio layout with Vite + React, using component-based architecture and state management." },
      { title: "Responsive Design", content: "Ensured proper display on desktop, tablet and mobile with optimized user experience." },
      { title: "SEO & Accessibility", content: "Applied SEO techniques, meta tags, heading, alt text; ensured accessible for disabled users." },
      { title: "Integrated Sections", content: "Integrated Hobbies, Timeline, Orientation, Skills sections; used FontAwesome icons." },
    ],
  },
  {
    title: "Project: GnarAI Fullstack Chatbot (Major Project)",
    period: "September 2025",
    details: [
      { title: "Backend", content: "FastAPI + Python: built API, JWT authentication, chat history management, LLM integration." },
      { title: "Frontend", content: "React + Redux: designed chat layout, sidebar, history modal; integrated voice input/output, smooth animations." },
      { title: "Database", content: "PostgreSQL: stored chat history, optimized queries and data backup." },
      { title: "Docker & Deployment", content: "Packaged backend, frontend and database in Docker containers; deployed dev and production environments." },
      { title: "UI/UX", content: "Designed friendly, intuitive interface; optimized user experience on desktop and mobile." },
      { title: "Other Technologies", content: "WebSocket for realtime chat, Framer Motion for animations, Git/GitHub for source control." },
    ],
  },
  {
    title: "Project: Comparing Linear Regression & Random Forest for Hanoi House Price Prediction (Course Project)",
    period: "May 2025",
    details: [
      { title: "Data Collection", content: "Collected Hanoi real estate data from Kaggle, preprocessed missing data and outliers." },
      { title: "Modeling", content: "Applied Linear Regression and Random Forest for house price prediction, trained on Google Colab and evaluated models." },
      { title: "Comparison & Analysis", content: "Compared prediction results between algorithms; evaluated accuracy and applicability." },
      { title: "Reporting", content: "Presented results in charts and summary tables; wrote detailed implementation report." },
    ],
  },
  {
    title: "Project: E-commerce iPhone Store Fullstack MERN (Project)",
    period: "December 2024",
    details: [
      { title: "Frontend", content: "React + Redux: designed UI with AOS animations, state management, product pages, cart, checkout." },
      { title: "Backend", content: "Node.js + Express: built REST API for products, users, orders; JWT security." },
      { title: "Database", content: "MySQL: managed product, user, order data; optimized queries." },
      { title: "Advanced Features", content: "Order placement, online payment, product filtering, reviews, admin dashboard, email notifications." },
      { title: "Responsive & UI/UX", content: "Ensured good display on all devices; optimized user experience and page load speed." },
    ],
  },
  {
    title: "Project: Apple Technology E-commerce Website (Project)",
    period: "June 2023",
    details: [
      { title: "Frontend", content: "HTML semantic - CSS - JS - Bootstrap - JQuery: designed UI, product pages, cart, checkout..." },
    ],
  },
];

export const experienceData = (lang) => lang === 'en' ? experienceDataEn : experienceDataVi;

const skillsDataVi = [
  { name: "Tools (Visual Studio Code, Visual Studio, IntelliJ, Postman)", value: 90 },
  { name: "Phát triển Web (Fullstack MERN)", value: 70 },
  { name: "Phát triển Frontend (Vite + ReactJS, Vanilla)", value: 90 },
  { name: "Phát triển Backend (ASP.NET, FastAPI, Flask, ExpressJS, Node.js)", value: 60 },
  { name: "Hạ tầng IT (IT infrastructure Docker, vmware)", value: 70 },
  { name: "ML / AI / DS (Python/Colab)", value: 70 },
  { name: "Ứng dụng di động (Mobile App React Native)", value: 40 },
];

const skillsDataEn = [
  { name: "Tools (Visual Studio Code, Visual Studio, IntelliJ, Postman)", value: 90 },
  { name: "Web Development (Fullstack MERN)", value: 70 },
  { name: "Frontend Development (Vite + ReactJS, Vanilla)", value: 90 },
  { name: "Backend Development (ASP.NET, FastAPI, Flask, ExpressJS, Node.js)", value: 60 },
  { name: "IT Infrastructure (Docker, vmware)", value: 70 },
  { name: "ML / AI / DS (Python/Colab)", value: 70 },
  { name: "Mobile App (React Native)", value: 40 },
];

export const skillsData = (lang) => lang === 'en' ? skillsDataEn : skillsDataVi;

const projectsDataFull = [
  {
    titleVi: "GnarAI ứng dụng LLM triển khai Docker (Đồ án chuyên ngành)",
    titleEn: "GnarAI LLM application deployed with Docker (Major Project)",
    category: "Applications",
    image: images.projects.ganrAI,
    link: "https://github.com/Na-tech74/GnarAI"
  },
  {
    titleVi: "Xây dựng ứng dụng web NamAcoustic RAG Chatbot ",
    titleEn: "Developed the NamAcoustic web application with an integrated RAG Chatbot system",
    category: "Applications",
    image: images.projects.nstore,
    link: "https://github.com/Na-tech74/mern-guitar-shop-rag"
  },
  { titleVi: "Thiết kế website giới thiệu Apple", titleEn: "Apple Introduction Website Design", category: "Web design", image: images.projects.wd1 },
  { titleVi: "Thiết kế Website bán hàng", titleEn: "E-commerce Website Design", category: "Web design", image: images.projects.wd2 },
  { titleVi: "Thiết kế Portfolio triển khai docker", titleEn: "Portfolio Design with Docker Deployment", category: "Web design", image: images.projects.wd3 },
  {
    titleVi: "Bộ datasets Dự đoán điểm thi THPTQG 2024",
    titleEn: "2024 National High School Exam Score Prediction Datasets",
    category: "Datasets",
    image: images.projects.cdcntt1,
    link: "https://drive.google.com/drive/u/0/folders/1bidx5sickOgdTx6BDpJYHWJeV94uWLQO"
  },
  {
    titleVi: "Dự đoán giá nhà Hà Nội LnR & RF",
    titleEn: "Hanoi House Price Prediction LnR & RF",
    category: "Datasets",
    image: images.projects.datasets,
    link: "https://github.com/Na-tech74/ChuyendechuyenxaukythuatCNTT2"
  },
  { titleVi: "Phát triển Dự án cá nhân Portfolio triển khai docker", titleEn: "Personal Portfolio Project with Docker Deployment", category: "Web development", image: images.projects.wd4 },
  {
    titleVi: "Chia sẻ giao diện để test backend & tài liệu học tập nghiên cứu",
    titleEn: "Shared UI for backend testing & learning resources",
    category: "Shared projects & Documents",
    image: images.projects.wd5,
    link: "https://drive.google.com/drive/u/0/folders/1k0LNpXXjmPsRYdpHyRjHibnVxMoh5QZz"
  },
];

export const projectsData = (lang) =>
  projectsDataFull.map(p => ({
    ...p,
    title: lang === 'en' ? p.titleEn : p.titleVi,
  }));

const blogPostsDataVi = [
  {
    title: "FreeCodeCamp",
    category: "Programming",
    date: "2018-01-22",
    displayDate: "22-01-2018",
    image: images.blog.post1,
    text: "FreeCodeCamp cung cấp các khóa học lập trình miễn phí ở tất các linh vực, từ web development, data science đến machine learning.",
  },
  {
    title: "F8",
    category: "Lập Trình",
    date: "2018-01-22",
    displayDate: "22-01-2018",
    image: images.blog.post2,
    text: "F8 cung cấp các khóa học lập trình fullstack miễn phí, từ HTML, CSS, JS đến React, Node.js và dự án thực tế.",
  },
  {
    title: "hỏi Dân IT",
    category: "Lập Trình",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post3,
    text: "Hỏi Dân IT là nơi chia sẻ kiến thức, kinh nghiệm và giải đáp thắc mắc về lập trình, công nghệ thông tin.",
  },
  {
    title: "How K team",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post4,
    text: "How K Team cung cấp các khóa học lập trình từ cơ bản đến nâng cao, bao gồm Python, JavaScript, React, Angular và C#..",
  },
  {
    title: "TITV",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post5,
    text: "TITV chia sẻ các kiến thức cơ bản về lập trình Java , lâp trình mạng , Cáu trúc dữ liệu và giải thuật...",
  },
  {
    title: "Dũng Lại Lập Trình",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post6,
    text: "Dũng Lại Lập Trình chia sẻ các kiến thức về Toán ,AI, Data Analysis, Machine Learning, Deep Learning...",
    link: "https://www.youtube.com/@DungLaiLapTrinh"
  },
];

const blogPostsDataEn = [
  {
    title: "FreeCodeCamp",
    category: "Programming",
    date: "2018-01-22",
    displayDate: "22-01-2018",
    image: images.blog.post1,
    text: "FreeCodeCamp provides free programming courses across all fields, from web development and data science to machine learning.",
  },
  {
    title: "F8",
    category: "Programming",
    date: "2018-01-22",
    displayDate: "22-01-2018",
    image: images.blog.post2,
    text: "F8 provides free fullstack programming courses, from HTML, CSS, JS to React, Node.js and real-world projects.",
  },
  {
    title: "hỏi Dân IT",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post3,
    text: "Hỏi Dân IT shares knowledge, experience and answers questions about programming and information technology.",
  },
  {
    title: "How K team",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post4,
    text: "How K Team provides programming courses from beginner to advanced, including Python, JavaScript, React, Angular and C#.",
  },
  {
    title: "TITV",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post5,
    text: "TITV shares basic knowledge about Java programming, network programming, Data Structures and Algorithms...",
  },
  {
    title: "Dũng Lại Lập Trình",
    category: "Programming",
    date: "2022-02-23",
    displayDate: "23-02-2022",
    image: images.blog.post6,
    text: "Dũng Lại Lập Trình shares knowledge about Math, AI, Data Analysis, Machine Learning, Deep Learning...",
    link: "https://www.youtube.com/@DungLaiLapTrinh"
  },
];

export const blogPostsData = (lang) => lang === 'en' ? blogPostsDataEn : blogPostsDataVi;
