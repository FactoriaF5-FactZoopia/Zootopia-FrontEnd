<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();
const errorMessage = ref('');

const login = async () => {
  const authValue = `${username.value}:${password.value}`;
  const encodedAuthValue = btoa(authValue);

  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Basic ${encodedAuthValue}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  try {
    const response = await fetch('http://localhost:8080/api/v1/login', requestOptions);

    if (response.ok) {
      router.push('/counter');
      console.log("WE DID IT AGAIN!");
      
    } else {
      errorMessage.value = 'Invalid Credentials';
      console.log("A POSITIVE MISTAKE, MEANS THAT DONT LET IN ANYONE!!!!!");
      
    }
  } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'There was an error logging in. Please try again.';
    console.log("WHY FAILED AGAIN, FORGIVE IT, I WONT SURRENDER!!!!!!!!");
    
  }
};
</script>

<template>
  <main>
    <div id="boxTitle">
      <div id="boxmain">
        <div id="boxPhoto">
          <img src="../assets/leonhome.png" id="imgHome" alt="leonhome" />
        </div>
        <section class="container">
          <h2 class="neon-text">ZOOTOPIA</h2>
        </section>
      </div>
    </div>
    <div id="boxLogin">
      <div class="login-form">
        <h1>CONNECT WITH US</h1>
        <div class="form-group">
          <input
            type="text"
            v-model="username"
            class="form-control"
            placeholder="Username"
            id="UserName"
          />
          <i class="mdi mdi-account"></i>
        </div>
        <div class="form-group log-status">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="Password"
            id="Password"
          />
          <i class="mdi mdi-lock"></i>
        </div>
        <span v-if="errorMessage" class="alert">{{ errorMessage }}</span>
        <div id="boxButton">
          <button @click="login" type="button" class="log-btn">
            <i class="mdi mdi-account"></i> LOGIN
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: inline-grid;
  grid-template-columns: 65% 35%;
  width: 100%;
  min-height: 810px;
}

.container {
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.neon-text {
  font-size: 180px;
  transition: 3s linear;
  color: transparent;

  background-image: linear-gradient(
    to left,
    #3fb37e,
    #2d3e50,
    #2d3e50,
    #2d3e50
  );
  background-size: 200%;
  -webkit-background-clip: text;
  animation: move 10s linear infinite;
}

.neon-text:hover {
  color: #3fb37e;
  text-shadow: 0 0 10px #2f9265, 0 0 10px #2f9265, 0 0 10px #2f9265,
    0 0 10px #2f9265, 0 0 10px #2f9265, 0 0 10px #2f9265;
}

@keyframes move {
  100% {
    background-position: 2000px 0;
    color: #3fb37e;
    text-shadow: 0 0 10px #2f9265, 0 0 10px #2f9265, 0 0 10px #2f9265,
      0 0 10px #2f9265, 0 0 10px #2f9265, 0 0 10px #2f9265;
  }
}
#boxTitle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 805px;
}
#boxmain {
  width: 100%;
  height: 80%;
}
#boxPhoto {
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#imgHome {
  width: 40%;
  height: 100%;
}
#boxText {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#boxLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 805px;
}
.text {
  background: url(/src/assets/snakegif.gif);
  background-size: contain;
  background-position: top left;
  color: transparent;
  background-clip: text;
  font-size: 170px;
  font-weight: bold;
  font-family: sans-serif;
}

.register-photo .image-holder {
  display: table-cell;
  width: auto;
  background: url(../assets/Image20240805123506.png);
  background-size: cover;
}

@media (max-width: 991px) {
  .register-photo form {
    padding: 40px;
  }
}

.register-photo form h2 {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.register-photo form .form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid #dfe7f1;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  color: inherit;
  text-indent: 0px;
  height: 40px;
}

.register-photo form .form-check {
  font-size: 13px;
  line-height: 20px;
}

.register-photo form .btn-primary {
  background: #2d3e50 !important;
  border: none;
  border-radius: 4px;
  padding: 11px;
  box-shadow: none;
  margin-top: 35px;
  text-shadow: none;
  outline: none !important;
}

.register-photo form .btn-primary:hover,
.register-photo form .btn-primary:active {
  background: green;
}

.register-photo form .btn-primary:active {
  transform: translateY(1px);
}

.register-photo form .already {
  display: block;
  text-align: center;
  font-size: 12px;
  color: #6f7a85;
  opacity: 0.9;
  text-decoration: none;
}

#login {
  justify-content: center;
}

.btn {
  background: #2d3e50 !important;
  width: 100px;
  margin-top: 50px;
}

#button {
  display: flex;
  justify-content: center;
  align-items: center;
}

#logoUser {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  color: #2d3e50;
  text-align: center;

  font-size: 30px;
}

.login-form {
  width: 550px;
  border-radius: 10px;
  width: 65%;
  height: 45%;
  padding: 40px 30px;
  background: #3fb37e;
  margin: auto;
  border: 1px solid #fff;
}

.form-group {
  position: relative;
  margin-bottom: 15px;
}
.form-control {
  width: 100%;
  height: 50px;
  border: none;
  padding: 5px 7px 5px 15px;
  background: #fff;
  color: #666;
  border: 2px solid #ddd;
}
.form-group .mdi {
  position: absolute;
  right: 15px;
  top: 17px;
  color: #999;
}

.mdi {
  top: 13px !important;
  color: #0ac986 !important;
}

.form-control:hover {
  color: black !important;
  background-color: white;
  border-color: #fff !important;
  outline: none;
  box-shadow: none;
}

.log-status.wrong-entry .form-control,
.wrong-entry .form-control + .mdi {
  border-color: #ed1c24;
  color: #ed1c24;
}
.log-btn {
  background: #2d3e50;
  display: inline-block;
  width: 95%;
  font-size: 16px;
  height: 50px;
  color: #fff;
  text-decoration: none;
  border: none;
}

.link {
  text-decoration: none;
  color: #c6c6c6;
  float: right;
  font-size: 12px;
  margin-bottom: 15px;
}

.alert {
  display: none;
  font-size: 12px;
  color: #f00;
  float: left;
}

a {
  text-decoration: none !important;
}
#boxButton {
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, white, grey, white, grey, white);
  animation: moveGradient 1s linear infinite;
  transition: background-position 1.5s linear;
  background-size: 200% auto;
}
#boxButton:hover {
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

@media (max-width: 480px) {
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #boxTitle,
  #boxLogin {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }
  #imgHome {
    width: 80%;
    height: auto;
  }
  .neon-text {
    font-size: 60px;
  }
  .login-form {
    width: 90%;
    height: auto;
  }
  .form-control {
    height: 40px;
  }
  .log-btn {
    height: 40px;
    width: 91%;
    border-radius: 3px;
  }
}
</style>
