<template>
  <iframe
    :src="`https://player.vimeo.com/video/${props.videoId}`"
    width="560"
    height="315"
    frameborder="0"
    title="Video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</template>

<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
});
</script>
