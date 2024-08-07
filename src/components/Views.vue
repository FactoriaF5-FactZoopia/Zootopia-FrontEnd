<script setup></script>

<template>
  <main>
    <div class="container">
      <main>
        <div class="all-animals">
          <div class="boxanimals">
            <div class="allanimals">
              <img
                id="imganimals"
                src="../assets/allanimals.jpg"
                alt="Animals"
              />
              <div id="contSpan">
                <div id="spanAnimals">
                  <span id="animalsspan">ALL &nbsp ANIMALS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="categories">
          <div class="boxcategory">
            <div class="category felidos" id="impares">
              <img src="../assets/felido.jpg" alt="Felidos" />
              <span>FELIDOS</span>
            </div>
          </div>
          <div class="boxcategory">
            <div class="category canidos" id="pares">
              <img src="../assets/canido.jpg" alt="Canidos" />
              <span>CANIDOS</span>
            </div>
          </div>
          <div class="boxcategory">
            <div class="category reptiles" id="impares">
              <img src="../assets/reptiles.jpg" alt="Reptiles" />
              <span>REPTILES</span>
            </div>
          </div>
          <div class="boxcategory">
            <div class="category mustelidos" id="pares">
              <img src="../assets/mustelido.jpg" alt="Mustelidos" />
              <span>MUSTELIDOS</span>
            </div>
          </div>
          <div class="boxcategory">
            <div class="category leporidae" id="impares">
              <img src="../assets/leporidae.jpg" alt="Leporidae" />
              <span>LEPORIDAE</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </main>
</template>

<style scoped>
@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slideLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.container {
  font-family: Arial, sans-serif;
}

header {
  background-color: #35a84f;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

nav ul li {
  cursor: pointer;
}

h1 {
  margin: 0;
}

main {
  padding: 20px;
}

.all-animals {
  text-align: center;
  margin-bottom: 20px;
  animation: slideLeft 1.4s ease-in-out forwards;
}

.categories {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.category {
  text-align: center;
  width: 230px;
}

.category img {
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 350px;
}

.category span {
  display: block;
  background-color: #2d3e50;
  color: white;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  margin-top: -10px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#pares {
  margin-top: 70px;
  animation: slideUp 1.4s ease-in-out forwards;
}
#impares {
  animation: slideDown 1.4s ease-in-out forwards;
}

.boxanimals {
  display: flex;
  justify-content: center;
  align-items: center;
}

.allanimals {
  width: 550px;
  height: 180px;
  border-radius: 10px;
}

#imganimals {
  margin-top: 0;
  width: 550px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 140px;
  object-fit: cover;
}

#spanAnimals {
  display: block;
  background-color: #2d3e50;
  color: white;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  height: 40px;
}

.boxcategory:hover {
  transform: scale(1.2);
  transition: 500ms;
  filter: brightness(140%);
}

.allanimals:hover {
  transform: scale(1.2);
  transition: 500ms;
  filter: brightness(130%);
}

@media (max-width: 480px) {
  #pares {
    margin-top: 0px;
  }
  #imganimals {
    width: 350px;
  }
  .boxcategory:hover {
    transform: scale(1.1);
    transition: 500ms;
    filter: brightness(140%);
  }

  .allanimals:hover {
    transform: scale(1.1);
    transition: 500ms;
    filter: brightness(130%);
  }
}
</style>
