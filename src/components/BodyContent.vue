<template>
<div class=content__main>
    <img class="content__img" src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
    <p class="content__p">Hello guys this is <b>Suvam Subedi</b>. And I am here to help you guys in study related materials.you can get the video lecture of all subject related to IT. As well as i am here to provide notes, syllabus, old questions, solution and all the IT problems.</p>    
</div>
</template>

<script>
export default {
    name: 'BodyContent'  
}
</script>

<style>
    .content__main{
        display: flex;
        flex-direction: column;
    }

    .content__img{
        align-self: center;
    }

    .content__p{
        margin: 16px;
    }
</style>