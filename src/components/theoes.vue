<template>
  <div>
    <div v-bind:key="theo.id" v-for="theo in theoes">
      <theoItem v-bind:theo="theo" v-on:del-theo="$emit('del-theo', theo.id)" />
    </div>
  </div>
</template>

<script>
import theoItem from './theoItem.vue';

export default {
  name: "theoes",
  components: {
    theoItem
  },
  props: ["theoes"]
}
</script>

<style scoped>

</style>
