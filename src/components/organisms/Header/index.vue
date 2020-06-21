<template functional>
  <header class="o-header">
    <div class="containerFluid">
      <div class="row">
        <div class="col-12">
          <div class="o-header__logo">
            <h1>
              <a class="o-header__link" href="#">
                Jamies Vacation
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
.o-header {
  background: $white;
  box-shadow: 0 1px 0 0 rgba(26, 41, 58, 0.2);
  display: flex;
  opacity: 1;
  padding: $s-6;
  transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.6s;
  width: 100%;
  text-align: center;

  &__logo {
    h1 {
      margin-bottom: 0;
    }

    a {
      color: $cyan;

      @include hover-focus-active {
        color: $cyan;
        text-decoration: none;
      }
    }
  }
}
</style>
