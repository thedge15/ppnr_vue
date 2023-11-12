<script setup>

const props = defineProps({
    previousElement: {
        type: Number,
        default: null,
    },
    nextElement: {
        type: Number,
        default: null,
    },
    textColor: {
        type: String,
        default: '',
    },
})

</script>
<template>
    <div class="absolute top-1/2 w-full flex justify-between z-20">
        <label :for="[`carousel-${props.previousElement}`]" :class="[`inline-block cursor-pointer
            -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5 text-${props.textColor}`]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1
                    1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                    clip-rule="evenodd" />
            </svg>
        </label>
        <label :for="[`carousel-${props.nextElement}`]" :class="[`inline-block cursor-pointer
            translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5 text-${props.textColor}`]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414
                    1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                    clip-rule="evenodd" />
            </svg>
        </label>
    </div>
</template>
