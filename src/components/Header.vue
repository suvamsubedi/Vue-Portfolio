<template>
    <div class="topnav">
  <router-link to ="/">Profile</router-link>
  <router-link to="skills">Skills</router-link>
  <router-link to="contact">Contact</router-link>
  <router-link to="about">About</router-link>
</div>

</template>

<script>
export default {
    name: 'Header'
}
</script>


<style>
.topnav {
  display: flex;
  justify-content: space-between;
  background-color: #04AA6D;
  
}

.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: darkgreen;
  font-size: 17px;

  
}


.topnav a:hover {
  background-color: aquamarine;
  color: black;
}

.topnav a.active {
  background-color: #15d0f1;
  color: rgb(84, 141, 10);
}




</style>