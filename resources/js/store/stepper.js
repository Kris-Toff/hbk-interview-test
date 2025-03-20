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
    const errors = ref({});

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

    function camelToUnderscore(key) {
        var result = key.replace(/([A-Z])/g, " $1");
        return result.split(" ").join("_").toLowerCase();
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
                    var underscoreKey = camelToUnderscore(key);
                    result[underscoreKey] = currentObject[key];
                }
            }
            return result;
        }, {});

        return resultObject;
    }

    function resetStepper() {
        step.value = 1;
        errors.value = {};
    }

    function submit() {
        const userValid = Object.keys(userStore.errors).length <= 0;
        const contactValid = Object.keys(contactStore.errors).length <= 0;
        const businessValid = Object.keys(businessStore.errors).length <= 0;
        const accountValid = Object.keys(accountStore.errors).length <= 0;

        if (userValid && contactValid && businessValid && accountValid) {
            const payload = mergeObjects();

            router.post("/stepper", payload, {
                onSuccess: (s) => {
                    resetStepper();
                    userStore.resetForm();
                    contactStore.resetForm();
                    businessStore.resetForm();
                    accountStore.resetForm();
                },
                onError: (e) => {
                    errors.value = e;
                },
            });
        } else {
            console.log("invalid");
        }
    }

    return { step, next, prev, errors, submit, handlePrevious };
});
