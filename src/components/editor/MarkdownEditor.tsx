
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Edit, Download, Copy, Save } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";

interface MarkdownEditorProps {
  initialContent?: string;
}

export function MarkdownEditor({ initialContent = "" }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState(initialContent);
  const [savedPages, setSavedPages] = useState<{ title: string; content: string }[]>([]);
  const [currentPageTitle, setCurrentPageTitle] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("markdown-pages");
    if (saved) {
      setSavedPages(JSON.parse(saved));
    }
  }, []);

  const savePage = () => {
    if (!currentPageTitle.trim()) {
      toast.error("Please enter a page title");
      return;
    }

    const newPages = [
      ...savedPages.filter(page => page.title !== currentPageTitle),
      { title: currentPageTitle, content: markdown }
    ];
    
    setSavedPages(newPages);
    localStorage.setItem("markdown-pages", JSON.stringify(newPages));
    toast.success(`Page "${currentPageTitle}" saved successfully`);
  };

  const loadPage = (title: string) => {
    const page = savedPages.find(p => p.title === title);
    if (page) {
      setMarkdown(page.content);
      setCurrentPageTitle(page.title);
      toast.info(`Loaded "${title}"`);
    }
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${currentPageTitle || "markdown"}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("Downloaded markdown file");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        <div className="flex gap-4 items-end mb-4">
          <div className="flex-1">
            <label htmlFor="page-title" className="block text-sm font-medium mb-1">
              Page Title
            </label>
            <input
              id="page-title"
              type="text"
              value={currentPageTitle}
              onChange={(e) => setCurrentPageTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter page title"
            />
          </div>
          <Button 
            onClick={savePage} 
            className="flex items-center gap-1"
          >
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>

        {savedPages.length > 0 && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Saved Pages</label>
            <div className="flex flex-wrap gap-2">
              {savedPages.map((page) => (
                <Button
                  key={page.title}
                  variant="outline"
                  size="sm"
                  onClick={() => loadPage(page.title)}
                >
                  {page.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      <Tabs defaultValue="edit" className="w-full">
        <div className="flex justify-between items-center mb-2">
          <TabsList>
            <TabsTrigger value="edit" className="flex items-center gap-1">
              <Edit className="h-4 w-4" />
              Edit
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              Preview
            </TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={copyToClipboard}
              className="flex items-center gap-1"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadMarkdown}
              className="flex items-center gap-1"
            >
              <Download className="h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        
        <TabsContent value="edit" className="mt-0">
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="font-mono min-h-[60vh] resize-none p-4"
            placeholder="# Start writing Markdown here..."
          />
        </TabsContent>
        
        <TabsContent value="preview" className="mt-0">
          <div className="min-h-[60vh] border rounded-md p-4 bg-card overflow-auto markdown">
            {markdown ? (
              <ReactMarkdown>{markdown}</ReactMarkdown>
            ) : (
              <p className="text-muted-foreground italic">Preview will appear here...</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
