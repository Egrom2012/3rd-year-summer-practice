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
                    { date: '22.05.2022', hours: 6, title: 'Microsoft office', task:'task', completed: false, isEditing: false },
                    { date: '22.05.2022', hours: 5, title: 'Steam', task: 'task', completed: false, isEditing: false },
                    { date: '22.05.2022', hours: 8, title: 'Minecraft', task: 'task', completed: false, isEditing: false },
                    { date: '22.05.2022', hours: 2, title: 'Team fortress 3', task: 'task', completed: false, isEditing: false }
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
