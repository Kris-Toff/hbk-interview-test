<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UserForm from "@/Components/UserForm.vue";
import ContactForm from "@/Components/ContactForm.vue";
import BusinessForm from "@/Components/BusinessForm.vue";
import AccountForm from "@/Components/AccountForm.vue";
import { useStepperStore } from "@/store/stepper";
import { usePageGuard } from "@/composables/usePageGuard";

const { stepperGuard } = usePageGuard();
const stepperStore = useStepperStore();

stepperGuard(stepperStore.step);
</script>

<template>
    <AppLayout title="Summary">
        <form @submit.prevent="stepperStore.submit">
            <user-form />
            <contact-form />
            <business-form />
            <account-form />
            <div class="mt-6 d-flex justify-space-around">
                <v-btn
                    class="me-auto"
                    type="button"
                    @click="stepperStore.handlePrevious"
                >
                    Previous
                </v-btn>
                <v-btn type="submit"> Submit </v-btn>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped></style>
