import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// This would come from a database or CMS in a real application
const blogPosts = [
  {
    id: 1,
    title: 'Building Resilient Systems with Kubernetes',
    excerpt: 'Exploring strategies for creating resilient, self-healing systems using Kubernetes and modern DevOps practices.',
    date: 'May 15, 2023',
    slug: 'building-resilient-systems-kubernetes',
    tags: ['Kubernetes', 'DevOps', 'Platform Engineering']
  },
  {
    id: 2,
    title: 'The Future of AI in Software Development',
    excerpt: 'How AI tools are changing the landscape of software development and what developers can do to stay ahead of the curve.',
    date: 'April 3, 2023',
    slug: 'future-ai-software-development',
    tags: ['AI', 'Software Development', 'Future Tech']
  },
  {
    id: 3,
    title: 'Vancouver Island: A Tech Hub in the Making',
    excerpt: 'Exploring the growing tech scene on Vancouver Island and why more tech companies are setting up shop in this beautiful corner of Canada.',
    date: 'March 12, 2023',
    slug: 'vancouver-island-tech-hub',
    tags: ['Vancouver Island', 'Tech Industry', 'Remote Work']
  },
  {
    id: 4,
    title: 'Optimizing Developer Workflows with Custom Tools',
    excerpt: 'Creating custom developer tools to streamline your workflow and boost productivity without sacrificing quality.',
    date: 'February 28, 2023',
    slug: 'optimizing-developer-workflows-custom-tools',
    tags: ['Developer Tools', 'Productivity', 'Workflow']
  },
  {
    id: 5,
    title: 'Sustainable Software: Reducing Your Carbon Footprint',
    excerpt: 'How to write more efficient code and design systems that minimize environmental impact while maintaining performance.',
    date: 'January 15, 2023',
    slug: 'sustainable-software-reducing-carbon-footprint',
    tags: ['Sustainability', 'Green Computing', 'Optimization']
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Blog Header */}
        <section className="bg-dark-forest text-white py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Thoughts, stories, and insights from a Vancouver Island developer's perspective
            </p>
          </div>
        </section>
        
        {/* Blog Posts List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="mb-12 p-6 bg-muted rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="block"
                  >
                    <div className="mb-2 text-sm text-primary/80">{post.date}</div>
                    <h2 className="text-2xl font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-foreground/70 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 