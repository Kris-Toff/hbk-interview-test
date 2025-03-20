import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, number } from "yup";
import { router } from "@inertiajs/vue3";
import { useStepperStore } from "./stepper";

export const useContactStore = defineStore("contact", () => {
    const stepperStore = useStepperStore();

    const schema = toTypedSchema(
        object({
            email: string().required("Email is required").email(),
            phoneNumber: number("Phone number is should be a number").required(
                "Phone number is required"
            ),
        })
    );

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [email, emailAttrs] = defineField("email");
    const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber");

    const onSubmit = handleSubmit((values) => {
        stepperStore.next();
        router.visit("/business", { method: "get" });
    });

    function handlePrevious() {
        stepperStore.prev();
        window.history.back();
    }

    return {
        email,
        emailAttrs,
        phoneNumber,
        phoneNumberAttrs,
        errors,
        handlePrevious,
        onSubmit,
    };
});
