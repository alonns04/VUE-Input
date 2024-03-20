<script>
import InputTag from "./components/InputTag.vue";

export default{
  components:{
    InputTag,
  },
  methods: {
    handleOnTagsChange(tags) {
      console.log(tags);
    },
  },
};

</script>

<template>
  <div style="text-align: center;">
<h1>INPUT CON VUE</h1>
<inputTag  @onTagsChange="handleOnTagsChange"/>
</div>
</template>

<style scoped>
</style>
