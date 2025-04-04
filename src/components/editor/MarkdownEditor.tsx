
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Eye, Edit, Download, Copy, Save, FileText, Globe, Lock } from "lucide-react";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface MarkdownEditorProps {
  initialContent?: string;
}

interface PageData {
  title: string;
  content: string;
  isPublished: boolean;
  dateCreated: string;
  dateModified: string;
}

export function MarkdownEditor({ initialContent = "" }: MarkdownEditorProps) {
  const [markdown, setMarkdown] = useState(initialContent);
  const [savedPages, setSavedPages] = useState<PageData[]>([]);
  const [currentPageTitle, setCurrentPageTitle] = useState("");
  const [isPublished, setIsPublished] = useState(true);
  const [quickLinks, setQuickLinks] = useState<string[]>([]);
  const [showQuickLinksDialog, setShowQuickLinksDialog] = useState(false);
  const [newQuickLink, setNewQuickLink] = useState("");

  useEffect(() => {
    // Load saved pages
    const saved = localStorage.getItem("markdown-pages");
    if (saved) {
      setSavedPages(JSON.parse(saved));
    }
    
    // Load quick links
    const links = localStorage.getItem("quick-links");
    if (links) {
      setQuickLinks(JSON.parse(links));
    } else {
      // Default quick links
      const defaultLinks = ["Home", "About", "Projects", "Contact"];
      setQuickLinks(defaultLinks);
      localStorage.setItem("quick-links", JSON.stringify(defaultLinks));
    }
  }, []);

  const savePage = () => {
    if (!currentPageTitle.trim()) {
      toast.error("Please enter a page title");
      return;
    }

    const now = new Date().toISOString();
    const existingPageIndex = savedPages.findIndex(page => page.title === currentPageTitle);
    
    let newPages;
    if (existingPageIndex >= 0) {
      // Update existing page
      newPages = [...savedPages];
      newPages[existingPageIndex] = {
        ...newPages[existingPageIndex],
        content: markdown,
        isPublished,
        dateModified: now
      };
    } else {
      // Add new page
      newPages = [
        ...savedPages, 
        { 
          title: currentPageTitle, 
          content: markdown, 
          isPublished, 
          dateCreated: now,
          dateModified: now
        }
      ];
    }
    
    setSavedPages(newPages);
    localStorage.setItem("markdown-pages", JSON.stringify(newPages));
    toast.success(`Page "${currentPageTitle}" saved successfully`);
  };

  const loadPage = (title: string) => {
    const page = savedPages.find(p => p.title === title);
    if (page) {
      setMarkdown(page.content);
      setCurrentPageTitle(page.title);
      setIsPublished(page.isPublished);
      toast.info(`Loaded "${title}"`);
    }
  };

  const togglePublishStatus = () => {
    const existingPage = savedPages.find(p => p.title === currentPageTitle);
    
    if (existingPage) {
      // Update publish status in savedPages
      const newPages = savedPages.map(page => 
        page.title === currentPageTitle 
          ? { ...page, isPublished: !isPublished } 
          : page
      );
      
      setSavedPages(newPages);
      setIsPublished(!isPublished);
      localStorage.setItem("markdown-pages", JSON.stringify(newPages));
      
      toast.success(`Page "${currentPageTitle}" ${!isPublished ? 'published' : 'unpublished'}`);
    } else if (currentPageTitle) {
      // Just update the current state if it's a new unsaved page
      setIsPublished(!isPublished);
      toast.info(`Draft status updated. Don't forget to save your changes.`);
    } else {
      toast.error("Please enter a page title first");
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
  
  const handleAddQuickLink = () => {
    if (newQuickLink.trim()) {
      const updatedLinks = [...quickLinks, newQuickLink.trim()];
      setQuickLinks(updatedLinks);
      localStorage.setItem("quick-links", JSON.stringify(updatedLinks));
      setNewQuickLink("");
      toast.success(`Added "${newQuickLink}" to Quick Links`);
    }
  };
  
  const handleRemoveQuickLink = (index: number) => {
    const updatedLinks = quickLinks.filter((_, i) => i !== index);
    setQuickLinks(updatedLinks);
    localStorage.setItem("quick-links", JSON.stringify(updatedLinks));
    toast.success("Removed from Quick Links");
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
          <div className="flex items-center gap-2">
            <Button 
              variant={isPublished ? "default" : "outline"}
              onClick={togglePublishStatus}
              className="flex items-center gap-1"
              size="sm"
            >
              {isPublished ? <Globe className="h-4 w-4" /> : <Lock className="h-4 w-4" />}
              {isPublished ? "Published" : "Draft"}
            </Button>
            <Button 
              onClick={savePage} 
              className="flex items-center gap-1"
            >
              <Save className="h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium">Pages</label>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setShowQuickLinksDialog(true)}
              className="text-sm"
            >
              Manage Quick Links
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {savedPages.map((page) => (
              <Button
                key={page.title}
                variant="outline"
                size="sm"
                onClick={() => loadPage(page.title)}
                className="flex items-center gap-1"
              >
                <FileText className="h-3 w-3" />
                {page.title}
                {!page.isPublished && <Lock className="h-3 w-3 ml-1 text-muted-foreground" />}
              </Button>
            ))}
          </div>
        </div>
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
      
      {/* Quick Links Dialog */}
      <Dialog open={showQuickLinksDialog} onOpenChange={setShowQuickLinksDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Quick Links</DialogTitle>
            <DialogDescription>
              Add or remove quick links that appear in the navigation.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-end gap-2">
              <div className="flex-1">
                <Label htmlFor="new-link">New Quick Link</Label>
                <Input 
                  id="new-link" 
                  value={newQuickLink} 
                  onChange={(e) => setNewQuickLink(e.target.value)}
                  placeholder="Enter link name"
                />
              </div>
              <Button onClick={handleAddQuickLink}>Add</Button>
            </div>
            
            <div className="space-y-2">
              <Label>Current Quick Links</Label>
              {quickLinks.map((link, index) => (
                <div key={index} className="flex justify-between items-center p-2 border rounded">
                  <span>{link}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleRemoveQuickLink(index)}
                    className="text-destructive hover:text-destructive/90"
                  >
                    Remove
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <DialogFooter>
            <Button onClick={() => setShowQuickLinksDialog(false)}>
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
