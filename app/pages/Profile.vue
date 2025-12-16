<script setup lang="ts">
import BaseNavigation from "~/components/common/BaseNavigation.vue";
import Footer from "~/components/common/Footer.vue";
import Account from "~/components/Profile/Account.vue";
import Address from "~/components/Profile/Address.vue";
import Order from "~/components/Profile/Order.vue";
import Wallet from "~/components/Profile/Wallet.vue";
import Wishlist from "~/components/Profile/Wishlist.vue";

const route = useRoute();

const tabs = [
  { name: "my account", href: "#", current: true },
  { name: "my orders", href: "#", current: false },
  { name: "my addresses", href: "#", current: false },
  { name: "my wallet", href: "#", current: false },
  { name: "my wishlist", href: "#", current: false },
];

// Set active tab based on URL query parameter
const active = ref("my account");

onMounted(() => {
  const tab = route.query.tab as string;
  if (tab && tabs.some((t) => t.name === tab)) {
    active.value = tab;
  } else if (route.query.wishlist) {
    active.value = "my wishlist";
  }
});
</script>

<template>
  <div class="bg-[#F9F9F9] min-h-screen">
    <div class="relative">
      <div class="sticky top-20 z-20">
        <BaseNavigation />
      </div>

      <div class="container w-full">
        <div class="flex mt-32 border-b overflow-x-scroll scrollbar-hide w-full">
          <div
            v-for="item in tabs"
            :key="item.name"
            @click="active = item.name"
            :class="[
              'cursor-pointer py-4 px-6 border-b-4 transition-colors hover:border-gray-300 duration-300 delay-75 w-full',
              active === item.name
                ? 'border-primary'
                : 'border-transparent font-light',
            ]"
          >
            <p class="cursor-pointer md:text-base text-xs whitespace-nowrap">
              {{ item.name }}
            </p>
          </div>
        </div>

        <!-- My Account Tab -->
        <div v-if="active === 'my account'" class="mt-8">
          <Account />
        </div>

        <!-- My Orders Tab -->
        <div v-if="active === 'my orders'" class="mt-8">
          <Order />
        </div>

        <!-- My Addresses Tab -->
        <div v-if="active === 'my addresses'" class="mt-8">
          <Address />
        </div>

        <!-- My Wallet Tab -->
        <div v-if="active === 'my wallet'" class="mt-8">
          <Wallet />
        </div>

        <!-- My Wishlist Tab -->
        <div v-if="active === 'my wishlist'" class="mt-8">
          <Wishlist />
        </div>
      </div>
    </div>

    <div v-if="active === 'my account'" class="mt-8 container">
      <div class="mt-10 r">
        <div class="space-y-4">
          <h1 class="font-extralight font-merriweather">Login info</h1>
          <p class="font-extralight">
            View and update your login email and password.
          </p>
        </div>
        <div class="font-extralight mt-6">
          <h2 class="">Login email:</h2>
          <span> eugeneokogun@gmail.com</span>
          <p>
            Site owners can only change their login email in Wix Account
            Settings.
          </p>
        </div>

        <div class="font-extralight mt-6">
          <h2>Password:</h2>
          <span> ● ● ● ● ● ● </span>
          <p>
            Site owners can only change their password in Wix Account Settings.
          </p>
        </div>
      </div>

      <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />

      <div class="mt-10">
        <div class="space-y-4">
          <h1 class="font-extralight font-merriweather">
            visibility and privacy
          </h1>
          <p class="font-extralight">update your personal information</p>
        </div>
        <div class="font-extralight mt-6">
          <h2>Profile privacy:</h2>
          <p>A site owner's profile is always public.</p>
        </div>
      </div>

      <div class="w-full mt-5 border-b-[0.1px] border-gray-400" />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
  .scrollbar-hide {
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
  }
  
  .scrollbar-hide::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
  </style>