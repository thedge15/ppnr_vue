<script setup>
    const props = defineProps({
        heading: {
            type: Number,
            default: null
        },
        content: {
            type: String,
            default: ''
        },
    })
</script>
<template>
    <img class="rounded-t-lg w-full h-96" :src="[`/img/carousel-${heading}.jpg`]" alt=""/>
    <div class="py-4 px-8">
        <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">{{ props.heading }}</h1>
        <p class="hover:cursor-pointer py-3 text-gray-600 leading-6">{{ props.content }}</p>
    </div>
</template>
