<script setup></script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="myNavLogin">
    <div class="container-fluid">
      <span class="navbar-text">
        <img src="../assets/leonhome.png" alt="Lyon faczoopia logo" id="lyon" />
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Login</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" id="zootopia">
            <router-link class="nav-link" to="/">Zootopia</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
#myNavLogin {
  background-color: #3fb37e !important;
  color: black !important;
  text-decoration: none !important;
  height: 90px;
}

#lyon {
  height: 70px;
  width: 70px;
  margin-left: 20px;
}
#zootopia {
  font-size: 30px;
}

.nav-item {
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;
  text-decoration: none !important;
}

.nav-link {
  text-decoration: none !important;
}

.nav-link:hover {
  text-decoration: none !important;
}

#linkrouter {
  text-decoration: none !important;
}

a:hover {
  color: white !important;
}

.ml-auto {
  font-size: 30px;
  font-weight: bold;
  margin-left: auto;
  text-decoration: none !important;
  margin-right: 25px;
}

#textzoo {
  color: #174030;
}

@media (max-width: 480px) {
  #navbar-toggler {
    margin-right: 25px !important;
  }
  #myNav {
    height: auto;
  }
  #zootopia {
    display: none;
  }
}
</style>
