<template> 
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="myNav">
        <span class="navbar-text">
        <img src="../assets/Logo.png" alt="Lyon faczoopia logo" id="lyon">
    </span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <RouterLink to="/"> <a class="nav-link" href="#">Home</a> </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/counter"> <a class="nav-link" href="#">Counter</a> </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/form"> <a class="nav-link" href="#">Form</a> </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/animals"> <a class="nav-link" href="#">Animals</a></RouterLink>
      </li>
    </ul>
  </div>
</nav>



</template>

<script setup>



</script>


<style>

#myNav{
    background-color:#3FB37E !important;
}

#lyon{
    height: 70px;
    width: 70px;
}

.nav-item{
    font-size: 20px;
    font-weight: bold;
    padding-left: 30px;
  }

</style>