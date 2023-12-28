<template>
  <div class="flex flex-col">
    <h1>Log in to {{ title }} course!</h1>
    <button class="px-6 py-4 bg-blue-400 rounded font-bold text-white mt-4">
      Login with github
    </button>
  </div>
</template>

<script setup>
const { title } = useCourse();
</script>
