<template>
  <TopHead></TopHead>
  <HeaDer></HeaDer>
  <MiddleText></MiddleText>
  <ToolBox></ToolBox>
</template>

<script>
import TopHead from './components/TopHead'
import HeaDer from './components/HeaDer'
import MiddleText from './components/MiddleText'
import ToolBox from './components/ToolBox.vue'

export default{
  name: 'App',
  components: {
    TopHead,
    HeaDer,
    MiddleText,
    ToolBox,
  }
}

</script>

<style>

</style>
