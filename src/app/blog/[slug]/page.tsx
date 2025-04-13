import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    content: `
      <p>Artificial Intelligence is rapidly transforming the landscape of software development. From code generation to automated testing, AI tools are changing how developers work and what they can accomplish.</p>
      
      <h2>Current AI Tools in Software Development</h2>
      
      <p>Several AI-powered tools are already making an impact in the software development world:</p>
      
      <ul>
        <li><strong>Code completion</strong>: Tools that suggest code as you type, learning from patterns in your codebase.</li>
        <li><strong>Automated code review</strong>: AI that can identify bugs, security vulnerabilities, and style issues.</li>
        <li><strong>Test generation</strong>: Systems that can generate test cases based on your code.</li>
        <li><strong>Natural language to code</strong>: Converting requirements in plain English to functional code.</li>
      </ul>
      
      <h2>The Near Future</h2>
      
      <p>In the coming years, we can expect AI to become even more integrated into the development process:</p>
      
      <h3>More Sophisticated Code Generation</h3>
      
      <p>Future AI systems will generate not just small code snippets but entire components or services based on high-level specifications, understanding both the business logic and technical requirements.</p>
      
      <h3>AI-Driven Architecture Decisions</h3>
      
      <p>AI could analyze requirements, existing systems, and best practices to suggest optimal architectural patterns and technology stacks.</p>
      
      <h3>Intelligent Debugging</h3>
      
      <p>Rather than just pointing out bugs, AI could understand the developer's intent and suggest fixes or even implement them automatically.</p>
      
      <p>The rise of AI in software development doesn't mean developers will become obsolete. Instead, the role will evolve to focus more on higher-level thinking, creativity, and guiding AI tools to produce the desired outcomes. The successful developers of tomorrow will be those who learn to work with AI as a powerful partner in the development process.</p>
    `,
    date: 'April 3, 2023',
    slug: 'future-ai-software-development',
    tags: ['AI', 'Software Development', 'Future Tech'],
    author: 'Jakob Valen'
  }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Blog Post Header */}
        <section className="bg-dark-forest text-white py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4 flex justify-center gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-primary/20 text-white/90 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center text-white/80 text-sm">
                <span>By {post.author}</span>
                <span className="mx-2">•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Post Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-muted p-6 md:p-10 rounded-lg shadow-md">
              <div 
                className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-primary"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-12 pt-6 border-t border-foreground/10">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  ← Back to all posts
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 