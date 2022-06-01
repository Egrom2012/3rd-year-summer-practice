<template>
    <div>
        <h2> Список проводок</h2>
        <WiringList v-bind:spisok3="spisok3"
                     @remove-project="removeproject"
                     @add-project="addproject"
                     @edit-Project="editProject"
                     @change-Editing="changeEditing">
        </WiringList>

    </div>
</template>

<script>
    import WiringList from '@/components/Wiringaccounting'
export default {
        name: 'App',
        data() {
            return {
                spisok3: [
                    { date: '2022-06-01', hours: 6, title: 'Microsoft office', task:'task',id:1, completed: false, isEditing: false },
                    { date: '2022-06-01', hours: 5, title: 'Steam', task: 'task', id: 2, completed: false, isEditing: false },
                    { date: '2022-06-01', hours: 8, title: 'Minecraft', task: 'task', id: 3, completed: false, isEditing: false },
                    { date: '2022-06-01', hours: 2, title: 'Team fortress 3', task: 'task', id: 4, completed: false, isEditing: false }
                ]
            }
        },
        components:
        {
      WiringList
        },
        methods:
        {
            removeproject(id) {
                this.spisok3 = this.spisok3.filter(i => i.id !== id)
            },
            addproject(newproject) {
                this.spisok3.push(newproject)
            },
            changeEditing(itext)
            {
                this.spisok3 = this.spisok3.map(i => {
                    if (i.title === itext) {
                        i.isEditing = !i.isEditing
                    }
                    return i;
                })
            },
            editProject(itext) {
                this.spisok3 = this.spisok3.map(i => {
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
