<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  import HelloWorldComponent from '@/components/hello-world.component.vue';

  @Component({
    components: {
      'hello-world': HelloWorldComponent
    }
  })
  export default class HomeComponent extends Vue {
  }
</script>
