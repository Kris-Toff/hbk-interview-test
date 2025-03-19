<script setup>
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
</script>

<template>
    <form @submit.prevent="userStore.onSubmit">
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

        <div class="mt-6 d-flex justify-space-around">
            <v-btn class="me-auto" type="button"> Previous </v-btn>
            <v-btn type="submit"> Next </v-btn>
        </div>
    </form>
</template>

<style scoped></style>
