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
        v-model="businessStore.name"
        v-bind="businessStore.nameAttrs"
        :error-messages="
            businessStore.errors.name
                ? businessStore.errors.name
                : stepperStore.errors.name
        "
        label="Business name"
    ></v-text-field>

    <v-text-field
        v-model="businessStore.address"
        v-bind="businessStore.addressAttrs"
        :error-messages="
            businessStore.errors.address
                ? businessStore.errors.address
                : stepperStore.errors.address
        "
        label="Business address"
    ></v-text-field>

    <v-select
        label="Status"
        :items="[
            { title: 'Active', value: 1 },
            { title: 'Inactive', value: 0 },
        ]"
        item-title="title"
        item-value="value"
        v-model="businessStore.status"
        v-bind="businessStore.statusAttrs"
        :error-messages="
            businessStore.errors.status
                ? businessStore.errors.status
                : stepperStore.errors.status
        "
        bg-color="white"
    ></v-select>

    <v-checkbox
        label="Is company a premium company"
        v-model="businessStore.isPremiumCompany"
        v-bind="businessStore.accreditationLevelAttrs"
        :error-messages="
            businessStore.errors.isPremiumCompany
                ? businessStore.errors.isPremiumCompany
                : stepperStore.errors.is_premium_company
        "
    ></v-checkbox>

    <p>Accreditation Level :</p>
    <v-radio-group
        v-model="businessStore.accreditationLevel"
        v-bind="businessStore.accreditationLevelAttrs"
        :error-messages="
            businessStore.errors.accreditationLevel
                ? businessStore.errors.accreditationLevel
                : stepperStore.errors.accreditation_level
        "
    >
        <v-radio label="Alumni Shield Level 1" value="one"></v-radio>
        <v-radio label="Alumni Shield Level 2" value="two"></v-radio>
        <v-radio label="Alumni Shield Level 3" value="three"></v-radio>
    </v-radio-group>

    <v-text-field
        type="date"
        v-model="businessStore.registrationDate"
        v-bind="businessStore.registrationDateAttrs"
        :error-messages="
            businessStore.errors.registrationDate
                ? businessStore.errors.registrationDate
                : stepperStore.errors.registration_date
        "
        label="Registration date"
    >
    </v-text-field>

    <v-text-field
        type="date"
        v-model="businessStore.expiryDate"
        v-bind="businessStore.expiryDateAttrs"
        :error-messages="
            businessStore.errors.expiryDate
                ? businessStore.errors.expiryDate
                : stepperStore.errors.expiry_date
        "
        label="Expiry date"
    >
    </v-text-field>
</template>

<style scoped></style>
