<template>
  <label
    class="px-4 py-2 text-white rounded font-bold cursor-pointer"
    :class="{
      'bg-gray-500': !modelValue,
      'bg-green-500': modelValue,
    }"
  >
    <input
      type="checkbox"
      class="hidden"
      :value="modelValue"
      @input="() => $emit('update:modelValue', !modelValue)"
    />
    {{ modelValue ? "Complete!" : "Mark as complete!" }}
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>

<style scoped>
::selection {
  display: none;
}
</style>
