<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  type: "",
  family: "",
  gender: "",
  date: "",
});

const errorMessage = ref("");
const successMessage = ref(""); // Estado para el mensaje de éxito

const handleSubmit = async (event) => {
  event.preventDefault();

  const genderChar = form.value.gender === "Male" ? "M" : "F";
  const animalTypeMap = {
    Feline: "Feline",
    Canine: "Canine",
    Reptile: "Reptile",
    Mustelide: "Mustelide",
    Leporidae: "Leporidae",
  };
  const animalType = animalTypeMap[form.value.type] || "";

  if (
    form.value.name &&
    animalType &&
    form.value.family &&
    genderChar &&
    form.value.date
  ) {
    try {
      errorMessage.value = "";
      successMessage.value = ""; // Limpiar el mensaje de éxito

      const username = "flash@gmail.com";
      const password = "password";
      const headers = new Headers();
      headers.set("Authorization", "Basic " + btoa(username + ":" + password));
      headers.set("Content-Type", "application/json");

      const response = await fetch(
        "http://localhost:8080/api/v1/animals/create",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify({
            name: form.value.name,
            animalsType: animalType,
            specie: form.value.family,
            gender: genderChar,
            date: form.value.date,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        successMessage.value = "Animal created successfully!"; // Establecer el mensaje de éxito
        console.log("Response:", data);

        // Opcional: Limpiar el formulario después de añadir un animal
        form.value = {
          name: "",
          type: "",
          family: "",
          gender: "",
          date: "",
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Failed to create the animal: ${errorData.message}`);
      }
    } catch (error) {
      console.error("There was an error creating the animal:", error);
      errorMessage.value = "Failed to create the animal.";
    }
  } else {
    errorMessage.value = "All fields are required.";
    alert(errorMessage.value);
  }
};
</script>

<template>
  <main>
    <div class="container">
      <form class="form" @submit="handleSubmit">
        <div class="form-group">
          <label for="validationDefault01" class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            v-model="form.name"
            required
          />
        </div>

        <div class="form-group">
          <label for="validationDefault02" class="form-label">Type</label>
          <select id="dropdown" class="form-control" v-model="form.type">
            <option value="Feline">Feline</option>
            <option value="Canine">Canine</option>
            <option value="Reptile">Reptile</option>
            <option value="Mustelide">Mustelide</option>
            <option value="Leporidae">Leporidae</option>
          </select>
        </div>

        <div class="form-group">
          <label for="validationDefault03" class="form-label">Family</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            v-model="form.family"
            required
          />
        </div>

        <div class="form-group">
          <label for="validationDefault04" class="form-label">Gender</label>
          <select id="dropdown" class="form-control" v-model="form.gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div class="form-group">
          <label for="validationDefault05" class="form-label">Date</label>
          <input
            type="date"
            class="form-control"
            id="validationDefault05"
            v-model="form.date"
            required
          />
        </div>

        <div class="form-group">
          <div id="buttonFinal">
            <button class="btn btn-primary" type="submit">Add Animal</button>
          </div>
        </div>

        <!-- Mostrar el mensaje de éxito si existe -->
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>

        <!-- Mostrar el mensaje de error si existe -->
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 810px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
}

.form {
  width: 100%;
  max-width: 500px;
  background-color: #3fb37e;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #4caf50;
  z-index: 2;
  box-shadow: 2px 2px 2px 2px grey;
}

.form-group {
  margin-bottom: 15px;
}

.btn-primary {
  background-color: #153750 !important;
  width: 95%;
}

.form-control {
  width: 100%;
}

#buttonFinal {
  background-size: 200% auto;
  background-image: linear-gradient(to right, white, grey, white, grey, white);
  animation: moveGradient 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  border-radius: 5px;
  transition: background-position 1.5s linear;
}

#buttonFinal:hover {
  background-image: linear-gradient(
    to right,
    white,
    #153750,
    white,
    #153750,
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

.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
}

@media (max-width: 1800px) {
  #koala {
    opacity: 0;
  }
  @keyframes slideLeft {
    from {
      transform: translate(190%, -42%);
      opacity: 0;
    }
    to {
      transform: translate(940px, -42%);
      opacity: 0;
    }
  }
}

@media (max-width: 600px) {
  .form {
    padding: 15px;
  }
}
</style>
