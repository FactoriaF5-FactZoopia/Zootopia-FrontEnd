<script setup>
  name: 'CenteredForm'
</script>

<template>
  <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="validationDefault01" class="form-label">Name</label>
        <input type="text" class="form-control" id="validationDefault01" required>
      </div>
      <div class="form-group">
        <label for="validationDefault02" class="form-label">Type</label>
        <input type="text" class="form-control" id="validationDefault02" required>
      </div>
      <div class="form-group">
        <label for="validationDefault03" class="form-label">Family</label>
        <select id="dropdown" class="form-control">
          <option value="Félidos">Félidos</option>
          <option value="Cánidos">Cánidos</option>
          <option value="Reptiles">Reptiles</option>
          <option value="Mustelids">Mustelids</option>
          <option value="Leporidae">Leporidae</option>
        </select>
      </div>
      <div class="form-group">
        <label for="validationDefault04" class="form-label">Gender</label>
        <select id="dropdown" class="form-control">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="form-group">
        <label for="validationDefault05" class="form-label">Date</label>
        <input type="date" class="form-control" id="validationDefault05" required>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">Add Animal</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.form {
  width: 100%;
  max-width: 500px;
  background-color: #3FB37E;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #4caf50;
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #153750 !important;
  width: 100%;
  margin-top: 10px;
}

.form-control {
  width: 100%;
}

@media (max-width: 600px) {
  .form {
    padding: 15px;
  }
}
</style>