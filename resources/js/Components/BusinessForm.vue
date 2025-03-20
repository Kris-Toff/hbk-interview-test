<script setup>
import { useBusinessStore } from "@/store/business";
import { useStepperStore } from "@/store/stepper";
const businessStore = useBusinessStore();
const stepperStore = useStepperStore();
</script>

<template>
    <div class="my-6 d-flex justify-start" v-if="stepperStore.step == 5">
        <strong>Business Form</strong>
    </div>

    <v-text-field
        v-model="businessStore.businessName"
        v-bind="businessStore.businessNameAttrs"
        :error-messages="businessStore.errors.businessName"
        label="Business name"
    ></v-text-field>

    <v-text-field
        v-model="businessStore.businessAddress"
        v-bind="businessStore.businessAddressAttrs"
        :error-messages="businessStore.errors.businessAddress"
        label="Business address"
    ></v-text-field>

    <v-select
        label="Status"
        :items="['Active', 'Inactive']"
        v-model="businessStore.status"
        v-bind="businessStore.statusAttrs"
        :error-messages="businessStore.errors.status"
        bg-color="white"
    ></v-select>

    <v-checkbox
        label="Is company a premium company"
        v-model="businessStore.isPremiumCompany"
        v-bind="businessStore.accreditationLevelAttrs"
        :error-messages="businessStore.errors.isPremiumCompany"
    ></v-checkbox>

    <p>Accreditation Level :</p>
    <v-radio-group
        v-model="businessStore.accreditationLevel"
        v-bind="businessStore.accreditationLevelAttrs"
        :error-messages="businessStore.errors.accreditationLevel"
    >
        <v-radio label="Alumni Shield Level 1" value="one"></v-radio>
        <v-radio label="Alumni Shield Level 2" value="two"></v-radio>
        <v-radio label="Alumni Shield Level 3" value="three"></v-radio>
    </v-radio-group>

    <v-text-field
        type="date"
        v-model="businessStore.registrationDate"
        v-bind="businessStore.registrationDateAttrs"
        :error-messages="businessStore.errors.registrationDate"
        label="Registration date"
    >
    </v-text-field>

    <v-text-field
        type="date"
        v-model="businessStore.expiryDate"
        v-bind="businessStore.expiryDateAttrs"
        :error-messages="businessStore.errors.expiryDate"
        label="Expiry date"
    >
    </v-text-field>
</template>

<style scoped></style>
