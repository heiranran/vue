<template>
  <div class="page">
     <header>
        <ul class="tab">
            <v-link href="/">Home</v-link>
            <v-link href="/page1">Page1</v-link>
            <v-link href="/page2">Page2</v-link>    
            <v-link href="/page3">Page3</v-link>     
            <v-link href="/about">About</v-link> 
            <v-link href="/nopage">Nopage</v-link>
        </ul>  
     </header>
     <div class="wrap">
       <slot></slot>
     </div>
  </div>
</template>
<script>
  import VLink from '../components/VLink.vue';
  import "../css/base.css";
  export default {
    components: {
      VLink
    }
  }
</script>

<style scoped>
  .page{
    width: 600px;
    margin:0 auto;
  }
  header{
    padding: 15px 30px;
    background: #4078c0;
  }
  .wrap{
    background: #f9f7f5;
    min-height: 500px;
    padding: 10px 20px;
    margin:10px 0;
  }
  ul,li{
    margin:0;
    padding: 0;
    list-style:none;
  }
 .tab{
    display: -webkit-flex;
    -webkit-align-items:center;
  }
  .tab li{
    width: 100%
  }
</style>
