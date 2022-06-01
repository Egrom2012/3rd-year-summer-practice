<template>
    <div>
        <h2> Список задач</h2>
        <TaskList v-bind:spisok2="spisok2"
                     @remove-project="removeproject"
                     @add-project="addproject"
                     @edit-Project="editProject"
                     @change-Editing="changeEditing">
        </TaskList>
        <WiringList v-bind:spisok2="spisok2"></WiringList>
    </div>
</template>

<script>
    import TaskList from '@/components/Taskaccounting'
    import WiringList from '@/components/Wiringaccounting'
export default {
        name: 'App',
        data() {
            return {
                spisok2: [
                    { title: 'Помыть жопу', id: 1, completed: false, isEditing: false },
                    { title: 'Купит игру в steam', id: 2, completed: false, isEditing: false },
                    { title: 'Поиграть в Minecraft', id: 3, completed: false, isEditing: false },
                    { title: 'Team fortress 3', id: 4, completed: false, isEditing: false }
                ]
            }
        },
        components:
        {
      TaskList, WiringList
        },
        methods:
        {
            removeproject(id) {
                this.spisok2 = this.spisok2.filter(i => i.id !== id)
            },
            addproject(newproject) {
                this.spisok2.push(newproject)
            },
            changeEditing(itext)
            {
                this.spisok2 = this.spisok2.map(i => {
                    if (i.title === itext) {
                        i.isEditing = !i.isEditing
                    }
                    return i;
                })
            },
            editProject(itext) {
                this.spisok2 = this.spisok2.map(i => {
                    if (i.title === itext) {
                        i.isEditing = !i.isEditing;
                        i.title = itext;
                    }
                    return i;
                })
            }
        }
}
</script>
