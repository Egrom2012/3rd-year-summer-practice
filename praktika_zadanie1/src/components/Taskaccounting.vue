<template>
    <h2> Список задач</h2>
    <form @submit.prevent="onsubmit">
        <input type="text" class="textcg" v-model="title" />
        <select v-model="selectedspisok">
            <option v-for="g in spisok">{{g.title}}</option>
        </select>
        <button type="submit" class="butcg">Создать новую задачу</button>
    </form>
    <div>
        <ul>
            <li v-for="(i,f) in spisok2" v-bind:class="{done:i.completed}">
                <span>
                    <input type="checkbox"
                           v-on:change="i.completed = !i.completed" />
                    <input type="text" v-if="i.isEditing" @keyup.enter="$emit('edit-Project',i.title,i.pro,2)" v-model=i.title>
                    <span v-else> ID: {{f+1}}, Задача: {{i.title}},</span>
                    <select v-if="i.isEditing" v-model="i.pro">
                        <option v-for="g in spisok">{{g.title}}</option>
                    </select>
                    <span v-else> Проект: {{i.pro}}</span>
                </span>
                <button class="ra" v-on:click="$emit ('change-Editing',i.title, 2)">Изменить</button>
                <button class="rm" v-on:click="$emit ('remove-project',i.id, 2)">&times;</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default
        {
            props:
            ['spisok','spisok2'],
            f: Number,

            data() {
                return {
                }
            },

            methods:
            {
                onsubmit() {
                    if (this.title.trim()) {
                        const newproject = { title: this.title, id: Date.now(), pro: this.selectedspisok, completed: false, isEditing: false}
                        this.$emit('add-project', newproject,2)
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