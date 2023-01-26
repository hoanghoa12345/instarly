<template>
  <div>
    <p>post detail is working!</p>

    <div>
      <textarea v-model="query" name="" id="" cols="30" rows="10"></textarea>
      <button type="button" @click="executeQuery(query)">Exec</button>
      <div>
        <code>
          {{ result }}
        </code>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getPosts } from "@/composables/usePost";
import { useClient } from "@/composables/useClient";

const supabase = useClient();
const result = ref(null);
const query = ref("");

async function executeQuery(query) {
  const { data, error } = await supabase.from("posts").select(query);

  result.value = data;

  if (error) {
    result.value = error;
  }
}

onMounted(async () => {
  // const { data, error } = await getPosts();
  // console.log(data, error);
});
</script>
