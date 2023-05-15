import { Navbar } from "@/components/Navbar/Navbar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
