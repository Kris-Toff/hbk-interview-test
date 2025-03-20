import { router } from "@inertiajs/vue3";

export function usePageGuard() {
    const stepperGuard = (step) => {
        if (step <= 1) router.visit("/", { method: "get" });
    };

    return { stepperGuard };
}
