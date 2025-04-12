import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Building Resilient Systems with Kubernetes',
    content: `
      <p>In the ever-evolving landscape of cloud-native applications, building resilient systems is paramount. Kubernetes has emerged as a powerful platform for orchestrating containerized applications, but achieving true resilience requires more than just deploying your applications on a cluster.</p>
      
      <h2>What Makes a System Resilient?</h2>
      
      <p>Resilience in distributed systems is the ability to withstand and recover from failures. This encompasses several key aspects:</p>
      
      <ul>
        <li><strong>Fault tolerance</strong>: The system continues to function despite component failures.</li>
        <li><strong>Self-healing</strong>: The system automatically detects and repairs failures.</li>
        <li><strong>Scalability</strong>: The ability to handle increased load by adding resources.</li>
        <li><strong>Redundancy</strong>: Critical components have backups ready to take over.</li>
      </ul>
      
      <h2>Kubernetes Patterns for Resilience</h2>
      
      <p>Here are some patterns that can enhance the resilience of your Kubernetes deployments:</p>
      
      <h3>1. Liveness and Readiness Probes</h3>
      
      <p>Kubernetes provides mechanisms to check the health of your applications through liveness and readiness probes. Liveness probes determine if an application is running properly, while readiness probes indicate if an application is ready to receive traffic.</p>
      
      <h3>2. Pod Disruption Budgets</h3>
      
      <p>Pod Disruption Budgets (PDBs) limit the number of pods that can be down simultaneously during voluntary disruptions like cluster upgrades, ensuring your application remains available.</p>
      
      <h3>3. Horizontal Pod Autoscaling</h3>
      
      <p>Horizontal Pod Autoscalers automatically adjust the number of pod replicas based on observed metrics like CPU utilization or custom metrics, helping your application handle varying loads.</p>
      
      <p>Building truly resilient systems with Kubernetes requires careful planning and implementation of these patterns and more. By focusing on resilience from the ground up, you can create systems that not only survive in the face of adversity but continue to provide value to your users.</p>
    `,
    date: 'May 15, 2023',
    slug: 'building-resilient-systems-kubernetes',
    tags: ['Kubernetes', 'DevOps', 'Platform Engineering'],
    author: 'Jakob Valen'
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    title: 'Vancouver Island: A Tech Hub in the Making',
    content: `
      <p>Nestled off the west coast of British Columbia, Vancouver Island is known for its stunning natural beauty, temperate climate, and relaxed lifestyle. But increasingly, it's also becoming known for something else: a thriving tech scene.</p>
      
      <h2>Why Tech Companies Are Moving to Vancouver Island</h2>
      
      <p>Several factors are driving this trend:</p>
      
      <h3>Quality of Life</h3>
      
      <p>With its beaches, forests, mountains, and mild climate, Vancouver Island offers an unparalleled quality of life. Tech workers can enjoy outdoor activities year-round, from hiking and kayaking to skiing and surfing.</p>
      
      <h3>Remote Work Revolution</h3>
      
      <p>The pandemic accelerated the shift to remote work, making location less important for many tech roles. This has allowed tech workers to choose where they want to live based on lifestyle rather than proximity to an office.</p>
      
      <h3>Lower Cost of Living</h3>
      
      <p>While not cheap, many areas of Vancouver Island offer a lower cost of living compared to tech hubs like San Francisco, Seattle, or even Vancouver.</p>
      
      <h2>The Growing Tech Ecosystem</h2>
      
      <p>Vancouver Island, particularly Victoria, is seeing growth in various tech sectors:</p>
      
      <ul>
        <li><strong>Gaming and entertainment</strong>: Several game development studios have set up shop on the island.</li>
        <li><strong>Clean tech</strong>: Companies focusing on sustainable solutions are thriving in this environmentally conscious region.</li>
        <li><strong>Ocean technology</strong>: Given its coastal location, marine tech innovation is a natural fit.</li>
        <li><strong>Remote work enablement</strong>: Tools and services supporting the distributed workforce are being developed by those living the remote lifestyle.</li>
      </ul>
      
      <p>As more tech professionals and companies discover the benefits of island living, we can expect Vancouver Island's tech ecosystem to continue growing, creating a unique blend of west coast lifestyle and cutting-edge innovation.</p>
    `,
    date: 'March 12, 2023',
    slug: 'vancouver-island-tech-hub',
    tags: ['Vancouver Island', 'Tech Industry', 'Remote Work'],
    author: 'Jakob Valen'
  },
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