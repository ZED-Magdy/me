<template>
  <b-navbar class="mb-5 p-4" toggleable="lg" type="dark" variant="dark">
    <b-container>
      <b-navbar-brand>Zed Magdy</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/articles">Blog</nuxt-link>
            </li>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>
<style scoped>
.navbar {
  color: #ffffff !important;
  font-family: Roboto;
  font-weight: 700;
}
.navbar-nav li a {
  color: #ffffff !important;
  padding: 20px 30px !important;
  border-radius: 0.5rem;
}
.navbar-nav li a:hover {
  color: #007bff !important;
}
.nuxt-link-exact-active {
  color: #fff;
  background-color: #007bff;
}
.navbar-nav li a.nuxt-link-exact-active:hover {
  color: #fff !important;
}
@media screen and (min-width: 1024px) {
  .navbar-brand {
    font-size: 28px;
  }
}
</style>
