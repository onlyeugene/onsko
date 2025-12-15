<script setup lang="ts">
import BaseNavigationShop from '~/components/common/BaseNavigationShop.vue';
import Footer from '~/components/common/Footer.vue';
import Products from '~/components/ShopPage/Products.vue';


</script>

<template>
    <div class="bg-[#F2F0EB]">
        <div class="sticky top-20 z-20">
            <BaseNavigationShop />
        </div>
        <Products />
        <Footer />
    </div>
</template>

