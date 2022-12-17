import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
// import SearchParams from "./SearchParams";
// import Details from "./Details";
import ErrorBoundary from "./ErrorBoundary";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

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
    <div className="m-0 p-0">
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <ErrorBoundary>
            <Suspense
              fallback={
                <div className="loading-pane">
                  <h2 className="loader">🐬</h2>
                </div>
              }
            >
              <header className="main-header mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
                <Link
                  to="/"
                  className="text-6xl text-white hover:text-gray-200"
                >
                  Playground
                </Link>
              </header>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
