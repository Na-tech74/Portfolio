
import { images } from "./images"; // file images.js đã config đường dẫn ảnh
import { icons } from "../icons/icons"; // file icons.js đã config FontAwesome


export const userData = {
  name: "Nam Nguyễn",
  title: "Fullstack Developer",
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

export const servicesData = [
  {
    icon: icons.webdesign,
    title: "Thiết kế website (Frontend)",
    text: "Thiết kế website hiện đại, responsive và animation mượt mà.",
  },
  {
    icon: icons.webdev,
    title: "Phát triển Backend",
    text: "Xây dựng API mạnh mẽ với Express.js, FastAPI, Flask, ASP.NET.",
  },
  {
    icon: icons.mobile,
    title: "Phát triển ứng dụng (Mobile)",
    text: "Phát triển ứng dụng bằng React Native và Android Studio.",
  },
  {
    icon: icons.ai,
    title: "ML / AI / DS",
    text: "Xây dựng mô hình Machine Learning, AI và phân tích dữ liệu.",
  },
];



export const hobbiesData = [
  {
    name: "Lập Trình",
    icon: icons.code,
    description:
      "Tôi yêu thích việc lập trình vì nó giúp tôi giải quyết vấn đề và tạo ra những sản phẩm có ích. Mỗi dòng code là một thử thách mới để học hỏi và phát triển tư duy logic.",
  },
  {
    name: "Âm Nhạc",
    icon: icons.music,
    description:
      "Âm nhạc giúp tôi thư giãn và khơi gợi cảm xúc. Tôi thường nghe nhạc khi làm việc để giữ tinh thần thoải mái và tập trung tốt hơn.",
  },
  {
    name: "Đọc Sách",
    icon: icons.book,
    description:
      "Đọc sách giúp tôi mở rộng kiến thức và khám phá nhiều góc nhìn mới. Tôi đặc biệt yêu thích các sách về công nghệ và phát triển bản thân.",
  },
  {
    name: "Du Lịch",
    icon: icons.travel,
    description:
      "Tôi thích khám phá những vùng đất mới, văn hóa khác nhau và gặp gỡ con người mới. Mỗi chuyến đi là một trải nghiệm đáng nhớ và là nguồn cảm hứng sáng tạo.",
  },
  {
    name: "Sáng Tạo Nội Dung",
    icon: icons.idea,
    description:
      "Tôi thích chia sẻ kiến thức, kinh nghiệm qua việc viết bài, làm video hoặc thiết kế. Đây là cách tôi kết nối với cộng đồng và truyền cảm hứng cho người khác.",
  },
  {
    name: "Thể Thao",
    icon: icons.sport,
    description:
      "Tôi thường dành thời gian cho thể thao để giữ sức khỏe và tinh thần năng động. Chạy bộ và gym là hai hoạt động tôi yêu thích nhất.",
  },
];


export const educationData = [
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
        content: "Hoàn thành các môn cơ sở: Toán Tin, Toán Rời Rạc, Xác suất thống kê, Lập trình Java, Cấu trúc dữ liệu và giải thuật. Đạt thành học bổng loại Khá.",
      },
      {
        year: "2023 — 2024 (Năm 2)",
        content: "Tập trung vào phát triển Web Frontend (HTML, CSS, JavaScript, React) và Backend (C# ,Node.js, Express). Tham gia các dự án nhóm.",
      },
      {
        year: "2024 — 2025 (Năm 3)",
        content: " Tự nghiên cứu học các công nghệ Backend (FastAPI, Flask, SQLAlchemy, JWT). Xây dựng đồ án chuyên ngành  hệ thống Chatbot AI với Ollama, tham gia cuộc thi trí tuệ nhân tạo do trường tổ chức và đạt giải Khuyến khích.",
      },
      {
        year: "2025 — 2026 (Năm 4)",
        content: "Thực hiện đồ án tốt nghiệp về ứng dụng Web AI. Hoàn thiện kỹ năng Fullstack và chuẩn bị cho công việc thực tế.",
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

export const experienceData = [
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
    title: "Dự án: Chatbot GnarAI Fullstack ( Đồ án chuyên ngành )",
    period: "Tháng 9/2025",
    details: [
      {
        title: "Backend",
        content: "FastAPI + Python: xây dựng API, xử lý JWT authentication, quản lý chat history, ứng dụng LLM."
      },
      {
        title: "Frontend",
        content: "React + Redux: thiết kế layout chat, sidebar, modal history; tích hợp voice input/output, animation mượt mà."
      },
      {
        title: "Database",
        content: "PostgreSQL: lưu trữ lịch sử chat, tối ưu truy vấn và backup dữ liệu."
      },
      {
        title: "Docker & Deployment",
        content: "Đóng gói backend, frontend và cơ sở dữ liệu trong Docker containers; triển khai môi trường phát triển và production."
      },
      {
        title: "UI/UX",
        content: "Thiết kế giao diện thân thiện, dễ sử dụng và trực quan; tối ưu trải nghiệm người dùng trên desktop và mobile."
      },
      {
        title: "Công nghệ khác",
        content: "WebSocket cho realtime chat, Framer Motion cho animation, Git/GitHub quản lý source."
      },
    ],
  },
  {
    title: "Dự án: So sánh thuật toán Linear Regression & Random Forest trong dự đoán giá nhà Hà Nội ( Đồ án cơ sở ngành )",
    period: "Tháng 5/2025",
    details: [
      { title: "Thu thập dữ liệu", content: "Thu thập dữ liệu bất động sản Hà Nội từ kaggle, tiền xử lý dữ liệu thiếu và outlier." },
      { title: "Mô hình hóa", content: "Áp dụng Linear Regression và Random Forest để dự đoán giá nhà và huấn luyện trên Colab Google và đánh giá mô hình." },
      { title: "So sánh & phân tích", content: "So sánh kết quả dự đoán giữa hai thuật toán; đánh giá độ chính xác và tính ứng dụng." },
      { title: "Báo cáo", content: "Trình bày kết quả dưới dạng biểu đồ, bảng tổng hợp; viết báo cáo chi tiết các bước thực hiện." },
    ],
  },
  {
    title: "Dự án: Xây dựng Website thương mại điện tử bán iPhone Fullstack MERN ( Đồ án )",
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
    title: "Dự án: Thiết kế Website thương mại điện tử bán đồ công nghệ Apple ( Đồ án )",
    period: "Tháng 6/2023",
    details: [
      { title: "Frontend", content: "HTMLsemantic-CSS-JS-Bootstrap-JQuery: thiết kế UI, tạo trang sản phẩm, giỏ hàng, checkout..." },
    ],
  },
];


export const skillsData = [
  { name: "Tools ( Visual Studio Code, Visual Studio, IntelliJ, Postman )", value: 90 },
  { name: "Phát triển Web ( Fullstack MERN )", value: 70 },
  { name: "Phát triển Frontend ( Vite + ReactJS ,Vanilla )", value: 90 },
  { name: "Phát triển Backend ( ASP.NET, FastAPI, Flask, ExpressJS ,Node.js )", value: 60 },
  { name: "Hạ tầng IT ( IT infrastructure Docker, vmware )", value: 70 },
  { name: "ML /AI /DS ( Python/Colab )", value: 70 },
  { name: "Ứng dụng di động ( Mobile App React Native )", value: 40 },
];

export const projectsData = [
  {
    title: "GnarAI ứng dụng LLM triển khai Docker ( Đồ án chuyên ngành )",
    category: "Applications",
    image: images.projects.ganrAI,
    link: "https://github.com/Na-tech74/GnarAI"
  },
  {
    title: "Dự án AlphaAI (Cuộc thi Trí tuệ nhân tạo)",
    category: "Applications",
    image: images.projects.alphaAI,
    link: "https://github.com/Na-tech74/AlphaAI",
  },
  {
    title: "NStore ( Ứng dụng Thương mại điện tử bán đồ công nghệ Apple)",
    category: "Applications",
    image: images.projects.nstore,
    link: "https://github.com/Na-tech74/Fullstack-MERN"
  },
  { title: "Thiết kế website giới thiệu Apple", category: "Web design", image: images.projects.wd1 },
  { title: "Thiết kế Website bán hàng", category: "Web design", image: images.projects.wd2 },
  { title: "Thiết kế Portfolio triển khai docker", category: "Web design", image: images.projects.wd3 },
  {
    title: "Bộ datasets Dự đoán điểm thi THPTQG 2024",
    category: "Datasets",
    image: images.projects.cdcntt1,
    link: "https://drive.google.com/drive/u/0/folders/1bidx5sickOgdTx6BDpJYHWJeV94uWLQO"
  },
  {
    title: "Dự đoán giá nhà Hà Nội LnR & RF",
    category: "Datasets",
    image: images.projects.datasets,
    link: "https://github.com/Na-tech74/ChuyendechuyenxaukythuatCNTT2"
  },
  { title: "Phát triển Dự án cá nhân Portfolio triển khai docker", category: "Web development", image: images.projects.wd4 },
  {
    title: "Chia sẻ giao diện để test backend & tài liệu học tập nghiên cứu",
    category: "Shared projects & Documents",
    image: images.projects.wd5,
    link: "https://drive.google.com/drive/u/0/folders/1k0LNpXXjmPsRYdpHyRjHibnVxMoh5QZz"
  },
];

export const blogPostsData = [
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
