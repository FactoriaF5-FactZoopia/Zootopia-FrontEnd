<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNav">
    <span class="navbar-text">
      <img src="../assets/icons/Logo.png" alt="Lyon faczoopia logo" id="lyon" />
    </span>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
      id="navbar-toggler"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink to="/" id="linkrouter">
            <a class="nav-link" href="#">Home</a>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/counter" id="linkrouter">
            <a class="nav-link" id="links" href="#">Counter</a>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/form" id="linkrouter">
            <a class="nav-link" href="#">Form</a>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/animals" id="linkrouter">
            <a class="nav-link" href="#">Animals</a>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/animals2" id="linkrouter">
            <a class="nav-link" href="#">Animals2</a>
          </RouterLink>
        </li>
      </ul>
      <div class="ml-auto">
        <RouterLink to="/" id="linkrouter">
          <a class="nav-link" id="textzoo" href="#">Zootopia</a>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>

<style>
#myNav {
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
    height: 95px;
  }
}
</style>
