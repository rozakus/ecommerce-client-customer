<template>
  <div id="app" class="h-100">
    <Navbar/>
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  components: { Navbar },
  created () {
    this.$store.dispatch('isUserLogin')
  }
}
</script>
