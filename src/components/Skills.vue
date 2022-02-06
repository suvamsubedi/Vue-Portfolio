<template>
  <div class="w3-container">
    <h2>Skills</h2>
    <p>Mine <strong>Programming</strong> Skills:</p>

    <div class="skills__1">
      <div class="css">CSS <progress class="pgbar" value="75" max="100" /> 75%</div>
    </div>

    <div class="skills__1">
      <div class="html">HTML <progress class="pgbar" value="75" max="100" /> 75%</div>
    </div>

    <div class="skills__1">
      <div class="javascript">Javascript <progress class="pgbar" value="60" max="100" /> 60% </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>

<style>
.skills__1{
    font-weight: bold;
    margin: 10px 32px;
}

progress[value]::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

</style>
