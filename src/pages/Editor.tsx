
import { Layout } from "@/components/layout/Layout";
import { MarkdownEditor } from "@/components/editor/MarkdownEditor";

const Editor = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Markdown Editor</h1>
          <p className="text-muted-foreground mb-8">
            Create, edit, and save markdown content for your portfolio pages. Your work is automatically saved to your browser's local storage.
          </p>
          
          <MarkdownEditor />
        </div>
      </div>
    </Layout>
  );
};

export default Editor;
