<template>
<home>
    <div>
        <ul class='menu'>
            <li><h1>공지사항</h1></li>
            <li><h1>QnA</h1></li>
            <li><router-link to="/board">건의사항</router-link></li>
            <li><router-link to="/info">내 정보</router-link></li>
            <li><router-link to="/com">커뮤니티</router-link></li>
        </ul>
    </div>
</home>
</template>

<script>
export default {
    
}
</script>
<style scoped>

home ul.menu li{padding:20px 100px; list-style:none;}

</style>

