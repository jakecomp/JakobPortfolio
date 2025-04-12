# Jakob's Vancouver Island Portfolio

A west coast themed developer portfolio website showcasing skills, experience, projects, and a blog.

## Features

- Modern, responsive design with a Vancouver Island / West Coast theme
- Interactive components built with Next.js and React
- Portfolio sections including:
  - About Me
  - Experience & Education
  - Projects
  - Contact Form
- Blog with sample articles
- Smooth animations with Framer Motion
- Dark and light mode with a west coast inspired color palette

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Ready for deployment on Vercel (or other platforms)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd my-webpage
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - React components
  - `/layout` - Layout components (Navbar, Footer)
  - `/home` - Homepage section components
  - `/blog` - Blog related components
  - `/ui` - Reusable UI components
- `/public` - Static assets

## Customization

1. Update personal information in the component files
2. Add your own projects to the `Projects.tsx` component
3. Write your own blog posts in the blog data
4. Customize the color scheme in `globals.css`
5. Add your own images to the `/public/images` directory

## Deployment

This project is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-webpage)

### Other Deployment Options

- **GitHub Pages**: Build the site and push to a gh-pages branch
- **Netlify**: Connect your GitHub repository for continuous deployment
- **AWS Amplify**: For deployment with AWS services

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from the natural beauty of Vancouver Island
- Images from [placeholder source]
