<template>
  <div id="app">
    <rm-header></rm-header>
    <rm-search></rm-search>
    <rm-footer></rm-footer>
  </div>
</template>

<script>
import RmFooter from "./components/RmFooter.vue";
import RmHeader from "./components/RmHeader.vue";
import RmSearch from "./components/RmSearch.vue";

export default {
  name: "App",
  components: {
    RmFooter,
    RmHeader,
    RmSearch
  }
};
</script>
