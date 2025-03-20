import { defineStore } from "pinia";
import { ref } from "vue";

export const useStepperStore = defineStore("stepper", () => {
    const step = ref(1);

    function next() {
        step.value++;
    }

    function prev() {
        step.value--;

        if (step <= 0) step.value = 1;
    }

    return { step, next, prev };
});
