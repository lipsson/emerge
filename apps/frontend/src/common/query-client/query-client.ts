import { captureException } from "@sentry/react";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import axios from "axios";

const onError = (error: unknown) => {
  if (axios.isAxiosError(error) && (error.status ?? 0) >= 500) {
    captureException(error);
  }
};

// refetch after 15 seconds
export const REFETCH_INTERVAL_TIME_FOR_LIST = 1000 * 15;

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError,
      retry: false,
    },
    queries: {
      retry: 0,
      staleTime: 5000,
      refetchOnWindowFocus: false,
      retryDelay: 5000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof Error) {
        console.log({
          name: error.name,
          message: error.message,
          stack: error.stack,
        });
      } else {
        console.log("Nieznany błąd:", error);
      }

      // if (error?.response?.status !== 404)
      //   // cache-level queries error handler
      //   toast.error(`API Error: ${error.message}`);
    },
  }),
  mutationCache: new MutationCache({
    onError: (_error, _, __, mutation) => {
      // cache-level mutations error handler
      const { mutationKey } = mutation.options;
      console.log(
        `API Mutation Error ${mutationKey ? `: ${mutation?.state?.failureReason?.message as unknown as string}` : ""}`,
      );
    },
  }),
});

export const mockQueryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError,
      retry: false,
    },
    queries: {},
  },
});
