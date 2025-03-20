<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import ContactForm from "@/Components/ContactForm.vue";
import { useStepperStore } from "@/store/stepper";
import { useContactStore } from "@/store/contact";
import { usePageGuard } from "@/composables/usePageGuard";

const { stepperGuard } = usePageGuard();
const stepperStore = useStepperStore();

stepperGuard(stepperStore.step);

const contactStore = useContactStore();
</script>

<template>
    <AppLayout title="Contact">
        <form @submit.prevent="contactStore.onSubmit">
            <contact-form />
            <div
                class="mt-6 d-flex justify-space-around"
                v-if="stepperStore.step != 5"
            >
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
    </AppLayout>
</template>

<style scoped></style>
