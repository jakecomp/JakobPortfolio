import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
            Page Not Found
          </h2>
          <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-8">
            Looks like you've wandered off the trail. The page you're looking for has drifted away with the tide.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
          >
            Return to shore
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 