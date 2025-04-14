import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

// This would come from a database or CMS in a real application
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Software Development',
    excerpt: 'My thoughts on how AI is transforming the tech industry and why software engineers will continue to be valuable despite advancements in artificial intelligence.',
    date: 'April 12, 2025',
    slug: 'future-ai-software-development',
    tags: ['AI', 'Software Development', 'Future Tech']
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
              My thoughts on tech, work and a some things in-between.
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