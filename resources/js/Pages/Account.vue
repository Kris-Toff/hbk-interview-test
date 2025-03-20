<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import AccountForm from "@/Components/AccountForm.vue";
import { useStepperStore } from "@/store/stepper";
import { useAccountStore } from "@/store/account";
import { usePageGuard } from "@/composables/usePageGuard";

const { stepperGuard } = usePageGuard();
const stepperStore = useStepperStore();

stepperGuard(stepperStore.step);

const accountStore = useAccountStore();
</script>

<template>
    <AppLayout title="Account">
        <form @submit.prevent="accountStore.onSubmit">
            <account-form />
            <div
                class="mt-6 d-flex justify-space-around"
                v-if="stepperStore.step != 5"
            >
                <v-btn
                    class="me-auto"
                    type="button"
                    @click="accountStore.handlePrevious"
                >
                    Previous
                </v-btn>
                <v-btn type="submit"> Next </v-btn>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped></style>
