<script setup>
import { ref } from "vue";
import StepChip from "./StepChip.vue";

const steps = ref([
    { count: 1, label: "User" },
    { count: 2, label: "Contact" },
    { count: 3, label: "Businness Info" },
    { count: 4, label: "Account" },
    { count: 5, label: "Summary" },
]);

const currentStep = ref(1);
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col class="pa-0" v-for="step in steps" :key="step.count">
                <step-chip
                    :step-count="step.count"
                    :label="step.label"
                    :total-steps="steps.length"
                    :current-step="currentStep"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
