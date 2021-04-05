<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-container>
        <b-navbar-brand href="#">Zed-Magdy</b-navbar-brand>

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
    <br />
    <Nuxt />
    <div class="jumbotron footer bg-light m-0 mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <div class="btn-group">
              <a href="#" class="btn btn-primary btn-lg"
                ><span class="d-none d-md-inline">Twitter</span>
                <b-icon icon="twitter"></b-icon
              ></a>
              <a href="#" class="btn btn-dark btn-lg"
                ><span class="d-none d-md-inline">Github</span>
                <b-icon icon="github"></b-icon
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  padding-bottom: 0px !important;
}
.nuxt-link-exact-active {
  border-bottom: 3px #007bff solid;
}
@media screen and (min-width: 1024px) {
  .footer {
    bottom: 0;
    margin-top: 10rem !important;
  }
}
.router-link-exact-active {
  color: #fff;
  background-color: #007bff;
}
</style>
