<script setup>
const navs = ref([
  {
    title: "Products",
  },
  {
    title: "Benefit",
  },
  {
    title: "How it Works",
  },
  {
    title: "Pricing",
  },
  {
    title: "Company",
  },
]);
const mobileNav = ref(true);
const screen = reactive({
  width: null,
  height: null,
});

const onResize = () => {
  if (process.client) {
    screen.width = window.innerWidth;
    screen.height = window.innerHeight;
  }
};

watchEffect(async () => {
  if (screen.width < 1024) {
    mobileNav.value = false;
  } else {
    mobileNav.value = true;
  }
});

onMounted(() => {
  if (process.client) {
    window.addEventListener("resize", onResize);
  }
  onResize();
});

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", onResize);
  }
});
</script>

<template>
  <header class="relative border-b border-b-white/[16%] py-8">
    <nav class="container mx-auto px-7">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <img
            src="~/assets/images/logo.png"
            class="h-6 lg:h-auto"
            alt="spendin-logo"
          />
        </NuxtLink>
        <IconMenu
          @click="mobileNav = !mobileNav"
          class="cursor-pointer block lg:hidden"
        />
        <div
          v-if="mobileNav"
          class="bg-secondary-700 absolute top-[89px] left-0 h-[calc(100vh-89px)] w-full flex flex-col items-center justify-center lg:flex-row lg:static lg:bg-transparent lg:h-auto"
        >
          <div
            class="mx-auto flex flex-col items-center space-y-10 mb-10 lg:flex-row lg:space-x-10 lg:space-y-0 lg:mb-0"
          >
            <NuxtLink
              v-for="nav in navs"
              :key="nav.title"
              class="text-white text-lg font-medium"
              to="/"
              >{{ nav.title }}</NuxtLink
            >
          </div>
          <div
            class="flex flex-col space-y-10 lg:flex-row lg:space-x-8 lg:space-y-0"
          >
            <button class="text-secondary-200 text-lg font-medium">
              Login
            </button>
            <BaseButton variant="primary">Get Demo</BaseButton>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
