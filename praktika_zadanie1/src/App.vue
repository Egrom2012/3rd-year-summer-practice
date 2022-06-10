<template>
    <div id="app">
        <router-view 
                     v-bind:spisok="spisok"
                     v-bind:spisok2="spisok2"
                     v-bind:spisok3="spisok3"
                     @remove-project="removeproject"
                     @add-project="addproject"
                     @edit-Project="editProject"
                     @change-Editing="changeEditing"

                     >
        </router-view>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                spisok: [
                    { title: 'Team fortress 3', id: 1, completed: false, isEditing: false },
                    { title: 'Half-life 3', id: 2, completed: false, isEditing: false},
                    { title: 'Бально-рейтинговая система ЮЗГУ', id: 3, completed: false, isEditing: false},
                    { title: 'ПО для РЖД', id: 4, completed: false, isEditing: false }
                ],
                spisok2: [
                    { title: 'Написание движка', id: 1, pro: 'Team fortress 3', completed: false, isEditing: false},
                    { title: 'Написание лора', id: 2, pro: 'Half-life 3', completed: false, isEditing: false},
                    { title: 'Обновление системы', id: 3, pro: 'Бально-рейтинговая система ЮЗГУ', completed: false, isEditing: false},
                    { title: 'Создание схемы', id: 4, pro: 'ПО для РЖД', completed: true, isEditing: false}
                ],
                spisok3: [
                    { date: '2022-06-02', hours: 6, title: 'Написал движок', pro: 'Написание движка', id: 1, completed: false, isEditing: false},
                    { date: '2022-06-01', hours: 5, title: 'Написал лор', pro: 'Написание лора', id: 2, completed: false, isEditing: false},
                    { date: '2022-06-01', hours: 8, title: 'Создано обновление', pro: 'Обновление системы', id: 3, completed: false, isEditing: false},
                    { date: '2022-05-12', hours: 8, title: 'Создано основная схема', pro: 'Создание схемы', id: 4, completed: false, isEditing: false,}
                ]
            }
        },
        methods:
        {
            removeproject(id, form) {
                if (form === 1)
                    this.spisok = this.spisok.filter(i => i.id !== id)
                if (form === 2)
                    this.spisok2 = this.spisok2.filter(i => i.id !== id)
                if (form === 3)
                    this.spisok3 = this.spisok3.filter(i => i.id !== id)
            },
            addproject(newproject, form) {
                if (form === 1)
                    this.spisok.push(newproject)
                if (form === 2)
                    this.spisok2.push(newproject)
                if (form === 3)
                    this.spisok3.push(newproject)
            },
            changeEditing(itext, form) {
                if (form === 1) {
                    this.spisok = this.spisok.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing
                        }
                        return i;
                    })
                }
                if (form === 2) {
                    this.spisok2 = this.spisok2.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing
                        }
                        return i;
                    })
                }
                if (form === 3) {
                    this.spisok3 = this.spisok3.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing
                        }
                        return i;
                    })
                }
            },
            editProject(itext, ipro, form) {
                if (form === 1) {
                    this.spisok = this.spisok.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing;
                            i.title = itext;
                        }
                        return i;
                    })
                }
                if (form === 2) {
                    this.spisok2 = this.spisok2.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing;
                            i.title = itext;
                            i.pro = ipro;
                        }
                        return i;
                    })
                }
                if (form === 3) {
                    this.spisok3 = this.spisok3.map(i => {
                        if (i.title === itext) {
                            i.isEditing = !i.isEditing;
                            i.title = itext;
                            i.pro = ipro;
                        }
                        return i;
                    })
                }
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
