<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

const flippedCards = ref([]);
const animals = ref([]);

const username = "flash@gmail.com";
const password = "password";
const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));
headers.set("Content-Type", "application/json");

async function fetchAnimalsByType(animalType) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/animals/type/${animalType}`,
      {
        method: "GET",
        headers: headers,
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    animals.value = data;
    flippedCards.value = new Array(data.length).fill(false);
  } catch (error) {
    console.error("Error fetching animals:", error);
  }
}

function handleFlip(index) {
  flippedCards.value[index] = !flippedCards.value[index];
}

onMounted(() => {
  fetchAnimalsByType("Mustelide");
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <main>
    <div id="boxMain" :class="{ visible: isVisible }">
      <div v-for="(animal, index) in animals" :key="index" id="border">
        <div id="boxCard">
          <div id="flip" :class="{ flipped: flippedCards[index] }">
            <div class="flipper">
              <div id="boxFlip" class="front">
                <div id="boxImg">
                  <div id="img">
                    <img src="../assets/mustelido.jpg" id="imagen" alt="" />
                  </div>
                </div>

                <div id="boxInfo">
                  <div id="boxInformation">
                    <div id="name">NAME</div>
                  </div>
                  <div id="boxResultInformation">
                    <div id="ResultName">{{ animal.name }}</div>
                  </div>
                </div>
              </div>
              <div id="back" class="back">
                <div id="contBack">
                  <div id="boxInformation">
                    <div id="animalType">ANIMAL TYPE</div>
                  </div>
                  <div id="boxResultInformation">
                    <div id="ResultanimalType">{{ animal.animalsType }}</div>
                  </div>
                  <div id="boxInformation">
                    <div id="specie">SPECIE</div>
                  </div>
                  <div id="boxResultInformation">
                    <div id="Resultspecie">{{ animal.specie }}</div>
                  </div>
                  <div id="boxInformation">
                    <div id="gender">GENDER</div>
                  </div>
                  <div id="boxResultInformation">
                    <div id="Resultgender">{{ animal.gender }}</div>
                  </div>
                  <div id="boxInformation">
                    <div id="date">DATE</div>
                  </div>
                  <div id="boxResultInformation">
                    <div id="Resultdate">{{ animal.date }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="moreInfo">
            <div id="buttonInfo" @click="handleFlip(index)">MORE INFO</div>
          </div>
          <div id="actions">
            <div id="boxbtn">
              <img
                class="bin"
                src="../assets/borrarAnimal.png"
                alt="Card image cap"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
#boxMain {
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto auto;
}
main {
  min-height: 810px;
  align-items: center;
  justify-content: center;
  display: flex;
}
#border {
  width: 280px;
  height: 505px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  background-size: 200% auto;
}
#boxbtn {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: #153750;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  cursor: pointer;
}
#boxbtn:hover {
  background-color: grey;
}
#border:hover {
  width: 300px;
  height: 560px;
  transform: scale(1.1);
  transition: 500ms;
  margin: 40px;
  filter: brightness(110%);
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    white,
    rgb(63, 179, 126),
    white,
    rgba(21, 55, 80, 1),
    white
  );
  background-position: 100% 50%;
  animation: moveGradient 1s linear infinite;
}
@keyframes moveGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
#boxCard {
  width: 290px;
  height: 550px;

  background: rgb(63, 179, 126);
  background: linear-gradient(
    0deg,
    rgba(21, 55, 80, 1) 0%,
    rgba(63, 179, 126, 1) 100%
  );
  border-radius: 10px;
}
#boxMain {
  opacity: 0;
  transition: opacity 5s ease-in-out;
}
#boxMain.visible {
  opacity: 1;
}
#boxCard:hover {
  background: rgb(63, 179, 126);
  background: radial-gradient(
    circle,
    rgba(63, 179, 126, 1) 0%,
    rgba(21, 55, 80, 1) 100%
  );
}
#boxCard.visible {
  opacity: 1;
}

#boxFlip {
  width: 100%;
  height: 400px;
}
#boxImg {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
}
#img {
  width: 85%;
  height: 250px;
  border: 2px solid white;
  border-radius: 10px;
}
#imagen {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  border: 2px solid white;
}
#boxInfo {
  width: 100%;
  height: 100px;
}
#moreInfo {
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;
}
#actions {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

#flip {
  perspective: 1000px;
  width: 100%;
  height: 400px;
}

.flipper {
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
}

.front,
.back {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;

  border-radius: 10px;
}

.back {
  transform: rotateY(180deg);
  background-color: transparent;
}

.flipped .flipper {
  transform: rotateY(180deg);
}
.bin {
  width: 55px;
  height: 45px;
}
#buttonInfo {
  width: 150px;
  height: 30px;
  background-color: rgba(21, 55, 80, 1);
  border-radius: 5px;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}
#buttonInfo:hover {
  background-color: grey;
}
#boxInformation {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#boxResultInformation {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#name,
#animalType,
#specie,
#gender,
#date {
  width: 70%;
  height: 40px;
  border: 2px solid white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
#ResultName,
#ResultanimalType,
#Resultspecie,
#Resultgender,
#Resultdate {
  font-weight: bold;
  color: white;
}
#contBack {
  margin-top: 10px;
}
@media (max-width: 480px) {
  #boxMain {
    display: grid;
    grid-template-columns: auto;
  }
}
</style>
