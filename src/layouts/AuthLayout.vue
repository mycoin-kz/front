<template>
  <div class="auth-layout">
    <div class="logo-auth">
      <div class="logo-auth-image">
        <img src="@/assets/img/logo.svg" alt="Coinfolio">
      </div>
      <h1>Coinfolio</h1>
    </div>
    <div class="auth-form">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.auth-layout{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 8rem;
}
.auth-form{
  background: #FCFCFC;
  box-shadow: 0px 8px 50px rgba(80, 71, 136, 0.14);
  border-radius: 32px;
  padding: 2.5rem 4rem;
  
}
.logo-auth{
  display: grid;
}
.logo-auth-image{
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>