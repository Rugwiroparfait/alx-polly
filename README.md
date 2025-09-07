# ALX Polly - Professional Polling Platform

<div align="center">
  <img src="./images/landing page.png" alt="ALX Polly Landing Page" width="800"/>
  
  **A modern, flexible polling platform built for professionals**
  
  [![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Lucide React](https://img.shields.io/badge/Lucide_React-Icons-FF6B6B?style=for-the-badge)](https://lucide.dev/)
</div>

## 📋 Project Overview

**ALX Polly** is a comprehensive polling platform developed as part of the **ALX AI for DEV II** program. Built using **Cursor AI** for enhanced development efficiency, this project demonstrates modern web development practices, professional design principles, and flexible user experience design.

The platform empowers users to create any type of poll imaginable - from simple "What's for lunch?" questions to complex multi-question surveys with ratings, rankings, file uploads, and custom fields.

## 🎯 Assignment Context

This project was developed as an assignment for **ALX AI for DEV II**, showcasing:
- Modern React/Next.js development practices
- Professional UI/UX design principles
- Flexible architecture and component design
- AI-assisted development workflows
- Comprehensive feature implementation

## ✨ Key Features

### 🎨 **Professional Design System**
- **ALX-inspired minimal aesthetic** with navy blue, cyan, and green color palette
- **Modern typography** using Poppins and Inter fonts
- **Glass morphism effects** and gradient backgrounds
- **Responsive design** that works on all devices
- **Accessibility-first** approach with proper contrast and focus states

### 🔧 **Flexible Question Types**
<div align="center">
  <img src="./images/type of questions.png" alt="Question Types Available" width="600"/>
</div>

- **📝 Text Response** - Open-ended answers and feedback
- **☑️ Multiple Choice** - Single or multiple selections with unlimited options
- **⭐ Rating Scale** - Custom scales (1-5, 1-10, 1-100, etc.)
- **📊 Ranking** - Drag & drop priority ordering
- **📅 Date/Time** - Event scheduling and availability
- **📎 File Upload** - Images, documents, any file type
- **⚙️ Custom Fields** - User-defined question types

### 🚀 **Advanced Functionality**
- **Dynamic Form Builder** - Add/remove questions on the fly
- **Rich Descriptions** - Context and instructions for each question
- **Required/Optional** - Full control over question requirements
- **Live Preview** - See exactly how polls will appear
- **Real-time Results** - Beautiful charts and analytics
- **Copy & Duplicate** - Reuse questions across polls

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 15.5.2** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **CSS Custom Properties** - Design system variables

### **Development Tools**
- **Cursor AI** - AI-powered code editor
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Git** - Version control

### **Design System**
- **Color Palette**: Navy (#002c57), Cyan (#12aed8), Green (#04da87)
- **Typography**: Poppins (headings), Inter (body)
- **Spacing**: 8px grid system
- **Components**: Modular, reusable UI components

## 📸 Screenshots

### Landing Page
<div align="center">
  <img src="./images/landing page.png" alt="Professional Landing Page" width="800"/>
</div>

### Poll Creation Interface
<div align="center">
  <img src="./images/create a poll.png" alt="Flexible Poll Creation" width="800"/>
</div>

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rugwiroparfait/alx-polly.git
   cd alx-polly
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
alx-polly/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/              # Dashboard pages
│   │   └── polls/
│   │       ├── [id]/            # Dynamic poll pages
│   │       ├── new/             # Poll creation
│   │       └── page.tsx         # Polls list
│   ├── globals.css              # Global styles & design system
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable components
│   ├── ui/                      # UI component library
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   └── Navbar.tsx               # Navigation component
├── images/                      # Project screenshots
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies
```

## 🎨 Design Principles

### **Visual Hierarchy**
- **Headlines**: Poppins font, bold weight, navy color
- **Body Text**: Inter font, regular weight, optimal line height
- **Spacing**: Consistent 8px grid system
- **Colors**: Professional navy anchor with cyan/green accents

### **User Experience**
- **Minimal & Clean**: Generous whitespace and structured layouts
- **Professional**: Navy blue creates trust and authority
- **Modern**: Geometric typography and flat design elements
- **Accessible**: Proper contrast ratios and focus states

## 🔧 Development Features

### **AI-Assisted Development**
- Built using **Cursor AI** for enhanced productivity
- Intelligent code suggestions and completions
- Automated refactoring and optimization
- Context-aware development assistance

### **Modern React Patterns**
- **Server Components** for optimal performance
- **Client Components** for interactive features
- **Custom Hooks** for state management
- **TypeScript** for type safety

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
# Deploy to Vercel
```

### **Other Platforms**
- **Netlify**: `npm run build && npm run export`
- **Railway**: Connect GitHub repository
- **Docker**: Use provided Dockerfile

## 🤝 Contributing

This project was developed as part of ALX AI for DEV II. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of the ALX AI for DEV II program. See the [ALX License](https://www.alxafrica.com/) for details.

## 👨‍💻 Author

**ALX AI for DEV II Student**
- **Program**: ALX AI for DEV II
- **Development Tool**: Cursor AI
- **Assignment**: Professional Polling Platform

## 🙏 Acknowledgments

- **ALX Africa** for the comprehensive AI for DEV II program
- **Cursor AI** for the powerful development environment
- **Next.js Team** for the amazing React framework
- **Tailwind CSS** for the utility-first CSS approach
- **Lucide** for the beautiful icon library

---

<div align="center">
  <p>Built with ❤️ for ALX AI for DEV II</p>
  <p>Powered by Cursor AI • Next.js • TypeScript</p>
</div>