import { defineStore } from "pinia";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string } from "yup";

export const useUserStore = defineStore("user", () => {
    const schema = toTypedSchema(
        object({
            firstName: string().required("First name is required"),
            lastName: string().required("Last name is required"),
            birthday: string().required("Birthday is required"),
            gender: string().required("Gender is required"),
        })
    );

    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: schema,
    });

    const [birthday, birthdayAttrs] = defineField("birthday");
    const [gender, genderAttrs] = defineField("gender");
    const [firstName, firstNameAttrs] = defineField("firstName");
    const [lastName, lastNameAttrs] = defineField("lastName");

    const onSubmit = handleSubmit((values) => {
        // console.log(JSON.stringify(values, null, 2));
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
        onSubmit,
    };
});
