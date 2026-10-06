# Perikala Kartheek | Personal Portfolio

A modern personal portfolio website for **Perikala Kartheek**, an Electronics & Communication Engineering graduate interested in **Embedded Systems, IoT, Automation, DevOps, Cloud, and AI-powered solutions**.

The portfolio showcases projects, technical skills, experience, certifications, education, achievements, and professional information in a clean and responsive interface.

---

## 🚀 Live Portfolio

**Portfolio:** [http://127.0.0.1:4174/]

**LinkedIn:** [linkedin.com/in/kartheek-perikala](https://www.linkedin.com/in/kartheek-perikala)

---

## 👨‍💻 About

I am **Perikala Kartheek**, an Electronics & Communication Engineering graduate from **QIS College of Engineering and Technology**.

My interests include:

- Embedded Systems
- Internet of Things (IoT)
- Automation
- DevOps
- Cloud Computing
- AI & Machine Learning
- Networking
- System Design

This portfolio documents my learning journey, projects, technical skills, and practical experience.

---

## ✨ Features

- Responsive portfolio design
- Dark and light mode
- Modern navigation
- Project showcase
- Individual project detail pages
- Project filtering
- Skills section
- Experience timeline
- DevOps learning journey
- Certifications and achievements
- Education section
- Resume section
- Contact section
- Scroll progress indicator
- Mobile-friendly navigation

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| TypeScript | Type-safe development |
| TanStack Start | Application framework |
| Tailwind CSS v4 | Styling |
| Lovable Cloud | Cloud/backend services |
| Git & GitHub | Version control |

---

## 📁 Project Structure

```text
PerikalakKartheek-1/
│
├── public/
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   └── portfolio/
│   │       ├── SiteChrome.tsx
│   │       └── ProjectVisual.tsx
│   │
│   ├── data/
│   │   └── portfolio.ts
│   │
│   ├── routes/
│   │   ├── index.tsx
│   │   └── projects.$slug.tsx
│   │
│   ├── styles.css
│   └── test/
│
├── .env.example
├── package.json
└── README.md
```

---

## 📝 Managing Portfolio Content

Most portfolio content is maintained in:

```text
src/data/portfolio.ts
```

You can update:

- Personal information
- About section
- Skills
- Projects
- Experience
- Certifications
- Education
- Achievements
- Contact details
- Resume link
- Project links

This keeps the content separate from the UI and makes future updates easier.

---

## 📄 Adding Your Resume

Place your resume inside:

```text
public/resume.pdf
```

Then update the resume URL in:

```text
src/data/portfolio.ts
```

Change:

```ts
resumeUrl: ''
```

to:

```ts
resumeUrl: '/resume.pdf'
```

After this, the **View Resume** and **Download Resume** buttons will point to your PDF.

---

## 💻 Run Locally

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

### 2. Open the project

```bash
cd PerikalakKartheek-1
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

```bash
cp .env.example .env
```

Add the required Lovable Cloud configuration if needed.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

---

## 🔧 Available Commands

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Run Tests

```bash
npm run test
```

### Lint

```bash
npm run lint
```

---

## 🚀 Deployment

The application can be deployed using a hosting platform that supports the project's build output.

Typical workflow:

```text
Code
  ↓
GitHub
  ↓
Build
  ↓
Deployment
  ↓
Live Portfolio
```

The production build is generated in:

```text
dist/
```

---

## 📌 Projects

The portfolio includes projects covering areas such as:

- Embedded Systems
- IoT
- Automation
- Smart Systems
- AI & Machine Learning
- DevOps & Cloud

Each project can include:

- Problem Statement
- Objective
- System Architecture
- Working Process
- Features
- Technologies Used
- Challenges
- Results
- Future Improvements

---

## 🎓 Education

**Bachelor of Technology (B.Tech)**  
Electronics & Communication Engineering  
**QIS College of Engineering and Technology**  
2022 – 2026

---

## 📜 Certifications & Learning

The portfolio includes relevant certifications, internships, and technical learning experiences in areas including:

- AI & Machine Learning
- Embedded Systems
- Cloud Computing
- DevOps
- Networking
- IoT

---

## 🎯 Purpose

This project is more than a static portfolio.

It represents my continuous learning and practical exploration across **electronics, software, cloud technologies, automation, and AI**.

The website will evolve as I build new projects, gain experience, and learn new technologies.

---

## 📬 Contact

**Perikala Kartheek**

📧 Email: [Add your email]

💼 LinkedIn: [linkedin.com/in/kartheek-perikala](https://www.linkedin.com/in/kartheek-perikala)

🐙 GitHub: [Add your GitHub profile]

---

## ⭐ Support

If you find this portfolio useful or interesting, consider giving the repository a ⭐ on GitHub.

---

### Built with curiosity, consistency, and a lot of debugging. 🚀
