<template>
    <div id="app">
<<<<<<< Updated upstream
        <h1> Список проектов</h1>
        <ProjectList 
                     v-bind:spisok="spisok" 
                     @remove-project="removeproject"
                     @add-project="addproject">

        </ProjectList>
    </div>
</template>

<script>
import ProjectList from '@/components/Projectaccounting'
export default {
        name: 'App',
        data() {
            return {
                spisok: [
                    { title: 'Microsoft office', id: 1, completed: false },
                    { title: 'Steam', id: 2, completed: false },
                    { title: 'Minecraft', id: 3, completed: false },
                    { title: 'Team fortress 3', id: 4, completed: false }
                ]
            }
        },
        components:
        {
      ProjectList
        },
        methods:
        {
            removeproject(id)
            {
                this.spisok = this.spisok.filter(i => i.id !==id)
            },
            addproject(newproject)
            {
                this.spisok.push(newproject)
            }
        }

}
</script>
=======
        <router-view></router-view>
    </div>
</template>

>>>>>>> Stashed changes

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
