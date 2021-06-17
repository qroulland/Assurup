<template>
  <div>
    <div class="sidebar">
      <div class="sidebar-header">
        <router-link :to="{name: 'home'}" :class="'sidebar-header-logo'">
          <img
            src="../assets/logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt="logo"
          >
          Assurup
        </router-link>
      <hr>
      </div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link
            :to="{name: 'home'}" class="nav-link"
            :class="{active: $route.matched.some(({ name }) => name === 'home')}"
          >
            <i class="fas fa-home me-2"></i>
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            :to="{name: 'products'}" class="nav-link"
            :class="{active: $route.matched.some(({ name }) => name === 'products')}"
          >
            <i class="fas fa-box me-2"></i>
            Products
          </router-link>
        </li>
      </ul>
      <hr>
      <p class="text-muted small text-center">2021 © Quentin ROULLAND</p>
    </div>
  </div>
</template>
