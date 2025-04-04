
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Legal from "./pages/Legal";
import LegalPrivacy from "./pages/LegalPrivacy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";
import ADHDStory from "./pages/ADHDStory";
import Homelab from "./pages/Homelab";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="theme-preference">
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/adhd-story" element={<ADHDStory />} />
              <Route path="/homelab" element={<Homelab />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/legal/privacy" element={<LegalPrivacy />} />
              <Route path="/legal/notice" element={<LegalNotice />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
