<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <h1>Home Page</h1>

      <div class="cappa">
    <Button variant="destructive">Click me</Button>
  </div>
</template>

<style scoped>
.cappa {
    margin: 200px;
}

h1 {
    color: rgb(66, 10, 10);
    font-size: 50px;
    text-align: center;
}
</style>