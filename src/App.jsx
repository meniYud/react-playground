import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <ErrorBoundary>
              <header className="main-header">
                <Link to="/">Playground</Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </ErrorBoundary>
          </AdoptedPetContext.Provider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
