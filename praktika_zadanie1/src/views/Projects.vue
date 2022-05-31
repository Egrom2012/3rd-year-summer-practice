<template>
    <div>
        <h2> Список проектов</h2>
        <ProjectList v-bind:spisok="spisok"
                     @remove-project="removeproject"
                     @add-project="addproject"
                     @edit-Project="editProject"
                     @change-Editing="changeEditing">
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
            removeproject(id) {
                this.spisok = this.spisok.filter(i => i.id !== id)
            },
            addproject(newproject) {
                this.spisok.push(newproject)
            },
            changeEditing(itext)
            {
                this.spisok = this.spisok.map(i => {
                    if (i.title === itext) {
                        i.isEditing = !i.isEditing
                    }
                    return i;
                })
            },
            editProject(itext) {
                this.spisok = this.spisok.map(i => {
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
