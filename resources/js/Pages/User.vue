<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import UserForm from "@/Components/UserForm.vue";
import { useStepperStore } from "@/store/stepper";
import { useUserStore } from "@/store/user";

const stepperStore = useStepperStore();
const userStore = useUserStore();
</script>

<template>
    <AppLayout title="User">
        <form @submit.prevent="userStore.onSubmit">
            <user-form
                v-if="stepperStore.step == 1 || stepperStore.step == 5"
            />

            <div class="mt-6 d-flex justify-end" v-if="stepperStore.step != 5">
                <v-btn type="submit"> Next </v-btn>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped></style>
