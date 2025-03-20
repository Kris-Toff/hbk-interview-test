import { ref } from "vue";
import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, date } from "yup";
import { router } from "@inertiajs/vue3";
import { useStepperStore } from "./stepper";

export const useAccountStore = defineStore("account", () => {
    const stepperStore = useStepperStore();
    const showPassword = ref(false);

    const schema = toTypedSchema(
        object({
            username: string().required("Username is required"),
            password: string().required("Password is required").min(8),
        })
    );

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [username, usernameAttrs] = defineField("username");
    const [password, passwordAttrs] = defineField("password");

    const onSubmit = handleSubmit((v) => {
        stepperStore.next();
        router.visit("/summary", { method: "get" });
    });

    function handlePrevious() {
        stepperStore.prev();
        window.history.back();
    }

    function handlePasswordToggle() {
        showPassword.value = !showPassword.value;
    }

    return {
        username,
        usernameAttrs,
        password,
        passwordAttrs,
        showPassword,
        errors,
        handlePasswordToggle,
        handlePrevious,
        onSubmit,
    };
});
