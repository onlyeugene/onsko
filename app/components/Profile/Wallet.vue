<script setup lang="ts"></script>

<template>
  <div class="px-4 md:px-0">
    <div>
      <h1 class="font-semibold text-xl md:text-[26px]">Wallet</h1>
      <p class="font-extralight text-sm">
        Save your payment details for faster checkout.
      </p>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-8 md:mt-10 w-full">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="flex gap-4 sm:gap-6">
          <Icon name="uil:master-card" class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <div class="flex flex-col font-extralight space-y-1 md:space-y-2">
            <div class="flex flex-col sm:flex-row sm:gap-3 gap-1">
              <p class="text-sm md:text-base">Mastercard (2751)</p>
              <span class="text-xs border rounded-full px-2 py-1 border-dark w-fit"
                >Default</span
              >
            </div>
            <p class="text-sm">Expiration date: 07/2026</p>
            <p class="text-sm">Cardholder: John Doe</p>
          </div>
        </div>
        <button
          class="py-2 px-4 md:px-8 text-[#627023] border border-[#627023] font-extralight text-sm md:text-base w-full sm:w-auto"
        >
          Manage
        </button>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-8 md:mt-10 w-full">
      <div class="flex flex-col sm:flex-row justify-between items-start gap-4">
        <div class="flex gap-4 sm:gap-6">
          <Icon name="uil:visa" class="w-8 h-8 md:w-10 md:h-10 flex-shrink-0" />
          <div class="flex flex-col font-extralight space-y-1 md:space-y-2">
            <div class="flex gap-3">
              <p class="text-sm md:text-base">Visa (2831)</p>
            </div>
            <p class="text-sm">Expiration date: 07/2026</p>
            <p class="text-sm">Cardholder: John Doe</p>
          </div>
        </div>
        <button
          class="py-2 px-4 md:px-8 text-[#627023] border border-[#627023] font-extralight text-sm md:text-base w-full sm:w-auto"
        >
          Manage
        </button>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div>
      <div class="text-center my-8 md:my-10 flex items-center justify-center">
        <button class="border py-2 px-6 md:px-10 bg-[#627023] text-white rounded-md text-sm md:text-base flex items-center gap-2">
            <Icon name="uil:plus" class="w-4 h-4" />
          Add Payment Method
        </button>
      </div>
    </div>
  </div>
</template>
