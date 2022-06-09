<template>
    <h2> Список проводок</h2>
    <form @submit.prevent="onsubmit">
        <input type="date" class="textcg1" v-model="date" @change="changecolor" />
        <input type="number" class="textcg2" v-bind:max="24-checkhours" min="1" v-model="hours" @click="changecolor" @keyup.enter="changecolor" />
        <input type="text" class="textcg3" v-model="title" placeholder="Описание" />
        <select v-model="selectedtask">
            <option disabled value="">Выберите один из вариантов</option>
            <option v-for="e in filteredLast">
                {{e.title}}
            </option>
        </select>
        <button type="submit" class="butcg" @click="changecolor" @change="changecolor">Создать новую проводку</button>
    </form>
    <div>
        Фильтр проводок
        <select v-model="filter" @change="onChangeSelect($event)">
            <option value="All">За всё время</option>
            <option value="Day">За день</option>
            <option value="Month">За месяц</option>
        </select>
        <input type="date" v-model="date" @click="changecolor" @change="changecolor"/>
        <span>  <span id="kvadrat" v-bind:style="{'background':color}">    </span></span>
        <ul>
            <li v-for="(i,f) in filteredList" v-bind:class="{done:i.completed}">
                <span>
                    <input type="checkbox"
                           v-on:change="i.completed = !i.completed" />
                    <input type="text" v-if="i.isEditing" @keyup.enter="$emit('edit-Project',i.title,i.pro, 3)" v-model=i.title>
                    <span v-else>Дата:{{i.date}}, Количество часов:{{i.hours}}, Описание:{{i.title}}</span>
                    <select v-if="i.isEditing" v-model="i.pro">
                        <option v-for="e in spisok2" :disabled="spisok2.filter(el=>el.completed).map((el) => el.id).includes(i.id) || e.completed">{{e.title}}</option>
                    </select>
                    <span v-else> Задача: {{i.pro}}</span>
                </span>
                <button class="ra" @click="$emit ('change-Editing',i.title,3)">Изменить</button>
                <button class="rm" @click="$emit ('remove-project',i.id,3)">&times;</button>

            </li>
        </ul>
    </div>
</template>

<script>
    export default
        {
            props:
                ['spisok3','spisok2'],
            f: Number,
            data() {
                return {
                    color: 'white',
                    hours: 1,
                    filter: 'All',
                    Dayn: '',
                    date: ''
                }
            },
            computed: {
                filteredList: function () {
                    if (this.filter == 'All') {
                        return this.spisok3
                    }
                    if (this.filter == 'Day') {
                        return this.spisok3.filter(t => {
                            return this.date.includes(t.date)
                        })
                    }
                    if (this.filter == 'Month') {
                        return this.spisok3.filter(t => {
                            return t.date.substr(5, 2).includes(this.date.substr(5,2))
                        })
                    }
                },

                filteredLast: function () {
                    return this.spisok2.filter(function (p) {
                        return !p.completed
                    })
                },
                checkhours: function() {
                   return this.spisok3
                        .filter(t => this.date.includes(t.date))
                        .reduce((total, i) => total + i.hours, 0)
                }
            },
            methods:
            {
                onsubmit() {
                    if (this.title.trim()) {
                        const newproject = { date: this.date, hours: this.hours, title: this.title, pro: this.selectedtask, id: Date.now(), completed: false, isEditing: false }
                            this.$emit('add-project', newproject, 3)
                            this.hours = ''
                            this.title = ''
                            this.pro = ''
                    }
                },
                  changecolor() {
                    if (this.checkhours == 8)
                        this.color = 'lime'

                    if (this.checkhours > 8)
                        this.color = 'red'

                    if (this.checkhours < 8)
                          this.color = 'yellow'
                  }
            }
        }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        background: red;
        color: #ffffff;
        border-radius: 0%;
        font-weight: bold;
    }

    .done {
        text-decoration: line-through;
    }

    form {
        display: flex;
        padding: 1rem;
    }

    .textcg1 {
        width: 100px;
        padding: 0.3rem
    }
    .textcg3 {
        width: 200px;
        padding: 0.3rem
    }
    .textcg4 {
        width: 100px;
        padding: 0.3rem
    }

    .butcg {
        width: 300px;
    }

    .ra {
        font-weight: bold;
        width: 150px;
    }

    #kvadrat {
        background: pink;
        
    }
</style>