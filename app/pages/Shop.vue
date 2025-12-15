<script setup lang="ts">
import BaseNavigation from '~/components/common/BaseNavigation.vue';
import Footer from '~/components/common/Footer.vue';
import Products from '~/components/ShopPage/Products.vue';


</script>

<template>
    <div class="bg-[#F2F0EB]">
        <div class="sticky md:top-20 top-10 z-20">
            <BaseNavigation />
        </div>
        <Products />
        <Footer />
    </div>
</template>

