<template>
  <div>
    <Navbar />
    <Nuxt />
    <div class="jumbotron footer bg-dark m-0 mt-3">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <a
              href="https://twitter.com/ZedMagdy"
              target="_blank"
              class="btn btn-outline-primary btn-lg"
              ><span class="d-none d-md-inline">Twitter</span>
              <b-icon icon="twitter"></b-icon
            ></a>
            <a
              href="https://github.com/ZED-Magdy"
              target="_blank"
              class="btn btn-outline-light btn-lg"
              ><span class="d-none d-md-inline">Github</span>
              <b-icon icon="github"></b-icon
            ></a>
          </div>
          <div class="col-12 text-light text-center mt-3">
            <p>Copyrigths ZedMagdy 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar,
  },
}
</script>
<style scoped>
body {
  font-family: Roboto;
  font-weight: 400 !important;
}
.nuxt-link-exact-active {
  border-bottom: 3px #007bff solid;
}
.footer {
  border-radius: 0px;
}
@media screen and (min-width: 1024px) {
  .footer {
    bottom: 0;
    margin-top: 10rem !important;
  }
}
</style>
