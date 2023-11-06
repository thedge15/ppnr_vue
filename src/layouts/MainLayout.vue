<template>
    <header>
        <div class="mx-auto pt-5 pb-5 font-serif bg-sky-400">
            <nav class="flex justify-center">
                <RouterLink class="w-32" to="/">Главная</RouterLink>
                <RouterLink class="w-32" to="/about">О нас</RouterLink>
                <RouterLink class="w-32" to="/services">Услуги</RouterLink>
                <RouterLink class="w-32" to="/contacts">Контакты</RouterLink>
            </nav>
            <div class="text-center mt-5">
                <h2 class="text-2xl">Разработка программ ПНР, программ и методик приёмочных испытаний слаботочных сетей.</h2>
            </div>
        </div>
    </header>
    <RouterView />
</template>
