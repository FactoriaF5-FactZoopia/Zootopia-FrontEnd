<script setup>
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <!-- Aquí va el contenido de tu página -->
    </div>
    <footer class="footer">
      <div>
        <p>© 2024 Your Company 
          <a href="https://www.facebook.com"  target="_blank"><img src= "../assets/imgSocMedia/facebook.png"></a>
          <a href="https://www.instagram.com" target="_blank"><img src= "../assets/imgSocMedia/instagram.png"></a>
          <a href="https://www.twitter.com" target="_blank"><img src= "../assets/imgSocMedia/twitter.png"></a>
          <a href="https://www.whatsapp.com" target="_blank"><img src= "../assets/imgSocMedia/whatsapp.png"></a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  background-color: #3FB37E;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center; 

}
.footer a {
  margin: 0 10px;
  color: #007bff;
  text-decoration: none;
}
img{
  width: 30px;
}
p{
  font-weight: bold;
}
</style>