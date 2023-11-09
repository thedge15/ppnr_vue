<template>
    <header>
        <div class="mx-auto pt-5 pb-5 font-serif bg-sky-400">
            <nav class="flex justify-center h-8">
                <router-link class="w-32 hover:text-xl menuItem-active-link" to="/">Главная</router-link>
                <router-link class="w-32 hover:text-xl menuItem-active-link" to="/about">О нас</router-link>
                <router-link class="w-32 hover:text-xl menuItem-active-link" to="/services">Услуги</router-link>
                <router-link class="w-32 hover:text-xl menuItem-active-link" to="/contacts">Контакты</router-link>
            </nav>
            <div class="text-center mt-5">
                <h2 class="text-xl">Разработка программ ПНР, программ и методик приёмочных испытаний слаботочных
                    сетей.</h2>
            </div>
        </div>
    </header>
    <RouterView/>
</template>
<style>

.router-link-exact-active.menuItem-active-link {
    border-bottom-color: white;
    color: white;
    text-decoration-thickness: 2px;
}
</style>
