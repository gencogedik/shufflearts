import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const GoogleDriveButton = () => (
  <div className="w-full flex justify-center bg-white/80 py-3 shadow-md sticky top-0 z-50">
    <a
      href="https://drive.google.com/drive/u/4/folders/1DA-xXZuDi_nmNHYZYNmxKkDsAUr-Yiz3?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-lg shadow"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className="inline-block"><path fill="#2196f3" d="M16.29 6.71 24 20.13l7.71-13.42A2 2 0 0 0 30.06 4H17.94a2 2 0 0 0-1.65 2.71z"/><path fill="#4caf50" d="m6.71 41.29 7.71-13.42H6a2 2 0 0 0-1.71 3l6.42 11.13z"/><path fill="#ffc107" d="M41.29 41.29 24 20.13l-7.71 13.42A2 2 0 0 0 17.94 44h12.12a2 2 0 0 0 1.65-2.71z"/><path fill="#f44336" d="M41.29 41.29 34.87 30.16 24 20.13l7.71-13.42A2 2 0 0 1 41.29 6.71z"/><path fill="#00bcd4" d="M6.71 41.29 13.13 30.16 24 20.13l-7.71-13.42A2 2 0 0 0 6.71 6.71z"/></svg>
      Google Drive
    </a>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleDriveButton />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
