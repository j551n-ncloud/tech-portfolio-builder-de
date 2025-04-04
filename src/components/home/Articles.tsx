
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface ArticleData {
  title: string;
  content: string;
  isPublished: boolean;
  dateCreated: string;
  dateModified: string;
}

export function Articles() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  
  useEffect(() => {
    // Load saved pages from localStorage
    const savedPages = localStorage.getItem("markdown-pages");
    if (savedPages) {
      // Filter only published pages
      const publishedArticles = JSON.parse(savedPages).filter(
        (page: ArticleData) => page.isPublished
      );
      setArticles(publishedArticles);
    }
  }, []);

  // Extract tags from markdown content
  const extractTags = (content: string): string[] => {
    // Simple implementation - look for hashtags
    const tagRegex = /#([a-zA-Z0-9]+)/g;
    const matches = content.match(tagRegex);
    
    if (matches) {
      return matches.map(tag => tag.substring(1)).slice(0, 3); // Remove # and limit to 3 tags
    }
    
    // Default tags if none found
    return ["Article"];
  };
  
  // Extract excerpt from markdown content
  const extractExcerpt = (content: string): string => {
    // Remove headers and other markdown syntax
    const plainText = content
      .replace(/#+\s+/g, '') // Remove headers
      .replace(/\*\*/g, '')  // Remove bold
      .replace(/\*/g, '')    // Remove italic
      .replace(/\[.*?\]\(.*?\)/g, '') // Remove links
      .trim();
      
    // Take first 200 characters as excerpt
    return plainText.length > 200 
      ? plainText.substring(0, 200) + '...'
      : plainText;
  };

  // Format date for display
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (articles.length === 0) {
    return (
      <section id="articles" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
            <h2 className="text-3xl font-bold mb-4">Articles</h2>
            <p className="text-lg text-muted-foreground">
              My latest thoughts, experiences, and technical insights
            </p>
          </div>
          
          <div className="max-w-lg mx-auto text-center p-8 border border-dashed rounded-lg">
            <p className="text-muted-foreground mb-4">No published articles yet.</p>
            <Button asChild>
              <Link to="/editor">Create an Article</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Articles</h2>
          <p className="text-lg text-muted-foreground">
            My latest thoughts, experiences, and technical insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] h-full flex flex-col group dark:bg-card/80 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-6 pb-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {extractTags(article.content).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {formatDate(article.dateModified)}
                </div>
                <CardTitle className="text-2xl group-hover:text-tech-600 dark:group-hover:text-tech-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-4 flex-grow flex flex-col">
                <p className="text-muted-foreground mb-6 line-clamp-4 flex-grow">
                  {extractExcerpt(article.content)}
                </p>
                <Button variant="outline" className="mt-auto w-fit group-hover:bg-tech-50 dark:group-hover:bg-tech-900/20">
                  <Link to={`/articles/${article.title.replace(/\s+/g, '-').toLowerCase()}`} className="flex items-center">
                    Read more 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
