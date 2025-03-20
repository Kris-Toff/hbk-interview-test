import { ref } from "vue";
import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, date } from "yup";
import { useStepperStore } from "./stepper";

export const useAccountStore = defineStore("account", () => {
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

    const stepperStore = useStepperStore();
    const showPassword = ref(false);

    const onSubmit = handleSubmit((v) => {
        stepperStore.next();
    });

    function handlePrevious() {
        stepperStore.prev();
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
