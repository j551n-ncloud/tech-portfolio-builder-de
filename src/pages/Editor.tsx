
import { Layout } from "@/components/layout/Layout";
import { MarkdownEditor } from "@/components/editor/MarkdownEditor";
import { LoginForm } from "@/components/auth/LoginForm";
import { ProfileForm } from "@/components/auth/ProfileForm";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, LogOut, User } from "lucide-react";

const Editor = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {isAuthenticated ? (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Markdown Editor</h1>
                <p className="text-muted-foreground">
                  Welcome back, {user?.name}
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={logout}
                className="flex items-center gap-2 hover:bg-destructive/10"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
            
            <Tabs defaultValue="editor" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="editor" className="flex items-center gap-1">
                  <Edit className="h-4 w-4" />
                  Editor
                </TabsTrigger>
                <TabsTrigger value="profile" className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="editor" className="mt-0">
                <MarkdownEditor />
              </TabsContent>
              
              <TabsContent value="profile" className="mt-0">
                <ProfileForm />
              </TabsContent>
            </Tabs>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Access Required</h1>
            <p className="text-muted-foreground text-center mb-8">
              Please log in to access the markdown editor. Your content is securely stored.
            </p>
            
            <LoginForm />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Editor;
