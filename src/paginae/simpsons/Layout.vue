<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue';
import LogoSimpsons from '@/components/ui/LogoSimpsons.vue';

</script>

<template>
    <div class="grid grid-rows-[auto_1fr_auto] min-h-screen">

        <header class="bg-simpsons-yellow w-full border border-black">

            <div class="flex flex-col items-center md:flex-row justify-between p-3 md:px-20 mx-auto max-w-page">
                <LogoSimpsons estilus="w-[8rem] h-auto" />
           
                <div class="flex gap-6 pt-3">
                    <RouterLink 
                        to="/simpson/gallery"
                        active-class="font-bold"
                    >
                        Characters
                    </RouterLink>

                    <RouterLink
                        to="/simpson/about"
                        active-class="font-bold"
                    >
                        About
                    </RouterLink>

                    <Button variant="tertiarius" size="elongatis">
                        <RouterLink to="/simpson">Exit</RouterLink>
                    </Button> 
                </div>
            </div>

        </header>

        <main>
            <RouterView />
        </main>

        <footer class="bg-simpsons-yellow w-full border border-black text-center py-6">
            <div>
                <strong> All Rights Reserved</strong> - Oh Lord Matt Groening - 1989 -2023
            </div>

                <small>
                    This app was done by Alan Prades
                </small>

        </footer>

    </div>
</template>



<style scoped>

</style>