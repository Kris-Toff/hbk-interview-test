import { defineStore } from "pinia";
import { ref } from "vue";
import { router } from "@inertiajs/vue3";

import { useUserStore } from "./user";
import { useContactStore } from "./contact";
import { useBusinessStore } from "./business";
import { useAccountStore } from "./account";

export const useStepperStore = defineStore("stepper", () => {
    const userStore = useUserStore();
    const contactStore = useContactStore();
    const businessStore = useBusinessStore();
    const accountStore = useAccountStore();
    const step = ref(1);

    function next() {
        step.value++;
    }

    function prev() {
        step.value--;

        if (step <= 0) step.value = 1;
    }

    function handlePrevious() {
        prev();
        window.history.back();
    }

    function mergeObjects() {
        const arrObj = [
            userStore.values,
            contactStore.values,
            businessStore.values,
            accountStore.values,
        ];

        var resultObject = arrObj.reduce(function (result, currentObject) {
            for (var key in currentObject) {
                if (currentObject.hasOwnProperty(key)) {
                    result[key] = currentObject[key];
                }
            }
            return result;
        }, {});

        return resultObject;
    }

    function submit() {
        const userValid = Object.keys(userStore.errors).length <= 0;
        const contactValid = Object.keys(contactStore.errors).length <= 0;
        const businessValid = Object.keys(businessStore.errors).length <= 0;
        const accountValid = Object.keys(accountStore.errors).length <= 0;

        if (userValid && contactValid && businessValid && accountValid) {
            const payload = mergeObjects();

            router.post("/stepper", payload);
            console.log("valid");
            console.log(userStore.values);
        } else {
            console.log("invalid");
        }
    }

    return { step, next, prev, submit, handlePrevious };
});
