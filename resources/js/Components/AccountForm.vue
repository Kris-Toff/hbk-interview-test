<script setup>
import { useAccountStore } from "@/store/account";
const accountStore = useAccountStore();
</script>

<template>
    <form @submit.prevent="accountStore.onSubmit">
        <v-text-field
            v-model="accountStore.username"
            v-bind="accountStore.usernameAttrs"
            :error-messages="accountStore.errors.username"
            label="Username"
        ></v-text-field>

        <v-text-field
            v-model="accountStore.password"
            v-bind="accountStore.passwordAttrs"
            :error-messages="accountStore.errors.password"
            label="Password"
            :type="accountStore.showPassword ? 'text' : 'password'"
            :append-inner-icon="
                accountStore.showPassword
                    ? 'mdi:mdi-eye-outline'
                    : 'mdi:mdi-eye-off-outline'
            "
            @click:append-inner="accountStore.handlePasswordToggle"
        ></v-text-field>

        <div class="mt-6 d-flex justify-space-around">
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
</template>

<style scoped></style>
