<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import BusinessForm from "@/Components/BusinessForm.vue";
import { useStepperStore } from "@/store/stepper";
import { useBusinessStore } from "@/store/business";
import { usePageGuard } from "@/composables/usePageGuard";

const { stepperGuard } = usePageGuard();
const stepperStore = useStepperStore();

stepperGuard(stepperStore.step);

const businessStore = useBusinessStore();
</script>

<template>
    <AppLayout title="Business Info">
        <form @submit.prevent="businessStore.onSubmit">
            <business-form />
            <div
                class="mt-6 d-flex justify-space-around"
                v-if="stepperStore.step != 5"
            >
                <v-btn
                    class="me-auto"
                    type="button"
                    @click="businessStore.handlePrevious"
                >
                    Previous
                </v-btn>
                <v-btn type="submit"> Next </v-btn>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped></style>
