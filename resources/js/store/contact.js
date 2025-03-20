import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, number } from "yup";
import { useStepperStore } from "./stepper";

export const useContactStore = defineStore("contact", () => {
    const schema = toTypedSchema(
        object({
            email: string().required("Email is required").email(),
            phoneNumber: number().required("Phone number is required"),
        })
    );

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [email, emailAttrs] = defineField("email");
    const [phoneNumber, phoneNumberAttrs] = defineField("phoneNumber");

    const stepperStore = useStepperStore();

    const onSubmit = handleSubmit((values) => {
        stepperStore.next();
    });

    function handlePrevious() {
        stepperStore.prev();
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
