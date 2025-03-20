<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UserForm from "@/Components/UserForm.vue";
import ContactForm from "@/Components/ContactForm.vue";
import { useStepperStore } from "@/store/stepper";

const stepperStore = useStepperStore();
</script>

<template>
    <AppLayout title="Stepper">
        <user-form v-if="stepperStore.step == 1" />
        <contact-form v-if="stepperStore.step == 2" />
    </AppLayout>
</template>

<style scoped></style>
