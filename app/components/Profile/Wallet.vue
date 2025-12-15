<script setup lang="ts"></script>

<template>
  <div>
    <div>
      <h1 class="font-semibold text-[26px]">Wallet</h1>
      <p class="font-extralight text-sm">
        Save your payment details for faster checkout.
      </p>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-10 w-full">
      <div class="flex justify-between items-start">
        <div class="gap-6 flex">
          <Icon name="uil:master-card" class="w-10 h-10" />
          <div class="flex flex-col font-extralight space-y-2">
            <div class="flex gap-3">
              <p>Mastercard (2751)</p>
              <span class="text-xs border rounded-full px-2 py-1 border-dark"
                >Default</span
              >
            </div>
            <p>Expiration date: 07/2026</p>
            <p>Cardholder: John Doe</p>
          </div>
        </div>
        <button
          class="py-2 px-8 text-[#627023] border border-[#627023] font-extralight"
        >
          Manage
        </button>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-10 w-full">
      <div class="flex justify-between items-start">
        <div class="gap-6 flex">
          <Icon name="uil:visa" class="w-10 h-10" />
          <div class="flex flex-col font-extralight space-y-2">
            <div class="flex gap-3">
              <p>Visa (2831)</p>
            </div>
            <p>Expiration date: 07/2026</p>
            <p>Cardholder: John Doe</p>
          </div>
        </div>
        <button
          class="py-2 px-8 text-[#627023] border border-[#627023] font-extralight"
        >
          Manage
        </button>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div>
      <div class="text-center my-10 flex items-center justify-center">
        <button class="border py-2 px-10 bg-[#627023] text-white">
            <Icon name="uil:plus" class="" />
          Add Payment Method
        </button>
      </div>
    </div>
  </div>
</template>
