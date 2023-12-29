<template>
  <div class="flex flex-col">
    <h1>Log in to {{ title }} course!</h1>
    <button
      @click="login"
      class="px-6 py-4 bg-blue-400 rounded font-bold text-white mt-4"
    >
      Login with github
    </button>
  </div>
</template>

<script setup>
const { title } = useCourse();
const supabase = useSupabaseClient();

const login = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  if (error) {
    console.log(error);
  }
};
</script>
