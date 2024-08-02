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
          <a href="https://www.facebook.com" target="_blank">Facebook</a>
          <a href="https://www.instagram.com" target="_blank">Instagram</a>
          <a href="https://www.twitter.com" target="_blank">Twitter</a>
          <a href="https://www.whatsapp.com" target="_blank">WhatsApp</a>
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
}
</style>