<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>

<h1>
  <span>Diseño Web</span> y 
  <br>
  Apps <span>Interactivas</span>
</h1>

  <div class="fondo-home">
    <div class="botones">
      <Button>
        <RouterLink to="/indecision">Sí o no</RouterLink>
      </Button>

      <Button>
        <RouterLink to="/batman">Batman</RouterLink>
      </Button>

      <Button>
        <RouterLink to="/simpson">Simpson</RouterLink>
      </Button>

      <Button>
        <a href="https://www.upv.es">UPV</a>
      </Button>
    </div>
  </div>
</template>

<style scoped>

h1 {
    color: rgb(166, 26, 26);
    font-size: 3rem;
    background-color: rgb(51, 5, 9);
}

.fondo-home {
  background-color: rgb(51, 5, 9);
  height: 150vh;
  color: rgb(251, 254, 255);
}


.botones > Button {
  margin-right: 6rem;
  background-color: rgba(166, 26, 26, 0.708);
} 


.botones > Button:hover {
  background-color: rgb(9, 9, 9);
  color: red
} 



</style>