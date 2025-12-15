<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <h1 class="font-semibold text-[26px]">My Wishlist</h1>
      <p class="font-extralight text-sm">
        View favorite products you’ve saved to your wishlist.
      </p>
    </div>
    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="text-center my-32">
      <h2 class="text-xl mb-20">You haven’t added any products yet.</h2>
      <NuxtLink to="/shop" class="cursor-pointer "
        >Start adding products</NuxtLink
      >
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />
  </div>
</template>
