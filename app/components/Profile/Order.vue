<script setup lang="ts"></script>

<template>
  <div class="px-4 md:px-0">
    <div>
      <h1 class="font-semibold text-xl md:text-[26px]">My Orders</h1>
      <p class="font-extralight text-sm">
        View your order history or check the status of a recent order.
      </p>
    </div>
    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="text-center my-16 md:my-32">
      <h2 class="text-lg md:text-xl mb-10 md:mb-20 px-4">You haven't placed any orders yet.</h2>
      <NuxtLink to="/shop" class="underline cursor-pointer underline-offset-2 text-sm md:text-base">Start Browsing</NuxtLink>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />
  </div>
</template>
