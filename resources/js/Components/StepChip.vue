<script setup>
const props = defineProps({
    stepCount: Number,
    label: String,
    totalSteps: Number,
    currentStep: Number,
});
</script>

<template>
    <div class="d-flex flex-row align-center">
        <hr
            class="divider"
            :class="{
                'inactive-divider': currentStep <= stepCount,
                'active-divider': currentStep >= stepCount,
            }"
        />

        <div class="d-flex flex-column">
            <v-sheet
                class="d-flex align-center justify-center"
                :class="{
                    'inactive-step-chip': currentStep <= stepCount,
                    'active-step-chip': currentStep >= stepCount,
                }"
                width="50"
                height="50"
                rounded="circle"
            >
                <p>{{ stepCount }}</p>
            </v-sheet>
        </div>

        <hr
            class="divider"
            :class="{
                'inactive-divider':
                    currentStep <= stepCount && stepCount < totalSteps,
                'active-divider':
                    currentStep > stepCount && stepCount < totalSteps,
                'divider-hidden': stepCount >= totalSteps,
            }"
        />
    </div>
    <div
        class="text-center"
        :class="{
            'active-text': currentStep >= stepCount,
            'inactive-text': currentStep <= stepCount,
        }"
    >
        {{ label }}
    </div>
</template>

<style scoped>
.divider {
    height: 3px;
    border: none;
    width: 100%;
}

.divider-hidden {
    height: 3px;
    border: none;
    width: 100%;
}

.inactive-divider {
    color: #3d3d3d;
    background-color: #3d3d3d;
}

.active-divider {
    color: #d33e3e;
    background-color: #d33e3e;
}

.inactive-step-chip {
    border: 3px solid #3d3d3d;
}

.active-step-chip {
    border: 3px solid #d33e3e;
    color: white;
    background-color: #d33e3e;
}

.active-text {
    color: #d33e3e;
}

.inactive-text {
    color: #3d3d3d;
}
</style>
