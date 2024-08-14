<script setup>
import { ref, onMounted } from "vue";

const isFlipped = ref(false);
const isVisible = ref(false);

function handleFlip() {
  isFlipped.value = !isFlipped.value;
}

onMounted(() => {
  // Añade un pequeño retraso para asegurarte de que la transición se vea
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
});
</script>

<template>
  <main>
    <div id="border">
      <div id="boxCard" :class="{ visible: isVisible }">
        <div id="flip" :class="{ flipped: isFlipped }">
          <div class="flipper">
            <div id="boxFlip" class="front">
              <div id="boxImg">
                <div id="img">
                  <img src="../assets/canido.jpg" id="imagen" alt="" />
                </div>
              </div>
            </div>
            <div id="boxInfo"></div>
            <div id="back" class="back"></div>
          </div>
        </div>
        <div id="moreInfo">
          <button id="buttonInfo" @click="handleFlip">INFO</button>
        </div>
        <div id="actions"></div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 810px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#border {
  width: 280px;
  height: 505px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-size: 200% auto;
}
#border:hover {
  width: 300px;
  height: 560px;
  transform: scale(1.05);
  transition: 500ms;
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
  opacity: 0;
  transition: opacity 5s ease-in-out;
}
#boxCard:hover {
  /*  transform: scale(1.05);
  transition: 500ms;
  filter: brightness(110%); */
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
  border-radius: 10px;
}
#moreInfo {
  width: 100%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;
}
#actions {
  width: 100%;
  height: 80px;

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

#flip {
  perspective: 1000px; /* Necesario para el efecto 3D */
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
  background-color: red;
}

.flipped .flipper {
  transform: rotateY(180deg);
}
</style>
