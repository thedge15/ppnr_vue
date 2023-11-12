<script setup>

import ArrowsComponent from "../components/ArrowsComponent.vue";
import DescriptionComponent from "../components/DescriptionComponent.vue";

const carouselArray = [
    {
        number: 1,
        previousElement: 5,
        nextElement: 2,
        content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. ' +
            'Facilisis magna etiam tempor orci eu lobortis elementum.',
        textColor: 'red-600',
    },
    {
        number: 2,
        previousElement: 1,
        nextElement: 3,
        content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. ' +
            'Facilisis magna etiam tempor orci eu lobortis elementum.',
        textColor: 'yellow-600',
    },
    {
        number: 3,
        previousElement: 2,
        nextElement: 4,
        content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. ' +
            'Facilisis magna etiam tempor orci eu lobortis elementum.',
        textColor: 'green-600',
    },
    {
        number: 4,
        previousElement: 3,
        nextElement: 5,
        content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. ' +
            'Facilisis magna etiam tempor orci eu lobortis elementum.',
        textColor: 'sky-600',
    },
    {
        number: 5,
        previousElement: 4,
        nextElement: 1,
        content: 'Aliquam ultrices sagittis orci a scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. ' +
            'Facilisis magna etiam tempor orci eu lobortis elementum.',
        textColor: 'gray-600',
    },
]

</script>
<template>
    <div class="sm:max-h-fit md:h-5/6 pt-5 font-serif bg-[url('/img/cables.jpg')] bg-cover relative text-center">
        <p class="text-xl font-semibold">О нас</p>
        <div v-for="item in carouselArray" class="w-1/3" style="scroll-snap-type: x mandatory;">
            <div class="">
                <input class="sr-only peer" type="radio" name="carousel" :id="[`carousel-${item.number}`]" checked/>
                <!-- content -->
                <div class="w-2/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white
                    rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100
                    peer-checked:z-10 z-0">
                    <description-component :heading="item.number" :content="item.content"/>
                    <!-- controls -->
                    <arrows-component :previous-element="item.previousElement" :next-element="item.nextElement"
                                      :text-color="item.textColor"/>
                </div>
            </div>
        </div>
    </div>
</template>
