<template>
    <div id="app">
        <h1> Список проектов</h1>
        <ProjectList v-bind:spisok="spisok"
                     @remove-project="removeproject"
                     @add-project="addproject"
                     @change-Editing="changeEditing"
                     @edit-Project="editProject"
                     >
        </ProjectList>
    </div>
</template>

<script>
import ProjectList from '@/components/Projectaccounting'
export default {
        name: 'App',
        data() {
            return {
                editValue:'',
                spisok: [
                    { title: 'Microsoft office', id: 1, completed: false, isEditing: false },
                    { title: 'Steam', id: 2, completed: false, isEditing: false },
                    { title: 'Minecraft', id: 3, completed: false, isEditing: false },
                    { title: 'Team fortress 3', id: 4, completed: false, isEditing: false }
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
            },
            changeEditing(titletext)
            {
                this.editValue = titletext;
                this.spisok = this.spisok.map(i => {
                    if (i.title === titletext)
                    {
                        i.isEditing = !i.isEditing;
                    }
                    return i;
                })
            },
            editProject(titletext)
            {
                this.spisok = this.spisok.map(i => {
                    if (i.title === titletext) {
                        i.isEditing = !i.isEditing;
                        i.title = this.editValue;
                    }
                    return i;
                })
            }
        }

}
</script>

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
