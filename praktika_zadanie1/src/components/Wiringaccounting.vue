<template>
    <form @submit.prevent="onsubmit">
        <input type="date" class="textcg1" v-model="date" />
        <input type="number" class="textcg2" max="24" min="1" v-model="hours" v-bind:style="{'background-color': color}" @click="changecolor" @keyup.enter="changecolor"/>
        <input type="text" class="textcg3" v-model="title" />
        <input type="text" class="textcg4" v-model="task" />
        <button type="submit" class="butcg">Создать новую проводку</button>
    </form>
    <div>
        <ul>
            <li v-for="(i,f) in spisok3" v-bind:class="{done:i.completed}">

                <span>
                    <input type="checkbox"
                           v-on:change="i.completed = !i.completed" />
                    <input type="text" v-if="i.isEditing" @keyup.enter="$emit('edit-Project',i.title)" v-model=i.title>
                    <span v-else>Дата:{{i.date}}, Количество часов:{{i.hours}}, Описание:{{i.title}}, Задача:{{i.task}}</span>
                </span>
                <button class="ra" v-on:click="$emit ('change-Editing',i.title)">Изменить</button>
                <button class="rm" v-on:click="$emit ('remove-project',i.id)">&times;</button>

            </li>
        </ul>
    </div>
</template>

<script>
    export default
        {
            props:
            ['spisok3'],
            f: Number,
            data() {
                return {
                    color:'white'
                }
                },
            methods:
            {
                onsubmit() {
                    if (this.title.trim()) {
                            const newproject = { date: this.date, hours: this.hours, title: this.title, task: this.task, id: Date.now(), completed: false, isEditing: false }
                            this.$emit('add-project', newproject)
                            this.date = ''
                            this.hours = ''
                            this.title = ''
                            this.task = ''
                    }
                },
                changecolor() {
                    if (this.hours == 8) {
                        this.color = 'lime'
                    }
                    if (this.hours > 8) {
                        this.color ='red'
                    }
                    if (this.hours < 8) {
                        this.color = 'yellow'
                    }
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
    /*
    .textcg2 {
        background:white;
        width: 50px;
        padding: 0.3rem
    }
        */
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
</style>