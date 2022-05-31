<template>
    <form @submit.prevent="onsubmit">
        <input type="text" class="textcg" v-model="title" />
        <button type="submit" class="butcg">Создать новую проводку</button>
        <select>
        <option v-for="g in spisok2" value="g.title">{{g.title}}</option>
        </select>
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

            methods:
            {
                onsubmit() {
                    if (this.title.trim()) {
                        const newproject = { title: this.title, id: Date.now(), completed: false, isEditing: false }
                        this.$emit('add-project', newproject)
                        this.title = ''
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

    .textcg {
        width: 500px;
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