<template>
  <div class="header">
    <div class="left">
      <Icon size="35px" color="#ffffff">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          enable-background="new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M64,384h384v-42.666H64V384z M64,277.334h384v-42.667H64V277.334z M64,128v42.665h384V128H64z"
              ></path>
            </g>
          </g>
        </svg>
      </Icon>
    </div>
    <div class="right">
      <div class="icon">
        <Icon size="35px" color="#ffffff">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"
              fill="currentColor"
            ></path>
          </svg>
        </Icon>
      </div>

      <div class="user">
        <div >张老师</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Icon} from '@vicons/utils'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
  components:{
    Icon
  }
})
</script>

<style scoped lang="css">
.header {
  height:7%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
}
.left {
 display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}

.icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right {
  display: flex;
  justify-content: space-around;
  line-height: 80px;
  margin-right: 80px;
}
.user {
  color: #ffffff;
  font-size: 23px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
