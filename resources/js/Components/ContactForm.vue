<script setup>
import { useStepperStore } from "@/store/stepper";
import { useContactStore } from "@/store/contact";
const contactStore = useContactStore();
const stepperStore = useStepperStore();
</script>

<template>
    <div class="my-6 d-flex justify-start" v-if="stepperStore.step == 5">
        <strong>Contact Form</strong>
    </div>

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
</template>

<style scoped></style>
