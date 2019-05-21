<template>
<div id="header_main">
  <ul id="header_menu">
    <router-link to="/"> <li> Home </li></router-link>
    <router-link to="/diary"> <li> Diary </li></router-link>
    <a href="#"><li> Get in Touch! </li></a>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
#header_menu {
  list-style-type: none;
  float: right;
  margin: 30px;
}
#header_menu li {
  float: left;
  padding: 0px 20px;
}
a:visited {
  color: var(--primary-text-color)
}
</style>
