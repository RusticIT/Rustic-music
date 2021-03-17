<template>
  <div id="app">
    <rm-header></rm-header>
    <rm-search></rm-search>
    <rm-footer></rm-footer>
  </div>
</template>

<script>
import RmFooter from "./components/RmFooter";
import RmHeader from "./components/RmHeader";
import RmSearch from "./components/RmSearch";

export default {
  name: "App",
  components: {
    RmFooter,
    RmHeader,
    RmSearch
  }
};
</script>
