<script setup>
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import Steppers from "@/Components/Steppers.vue";

defineProps({
    title: String,
});
</script>

<template>
    <div>
        <Head :title="title" />

        <div class="min-h-screen bg-gray-100">
            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <v-container>
                    <v-card max-width="900" class="mx-auto">
                        <v-card-item>
                            <steppers />
                        </v-card-item>

                        <v-card-text>
                            <slot />
                        </v-card-text>
                    </v-card>
                </v-container>
            </main>
        </div>
    </div>
</template>

<style scoped></style>
