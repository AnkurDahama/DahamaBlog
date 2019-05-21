<template>
  <div id="app">
    <div class="navigation">
      <Header> </Header>
    </div>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import DiaryEntry from './components/DiaryEntry.vue'

import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Header,
    DiaryEntry,
    Home
  }
}
</script>

<style>
:root {
  --primary-text-color: #2c3e50;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
.container {
  margin-left: 100px;
  
}
.content {
  margin-top: 30px;
  width: 50%;
}


</style>
