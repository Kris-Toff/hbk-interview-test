<script setup>
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";
import AppLayout from "@/Layouts/AppLayout.vue";
import UserForm from "@/Components/UserForm.vue";
import { useStepperStore } from "@/store/stepper";
import { useUserStore } from "@/store/user";

const stepperStore = useStepperStore();
const userStore = useUserStore();

const page = usePage();

const message = computed(() => page.props.flash.message);
</script>

<template>
    <AppLayout title="User">
        <v-alert
            v-if="message"
            :text="message"
            title="Saved"
            type="success"
            class="mb-6"
            closable
        ></v-alert>
        <form @submit.prevent="userStore.onSubmit">
            <user-form />

            <div class="mt-6 d-flex justify-end" v-if="stepperStore.step != 5">
                <v-btn type="submit"> Next </v-btn>
            </div>
        </form>
    </AppLayout>
</template>

<style scoped></style>
