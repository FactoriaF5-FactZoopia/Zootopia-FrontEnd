<script setup></script>

<template>
  <div class="wrapper">
    <footer class="footer">
      <div id="prueba">
        <p>
          <a
            href="https://github.com/FactoriaF5-FactZoopia/Zootopia-FrontEnd"
            target="_blank"
            >© 2024 Zootopia</a
          >
          <a
            href="https://www.facebook.com"
            target="_blank"
            class="icon-container"
            ><img src="../assets/facebook.png" class="icon normal" />
            <img src="../assets/facebook2.png" class="icon flip" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            class="icon-container"
            ><img src="../assets/instagram.png" class="icon normal" />
            <img src="../assets/instagram2.png" class="icon flip" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            class="icon-container"
            ><img src="../assets/twitter.png" class="icon normal" />
            <img src="../assets/twitter2.png" class="icon flip" />
          </a>
          <a
            href="https://www.whatsapp.com"
            target="_blank"
            class="icon-container"
            ><img src="../assets/whatsapp.png" class="icon normal" />
            <img src="../assets/whatsapp2.png" class="icon flip" />
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  background-color: #3fb37e;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

#prueba {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer a {
  margin: 0 5px;
  text-decoration: none;
  color: #a8ddc5;
  position: relative;
}

.icon-container {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}

.icon {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.6s ease;
  backface-visibility: hidden;
}

.flip {
  transform: rotateY(270deg);
  transition: transform 0.8s;
}

.icon-container:hover .normal {
  transform: rotateY(270deg);
}

.icon-container:hover .flip {
  transform: rotateY(0);
}

p {
  font-weight: bold;
  margin: 0;
  font-size: 20px;
}
</style>
