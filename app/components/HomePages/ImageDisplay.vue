<script setup lang="ts">
interface Props {
  image: string;
  align?: "start" | "end";
  alt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  align: "end",
  alt: "",
});

const containerClass = computed(() => {
  if (props.align === "start") {
    return "container flex items-start justify-start px-4 md:px-10 py-4 md:py-8";
  }
  return "container flex items-end justify-end px-4 md:px-0 py-4 md:py-8";
});

const imageRef = ref<HTMLImageElement | null>(null);
const moveX = ref(0);
const moveY = ref(0);

const handleMouseMove = (e: MouseEvent) => {
  if (!imageRef.value) return;

  const rect = imageRef.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - centerX) / 20;
  const deltaY = (mouseY - centerY) / 20;

  moveX.value = deltaX;
  moveY.value = deltaY;
};

const handleMouseLeave = () => {
  moveX.value = 0;
  moveY.value = 0;
};

const imageStyle = computed(() => {
  return {
    transform: `translate(${moveX.value}px, ${moveY.value}px)`,
    transition: "transform 0.1s ease-out",
  };
});

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div :class="containerClass" @mouseleave="handleMouseLeave">
    <img
      ref="imageRef"
      :src="image"
      :alt="alt"
      :style="imageStyle"
      class="transition-transform duration-100 ease-out "
    />
  </div>
</template>
