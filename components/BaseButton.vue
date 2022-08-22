<script setup>
const props = defineProps({
  variant: {
    type: String,
    required: true,
  },
});

const variants = computed(() => ({
  "bg-primary-500 text-white": props.variant === "primary",
  "text-secondary-400 md:text-white md:bg-secondary-500":
    props.variant === "secondary",
}));
</script>

<template>
  <button
    class="inline-block font-semibold px-6 py-[13px] rounded-[30px]"
    :class="variants"
  >
    <slot />
  </button>
</template>
