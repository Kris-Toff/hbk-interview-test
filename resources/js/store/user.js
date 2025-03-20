import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string, date } from "yup";
import { router } from "@inertiajs/vue3";
import { useStepperStore } from "./stepper";

export const useUserStore = defineStore("user", () => {
    const stepperStore = useStepperStore();

    const schema = toTypedSchema(
        object({
            firstName: string().required("First name is required"),
            lastName: string().required("Last name is required"),
            birthday: date().required("Birthday is required"),
            gender: string().required("Gender is required"),
        })
    );

    const { errors, defineField, handleSubmit, values } = useForm({
        validationSchema: schema,
    });

    const [birthday, birthdayAttrs] = defineField("birthday");
    const [gender, genderAttrs] = defineField("gender");
    const [firstName, firstNameAttrs] = defineField("firstName");
    const [lastName, lastNameAttrs] = defineField("lastName");

    const onSubmit = handleSubmit((v) => {
        stepperStore.next();
        router.visit("/contact", { method: "get" });
    });

    return {
        errors,
        birthday,
        birthdayAttrs,
        gender,
        genderAttrs,
        firstName,
        firstNameAttrs,
        lastName,
        lastNameAttrs,
        values,
        onSubmit,
    };
});
