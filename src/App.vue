<template>
  <TopHead></TopHead>
  <HeaDer></HeaDer>
  <MiddleText></MiddleText>
  <ToolBox></ToolBox>
  <ProjectGig></ProjectGig>
  
</template>

<script>
import TopHead from './components/TopHead'
import HeaDer from './components/HeaDer'
import MiddleText from './components/MiddleText'
import ToolBox from './components/ToolBox.vue'
import ProjectGig from './components/ProjectGig.vue'

export default{
  name: 'App',
  components: {
    TopHead,
    HeaDer,
    MiddleText,
    ToolBox,
    ProjectGig,
  }
}

</script>

<style>

</style>
