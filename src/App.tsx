import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Inner component that handles routing within the BrowserRouter context
const AppRoutes = () => {
  // For Tempo routes, use useRoutes hook
  const tempoRoutes = import.meta.env.VITE_TEMPO ? useRoutes(routes) : null;

  // If tempo routes matched, render them
  if (tempoRoutes) {
    return tempoRoutes;
  }

  // Otherwise, render the main app routes
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
