Thought for 2 seconds### Job Board Platform

A modern job board application built with Next.js 14, Tailwind CSS, and TypeScript. This platform connects job seekers with employers through an intuitive interface with powerful search and filtering capabilities.

## 🔗 Live Demo

[View Live Demo](https://v0-next-js-job-board-green.vercel.app/)

## ✨ Features

### For Job Seekers

- Browse and search job listings with advanced filters
- View detailed job information including requirements and benefits
- Apply to jobs with a comprehensive application form
- Save favorite jobs for later
- User profile management


### For Employers

- Post and manage job listings
- Company dashboard with statistics
- Review and manage applications
- Company profile management


### General Features

- Responsive design for all devices
- Dark mode support
- Authentication and authorization
- Real-time validation


## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zod](https://github.com/colinhacks/zod) - Schema validation
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Shadcn UI](https://ui.shadcn.com/) - UI component library
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [date-fns](https://date-fns.org/) - Date manipulation


## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm, yarn, or pnpm


### Installation

1. Clone the repository

```shellscript
git clone https://github.com/Sujeet2705/Job-Portal.git
```


2. Navigate to the project directory

```shellscript
cd Job-Portal
```


3. Install dependencies

```shellscript
npm install
# or
yarn install
# or
pnpm install
```


4. Start the development server

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```


5. Open [http://localhost:3000](http://localhost:3000) in your browser


## 📖 Usage

### Browsing Jobs

- Use the search bar to find jobs by title or keywords
- Apply filters to narrow down results by location, job type, or salary
- Click on a job card to view detailed information
- Use the pagination controls to navigate through job listings


### Applying for Jobs

1. Navigate to a job details page
2. Click the "Apply Now" button
3. Fill out the application form with your information
4. Upload your resume
5. Submit your application


### Posting Jobs (Employers)

1. Log in to your employer account
2. Navigate to the dashboard
3. Click "Post New Job"
4. Fill out the job details form
5. Submit the job listing


### Authentication

- Use the register page to create a new account
- Choose between "Job Seeker" and "Employer" roles
- Use the login page to access your account


## 📁 Project Structure

```plaintext
Job-Portal/
├── app/                  # Next.js App Router pages
│   ├── auth/             # Authentication pages
│   ├── dashboard/        # Dashboard pages
│   ├── jobs/             # Job-related pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/           # React components
│   ├── dashboard/        # Dashboard components
│   ├── forms/            # Form components
│   ├── jobs/             # Job-related components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── lib/                  # Utilities and services
│   ├── services/         # API service functions
│   ├── store/            # Zustand stores
│   └── validations/      # Zod schemas
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🧪 Mock Data

This project uses mock data for development purposes. In a production environment, you would connect to a real backend API.

### Test Accounts

- **Employer Account**:

- Email: [john@example.com](mailto:john@example.com)
- Password: any password will work with the mock service



- **Job Seeker Account**:

- Email: [jane@example.com](mailto:jane@example.com)
- Password: any password will work with the mock service





## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Vercel](https://vercel.com) for hosting


---

Created with ❤️ by [Ch Sujith]
