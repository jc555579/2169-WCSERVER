<script setup>
import Profile from './components/Profile.vue';
import Education from './components/Education.vue';
import Skills from './components/Skills.vue';
</script>

<template>
  <header>
    <img src="../../public/avatar-design.png" width="250" height="250" class="profile-img">
  </header>

  <main>
    <!--Components-->
    <profile></profile>
    <education></education>
    <skills></skills>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo, .profile-img {
  display: block;
  margin: 0 auto ;
}

main {
  margin-top: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
