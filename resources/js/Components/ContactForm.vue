<script setup>
import { useContactStore } from "@/store/contact";
const contactStore = useContactStore();
</script>

<template>
    <form @submit.prevent="contactStore.onSubmit">
        <v-text-field
            v-model="contactStore.email"
            v-bind="contactStore.emailAttrs"
            :error-messages="contactStore.errors.email"
            label="Email"
            type="email"
        ></v-text-field>

        <v-text-field
            v-model="contactStore.phoneNumber"
            v-bind="contactStore.phoneNumberAttrs"
            :error-messages="contactStore.errors.phoneNumber"
            label="Phone number"
        ></v-text-field>

        <div class="mt-6 d-flex justify-space-around">
            <v-btn
                class="me-auto"
                type="button"
                @click="contactStore.handlePrevious"
            >
                Previous
            </v-btn>
            <v-btn type="submit"> Next </v-btn>
        </div>
    </form>
</template>

<style scoped></style>
