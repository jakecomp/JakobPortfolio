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
      <p>For my first blog post I would be remiss if I didn't talk about arguably the biggest pheominia that has happened in the tech industry since the dawn of the internet. Artificial Intelligence is rapidly transforming the landscape of software development. From code generation to automated testing, AI tools are changing not only how development is done, but who contributes to software projects.</p>
      <br />
      <p>This very website was "vide coded" using Claud Sonnet 3.7 + Cursor, with very little course correction on my part. These advancements have lead some to declare that the software engineering profession will soon no longer exist, with others stating that soon next gen AI models with replace all knowledge workers outright. As a Software Engineer, articles like these certainly raise my eyebrows, but I think the future of software engineering is far from over. One may think I'm biased, and that "of course" I don't think software engineering is going away, given the fact that it's my very career. There is no doubt some truth in this, so I advise hearing what I have to say with a grain of salt, but I do believe there are fundamental reasons as to why my profession isn't on the way out the door.</p>
      <br />
      <h2><strong>Previous Advancements in Software Development have Lead to More Engineers Not Fewer</strong></h2>
      
      <p>I remember when I was in University no code tools like Wix, WordPress, and Framer caused waves of anxiety for students like myself. It sparked fears that soon our skill set will no longer be required in the work force. Not only did this turned out to be not the case, these tools had the opposite effect.
        By allowing more people to express their project, business, or platform through software, the demand for software skills with those tools surged. Take for example, my current position as a Platform Engineer. 20 years ago, my job didn't exist. "The Cloud" didn't exist, scalable and distributed systems were just coming onto the scene, and developers where dealing with fundamentally different problems than the ones I deal with today.</p>
      <br />
      <p>When cloud technology emerged, an explosion of demand for a new skill set came with it. Sure, some of the skills that where previously valuable became less sought after. Despite this, those who were willing to embrace change and build on their current skill set, where able to easily transition into new careers. I believe this is also true for the latest surge in AI. We are very much in the early days still of understanding where this technology is going, but I believe those who are life long learners, will also find a meaningful career in tech.</p>
      <br />
      <h2><strong>We don't know what we don't know</strong></h2>
      
      <p>When web development first arose in the 1990s, nobody knew (or at least had a solid understanding) of the types of problems that would arise for the modern web. Problems like:</p>
      <br />
      <ul class="list-disc pl-6 space-y-2">
        <li>How do we scale for 1 million, 10 million, 100 million users</li>
        <li>How do we protect against DDOS, SQL injections, or session hijacking</li>
        <li>How do we continuously deploy new features while maintaining reliability for the growing demand of users</li>
      </ul>
      <br />
      <p>It wasn't until we started further exploring this new space in technology that we started to understand the problems modern web developers would face. The same is true for AI.</p>
      
      <p>While the advancements in AI has been amazing, it is not without it's shortcomings. When AI systems make a mistake, these models can quickly fall down weird, and seemingly mysterious rabbit holes. New security exploits are constantly being discovered, and AI systems, no matter how robust, still hallucinate.</p>
      <br />
      <p>I believe we are at the tip of the iceberg of fully understanding the new problem space we are entering, and I highly doubt LLMs are a silver bullet for all future problems we face. These tools are extremely powerful, but I don't believe them to be the "be all and end all" for all problems developers and business will encounter in the future.</p>
      <br />
      <h2><strong>Software is never Done</strong></h2>
      
      <p>No successful business finds a solution that works for their clients, and then simply stop innovating. New innovations come, client demands change, and what's exceptional today is sub-par tomorrow. Software is no different.The minute, you commit code, it becomes legacy. All software ages and eventually decays. Some, certainly, at different rates, but no matter how robust, clever, or elegant, software will decay to the point of being useless.</p>
      <br />
      <p>Yes, there are long living software projects that have been wildly successful like like Linux, and Git, but those projects are constantly evolving. They are supported by a wide breadth of contributors, and constantly change to meet the new requirements for those that depend on them. I mention this because I believe the winners in tech won't be the ones who do the same with less resources. They will be the ones that empower themselves and their team to further innovate with this breakthrough in AI.</p>
      <br />
      <p>This very website would have been considered bleeding edge technology 20+ years ago with a whole team to develop, deploy and maintain it. Now, I can simply whip it up myself with tools like Cursor and Vercel. Despite this, I still have a job, and still work with a team of talented engineers solving every increasingly complex and difficult problems. With AI, the bar for what is considered good or valuable will (and has) increased. Software is never done, and just because AI can provide valuable solutions today, does not guarantee it can solve all valuable problems tomorrow.</p>
      <br />
      <h2><strong>Final Thoughts</strong></h2>
      
      <p>While the latest advancements in AI have been groundbreaking, I don't see the software engineering profession, let alone all knowledge work, becoming obsolete anytime soon.</p>
      
      <p>My career field is that of constant change. The problems I solve 5 years from now will undoubtedly be vastly different than the ones I solve today. That is the very reason why I love this as a career.</p>
      <br />
      <p>My job is bound to change, and I look forward to solving problems I can't even comprehend today. So please, take a deep breath, and continue to expand your horizons. In the words of the great Steve Smith, "Keep your stick on the ice".</p>
    `,
    date: 'April 12, 2025',
    slug: 'future-ai-software-development',
    tags: ['AI', 'Software Development', 'Future Tech'],
    author: 'Jakob Valen'
  }
];

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: { slug: string }
}

export default function BlogPostPage({ params }: Props) {
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