<script setup>
import { ref } from "vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

const handleLogout = () => {
  closeModal();
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="myNav">
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
        id="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/counter">Animals</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/form">Form</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/animalsFilter"
              >Filter</router-link
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" id="zootopia">
            <a href="#" class="nav-link" @click="openModal">
              Log Out <img src="../assets/logout.png" id="imglogout" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div v-if="showModal" class="modal-overlay">
    <div class="modal-content">
      <div id="headerModal"></div>
      <h2>Are you sure you want to leave the page?</h2>
      <div class="modal-buttons">
        <router-link to="/"
          ><button class="btn btn-danger" @click="handleLogout">
            Yes
          </button></router-link
        >
        <button class="btn btn-secondary" @click="closeModal">No</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

#zootopia {
  font-size: 30px;
}

#imglogout {
  width: 30px;
  height: 30px;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;
}

.modal-buttons {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}
.btn-danger {
  background-color: #2d3e50;
  color: white;
  border: white;
}
.btn-danger:hover {
  background-color: #dc3545;
  color: white;
}

.btn-secondary {
  background-color: #2d3e50;
  color: white;
  border: white;
}
.btn-secondary:hover {
  background-color: #35a84f;
  color: white;
}

@media (max-width: 480px) {
  #navbar-toggler {
    margin-right: 25px !important;
  }
  #myNav {
    height: auto;
  }
  #zootopia {
    font-size: 20px;
  }
}
#headerModal {
  width: 100%;
  height: 40px;
  background-color: #2d3e50;
}
</style>
