
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Calendar, Clock } from "lucide-react";

interface ArticleData {
  title: string;
  content: string;
  isPublished: boolean;
  dateCreated: string;
  dateModified: string;
}

const ArticleView = () => {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadArticle = () => {
      setIsLoading(true);
      const savedPages = localStorage.getItem("markdown-pages");
      
      if (savedPages) {
        const parsedPages: ArticleData[] = JSON.parse(savedPages);
        
        // Find the article that matches the slug
        const normalizedSlug = slug?.toLowerCase();
        const foundArticle = parsedPages.find(page => 
          page.title.replace(/\s+/g, '-').toLowerCase() === normalizedSlug && 
          page.isPublished
        );
        
        if (foundArticle) {
          setArticle(foundArticle);
          document.title = `${foundArticle.title} | Johannes Nguyen`;
        } else {
          setNotFound(true);
          document.title = "Article Not Found | Johannes Nguyen";
        }
      } else {
        setNotFound(true);
      }
      
      setIsLoading(false);
    };
    
    loadArticle();
  }, [slug]);

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate read time based on content
  const calculateReadTime = (content: string): number => {
    const wordsPerMinute = 200;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-muted rounded w-1/2 mb-12"></div>
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-full"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (notFound) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-6">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or may have been unpublished.
            </p>
            <Button asChild>
              <Link to="/#articles">Back to Articles</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-4 -ml-2">
              <Link to="/#articles" className="flex items-center">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Articles
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article?.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {article ? formatDate(article.dateModified) : ""}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article ? calculateReadTime(article.content) : 0} min read
              </div>
            </div>
          </div>
          
          <div className="prose prose-stone dark:prose-invert max-w-none">
            {article && <ReactMarkdown>{article.content}</ReactMarkdown>}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticleView;
