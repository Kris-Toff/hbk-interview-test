<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UserForm from "@/Components/UserForm.vue";
import ContactForm from "@/Components/ContactForm.vue";
import BusinessForm from "@/Components/BusinessForm.vue";
import AccountForm from "@/Components/AccountForm.vue";
import { useStepperStore } from "@/store/stepper";

const stepperStore = useStepperStore();
</script>

<template>
    <AppLayout title="Stepper">
        <user-form v-if="stepperStore.step == 1" />
        <contact-form v-if="stepperStore.step == 2" />
        <business-form v-if="stepperStore.step == 3" />
        <account-form v-if="stepperStore.step == 4" />
    </AppLayout>
</template>

<style scoped></style>
