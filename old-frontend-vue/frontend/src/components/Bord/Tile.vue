<script setup>
import Cross from "./Cross/Cross.vue";
</script>



<template>
<div :class="[$style['bord__tile']]">
  <Cross/>
</div>
</template>

<style lang="scss" module>
  .bord__tile {
    background-color: black;
    border: 2px solid white;

    &:nth-child(1), &:nth-child(2), &:nth-child(3) { border-top: none; }
    &:nth-child(7), &:nth-child(8), &:nth-child(9) { border-bottom: none; }
    &:nth-child(1), &:nth-child(4), &:nth-child(7) { border-left: none; }
    &:nth-child(3), &:nth-child(6), &:nth-child(9) { border-right: none; }
    }
</style>