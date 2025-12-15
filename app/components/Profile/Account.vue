<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="space-y-3">
        <h1 class="text-[28px] font-semibold">account</h1>
        <p class="font-extralight">view and edit your personal info below.</p>
      </div>
      <div class="space-x-4">
        <button class="border py-1 px-4 rounded-md font-extralight">
          discard
        </button>
        <button
          class="border py-1 px-4 rounded-md bg-black text-white font-extralight"
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

      <div class="mt-10">
        <form class="flex items-start gap-20">
          <div class="w-full space-y-6">
            <div class="text-sm font-extralight flex flex-col gap-4">
              <label for="">Display name*</label>
              <input
                type="text"
                placeholder="Enter your name here"
                class="border border-dark p-3"
              />
            </div>
            <div class="text-sm font-extralight flex flex-col gap-4">
              <label for="">Title</label>
              <input
                type="text"
                placeholder=""
                class="border border-dark p-3"
              />
            </div>
          </div>

          <div class="w-full">
            <label for="" class="flex items-center font-extralight gap-2"
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

      <div class="mt-10">
        <form class="flex items-start gap-20">
          <div class="w-full space-y-6">
            <div class="text-sm font-extralight flex flex-col gap-4">
              <label for="">First name</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full"
                />
                <Icon name="uil:lock" class="fill-black" />
              </div>
            </div>
            <div class="text-sm font-extralight flex flex-col gap-4">
              <label for="">Phone</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full"
                />
                <Icon name="uil:lock" class="fill-black" />
              </div>
            </div>
          </div>

          <div class="w-full flex flex-col gap-4">
            <div class="text-sm font-extralight flex flex-col gap-4">
              <label for="">Last name</label>
              <div class="flex items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder=""
                  class="border border-dark p-3 w-full"
                />
                <Icon name="uil:lock" class="fill-black" />
              </div>
            </div>
          </div>
        </form>
        <div class="flex justify-end items-end gap-5 mt-5">
          <button class="border py-1 px-4 rounded-md font-extralight">
            discard
          </button>
          <button
            class="border py-1 px-4 rounded-md bg-black text-white font-extralight"
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
