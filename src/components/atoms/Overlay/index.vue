<template>
  <div class="overlay">
    <div class="overlay__content">
      <slot />
    </div>
  </div>
</template>
<style lang="scss">
.overlay {
  position: fixed;
  background-color: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}
</style>