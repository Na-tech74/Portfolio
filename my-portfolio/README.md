# Portfolio - Nam Nguyễn

Portfolio cá nhân xây dựng với **React + Vite + React-Bootstrap**, thiết kế theo phong cách hiện đại (white + blue theme, glassmorphism, gradient, animations).

## Công nghệ

- **React 19** + **Vite (Rolldown)**
- **React-Bootstrap 5** + **Bootstrap 5**
- **FontAwesome 7** (free-solid + free-brands)
- **ESLint** (flat config)
- **Docker** (multi-stage build + Nginx)

## Cấu trúc

```
src/
├── App.jsx                        # Component chính
├── main.jsx                       # Entry point
├── assets/
│   ├── css/portfolio.css          # Theme CSS (animations, glassmorphism, gradients)
│   └── images/                    # Ảnh avatar, project, blog
├── components/
│   ├── Sidebar.jsx                # Sidebar profile + contacts + socials
│   └── Navbar.jsx                 # Navigation tabs
├── pages/
│   ├── AboutPage.jsx              # Giới thiệu, kỹ năng, sở thích, định hướng
│   ├── ResumePage.jsx             # Học tập, kinh nghiệm, kỹ năng
│   ├── PortfolioPage.jsx          # Dự án (có filter)
│   ├── BlogPage.jsx               # Blog posts
│   └── ContactPage.jsx            # Google Maps + Contact form
└── helpers/
    ├── data/
    │   ├── content.js             # Dữ liệu profile, services, skills, projects...
    │   └── images.js              # Import ảnh
    └── icons/
        ├── icons.config.js        # FontAwesome library config
        └── icons.js               # Icon object map
```

## Scripts

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy dev server |
| `npm run build` | Build production |
| `npm run preview` | Preview production build |
| `npm run lint` | Kiểm tra ESLint |

## Docker

```bash
# Build image
docker build -t portfolio .

# Chạy container
docker run -p 80:80 portfolio
```

## Liên hệ

- **Email**: namn98561@gmail.com
- **GitHub**: [Na-tech74](https://github.com/Na-tech74)
