// import { toast } from "@/components/ui/toast";
import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";

function handleGlobalError(error: unknown) {
    const message = error instanceof Error ? error.message : "An unexpected error occurred.";
    console.error("[IPC Error Caught]:", error);

    // toast.add({ type: "error", title: message });
    console.error("ERROR", message);
}

export const queryClient = new QueryClient({
    queryCache: new QueryCache({ onError: (error) => handleGlobalError(error) }),
    mutationCache: new MutationCache({ onError: (error) => handleGlobalError(error) }),
});
