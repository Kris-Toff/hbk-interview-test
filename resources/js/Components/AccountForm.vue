<script setup>
import { useAccountStore } from "@/store/account";
import { useStepperStore } from "@/store/stepper";
const accountStore = useAccountStore();
const stepperStore = useStepperStore();
</script>

<template>
    <div class="my-6 d-flex justify-start" v-if="stepperStore.step == 5">
        <strong>Account Form</strong>
    </div>

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
</template>

<style scoped></style>
