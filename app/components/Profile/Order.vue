<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <h1 class="font-semibold text-[26px]">My Orders</h1>
      <p class="font-extralight text-sm">
        View your order history or check the status of a recent order.
      </p>
    </div>
    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="text-center my-32">
      <h2 class="text-xl mb-20">You haven't placed any orders yet.</h2>
      <NuxtLink to="/shop" class="underline cursor-pointer underline-offset-2">Start Browsing</NuxtLink>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />
  </div>
</template>
