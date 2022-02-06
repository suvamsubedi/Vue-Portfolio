<template>
  <div class="footer__div">
    <p>Designed and Developed By Suvam</p>
    <p>Copyright &copy; 2022. [this is the demo]</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.footer__div {
  border-top: 1px solid lightgray;
  padding: 20px;
  background-color: #f7f7f7;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer__div > p {
  padding: 5px;
  font-size: 15px;
}
</style>
