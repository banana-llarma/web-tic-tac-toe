<script setup>
import Tile from "./Tile.vue";
import Cross from "./Cross/Cross.vue";
</script>

<template>
<div>
  <div class="bord__tiles">
    <Tile v-for="x1 in 9" :key="x1"/>
  </div>
</div>
</template>

<style lang="scss">
.bord__tiles {
  display: grid;
  grid-template-rows: repeat(3, 100px);
  grid-template-columns: repeat(3, 100px);
  border: none;



}

</style>