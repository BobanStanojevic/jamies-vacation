<template>
  <div class="o-footer">
    <div class="o-footer__menu container">
      <ul class="o-footer__menu-list">
        <li class="o-footer__menu-item">
          <a class="o-footer__menu-link" href="#">About Me</a>
        </li>
        <li class="o-footer__menu-item">
          <a class="o-footer__menu-link" href="#">Contact</a>
        </li>
        <li class="o-footer__menu-item">
          <a class="o-footer__menu-link" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
.o-footer {
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: $s-2;
  border-top: solid 1px $gray-light;

  &__menu {
    position: relative;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-list {
      display: flex;
      position: relative;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    &-item {
      padding: 20px;
    }

    &-link {
      color: $black;
    }
  }
}
</style>
