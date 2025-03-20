<script setup>
import { useStepperStore } from "@/store/stepper";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const stepperStore = useStepperStore();
</script>

<template>
    <div class="my-6 d-flex justify-start" v-if="stepperStore.step == 5">
        <strong>User Form</strong>
    </div>

    <v-text-field
        v-model="userStore.firstName"
        v-bind="userStore.firstNameAttrs"
        :error-messages="userStore.errors.firstName"
        label="First name"
    ></v-text-field>

    <v-text-field
        v-model="userStore.lastName"
        v-bind="userStore.lastNameAttrs"
        :error-messages="userStore.errors.lastName"
        label="Last name"
    ></v-text-field>

    <v-text-field
        type="date"
        v-model="userStore.birthday"
        v-bind="userStore.birthdayAttrs"
        :error-messages="userStore.errors.birthday"
        label="Birthday"
    >
    </v-text-field>

    <v-select
        label="Gender"
        :items="['Male', 'Female']"
        v-model="userStore.gender"
        v-bind="userStore.genderAttrs"
        :error-messages="userStore.errors.gender"
        bg-color="white"
    ></v-select>
</template>

<style scoped></style>
