
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Articles() {
  const articles = [
    {
      title: "My Homelab: Exploring Three Proxmox Nodes",
      date: "Jun 9, 2024",
      excerpt: "In the realm of home labs, the pursuit of building and experimenting with various server configurations is a passion shared by many enthusiasts. In this article, I'll take you through my personal homelab setup, comprising three Proxmox nodes, each serving a specific purpose within my network infrastructure.",
      link: "#"
    },
    {
      title: "The Life of NJ: Growing Up with ADHD as a Child of Vietnamese Immigrants in Germany",
      date: "Jul 30, 2024",
      excerpt: "Life can be a complex journey, and for someone with ADHD, the path is often filled with unique challenges and triumphs. This manuscript explores my life, growing up with ADHD as the oldest child of Vietnamese immigrants in Germany, and the various experiences that have shaped who I am today.",
      link: "#"
    }
  ];

  return (
    <section id="articles" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Articles</h2>
          <p className="text-lg text-muted-foreground">
            My latest thoughts, experiences, and technical insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow h-full flex flex-col">
              <CardHeader className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{article.date}</div>
                <CardTitle className="text-2xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <p className="text-muted-foreground mb-6 line-clamp-4">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <a href={article.link}>
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
