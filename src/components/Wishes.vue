<template>
  <div>
    <div v-bind:key="theo.id" v-for="theo in theoes">
      <TheoItem v-bind:theo="theo" v-on:del-theo="$emit('del-theo', theo.id)" />
    </div>
  </div>
</template>

<script>
import TheoItem from './TheoItem.vue';

export default {
  name: "heoes",
  components: {
    theoItem
  },
  props: ["theoes"]
}
</script>

<style scoped>

</style>
