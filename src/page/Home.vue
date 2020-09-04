<template>
  <div class="container">
    <div class="item" v-for="(item,index) in  list" :key="index">
      <h3>第{{index+1}}注</h3>
      <div class="blue" v-for="(subItem,subIndex) in  item.blue" :key="subIndex">
          {{subItem}}
      </div>
      <div class="red">{{item.red}}</div>
    </div>
    <button @click="createBall">Go</button>
  </div>
</template>

<script>
import {
  Toast
} from 'vant';
import Footer from "@/components/Footer";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Footer
  },
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState(["copyright"]),
    
  },
  mounted(){
    
  },
  destroyed(){

  },
  methods: {

    createBall(){
      let obj = {
        blue: [],
        red: 0
      }
      
      let red =  Math.ceil(Math.random()*16)
      let blueSet = new Set()
      while(blueSet.size<6){
        let blue =  Math.ceil(Math.random()*33)
        blueSet.add(blue)
      }
      blueSet.forEach(v=>{
        obj.blue.push(v)
      })
      obj.blue.sort((m,n)=>m-n)
      obj.red = red
      this.list.push(obj)
    }
    
  }
};
</script>

<style lang="scss" scoped>
.container{
  max-width: 1080px;
  height: 100vh;
  overflow-y: scroll;
  .item{
    border: 1px solid #333;
  }
}
.blue{
  display: inline-block;
  width: 10vw;
  height: 10vw;
  background: LightSkyBlue;
  border-radius: 100%;
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  line-height: 10vw;
  margin: 3vw;
}
.red{
  width: 10vw;
  height: 10vw;
  background: Salmon;
  border-radius: 100%;
  color: #ffffff;
  font-size: 28px;
  text-align: center;
  line-height: 10vw;
  margin: 3vw;
}
button{
  display: block;
  margin: 0 auto;
  margin-top: 100px;
  width: 40vw;
  height: 10vw;
  background: purple;
  color: #fff;
  font-weight: 28px;
  line-height: 10vw;
  font-weight: 900;
  border: none;
  outline: none;
  border-radius: 3px;
  position: absolute;
  bottom: 200px;
  left: 30vw;
}
</style>
