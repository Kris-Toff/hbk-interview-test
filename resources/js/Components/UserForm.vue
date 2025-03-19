<script setup>
import { ref } from "vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import { object, string } from "yup";
import dayjs from "dayjs";

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

function handleDateChange(val) {
    const formatted = dayjs(val).format("DD/MM/YYYY");

    birthday.value = formatted;
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <v-text-field
            v-model="firstName"
            v-bind="firstNameAttrs"
            :error-messages="errors.firstName"
            label="First name"
        ></v-text-field>

        <v-text-field
            v-model="lastName"
            v-bind="lastNameAttrs"
            :error-messages="errors.lastName"
            label="Last name"
        ></v-text-field>

        <v-text-field
            type="date"
            v-model="birthday"
            v-bind="birthdayAttrs"
            :error-messages="errors.birthday"
            label="Birthday"
        >
        </v-text-field>

        <v-select
            label="Gender"
            :items="['Male', 'Female']"
            v-model="gender"
            v-bind="genderAttrs"
            :error-messages="errors.gender"
            bg-color="white"
        ></v-select>

        <div class="mt-6 d-flex justify-space-around">
            <v-btn class="me-auto" type="button"> Previous </v-btn>
            <v-btn type="submit"> Next </v-btn>
        </div>
    </form>
</template>

<style scoped></style>
