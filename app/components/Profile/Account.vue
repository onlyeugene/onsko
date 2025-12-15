<script setup lang="ts"></script>

<template>
  <div class="px-4 md:px-0">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div class="space-y-3">
        <h1 class="text-xl md:text-[28px] font-semibold">account</h1>
        <p class="font-extralight text-sm md:text-base">view and edit your personal info below.</p>
      </div>
      <div class="flex gap-3 sm:gap-4 w-full sm:w-auto">
        <button class="border py-2 px-4 rounded-md font-extralight flex-1 sm:flex-none text-sm md:text-base">
          discard
        </button>
        <button
          class="border py-2 px-4 rounded-md bg-black text-white font-extralight flex-1 sm:flex-none text-sm md:text-base"
        >
          update info
        </button>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-10">
      <div>
        <h1 class="font-extralight font-merriweather mb-4">display info</h1>
        <p class="font-extralight">
          this information will be visible to all members of this site.
        </p>
      </div>

      <div class="mt-8 md:mt-10">
        <form class="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          <div class="w-full space-y-4 md:space-y-6">
            <div class="text-sm font-extralight flex flex-col gap-3 md:gap-4">
              <label for="">Display name*</label>
              <input
                type="text"
                placeholder="Enter your name here"
                class="border border-dark p-3 rounded-md text-sm md:text-base"
              />
            </div>
            <div class="text-sm font-extralight flex flex-col gap-3 md:gap-4">
              <label for="">Title</label>
              <input
                type="text"
                placeholder=""
                class="border border-dark p-3 rounded-md text-sm md:text-base"
              />
            </div>
          </div>

          <div class="w-full lg:w-1/2">
            <label for="" class="flex items-center font-extralight gap-2 text-sm md:text-base"
              >Profile image
              <Icon name="uil:info-circle" class="w-4 h-4 text-gray-500" />
            </label>
          </div>
        </form>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <div class="mt-10">
      <div>
        <h1 class="font-extralight font-merriweather mb-4">personal info</h1>
        <p class="font-extralight">update your personal information.</p>
      </div>

      <div class="mt-8 md:mt-10">
        <form class="flex flex-col lg:flex-row items-start gap-8 lg:gap-20">
          <div class="w-full space-y-4 md:space-y-6">
            <div class="text-sm font-extralight flex flex-col gap-3 md:gap-4">
              <label for="">First name</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full rounded-md text-sm md:text-base"
                />
                <Icon name="uil:lock" class="fill-black w-4 h-4" />
              </div>
            </div>
            <div class="text-sm font-extralight flex flex-col gap-3 md:gap-4">
              <label for="">Phone</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full rounded-md text-sm md:text-base"
                />
                <Icon name="uil:lock" class="fill-black w-4 h-4" />
              </div>
            </div>
          </div>

          <div class="w-full lg:w-1/2 flex flex-col gap-4">
            <div class="text-sm font-extralight flex flex-col gap-3 md:gap-4">
              <label for="">Last name</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full rounded-md text-sm md:text-base"
                />
                <Icon name="uil:lock" class="fill-black w-4 h-4" />
              </div>
            </div>
          </div>
        </form>
        <div class="flex flex-col sm:flex-row justify-end items-stretch sm:items-end gap-3 sm:gap-5 mt-5">
          <button class="border py-2 px-4 rounded-md font-extralight text-sm md:text-base">
            discard
          </button>
          <button
            class="border py-2 px-4 rounded-md bg-black text-white font-extralight text-sm md:text-base"
          >
            update info
          </button>
        </div>
      </div>
    </div>

    <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

    <!-- Login and Privacy -->

   
  </div>
</template>
