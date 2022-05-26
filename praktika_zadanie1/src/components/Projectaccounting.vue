<template>
    <form @submit.prevent="onsubmit">
        <input type="text" class="textcg" v-model="title" />
        <button type="submit" class="butcg">Создать новую задачу</button>
    </form>
    <div>
        <ul>
            <li v-for="(i,f) of spisok" v-bind:class="{done:i.completed}">
                <span>
                    <input type="checkbox"
                           v-on:change="i.completed = !i.completed" />
                    <strong> {{f+1}} </strong>
                    <input v-if="editedId===i.id" type="text" :value="i.title">
                    <span v-else>{{i.title}} </span> 
                </span>
                <button class="ra" v-on:click="editedId=i.id"> Изменить</button>
                <button class="rm" v-on:click="$emit ('remove-project',i.id)">&times;</button>

            </li>
        </ul>
    </div>
</template>

<script>
    export default
        {
            props: ['spisok'],
            f: Number,
            data() {
                return
                {
                    title: '';
                    editedId:null
                }
            },

            methods:
            {
                onsubmit() {
                    if (this.title.trim()) {
                        const newproject = { title: this.title, id: Date.now(), completed: false }
                        this.$emit('add-project', newproject)
                        this.title = ''
                    }
                }
            }
        }
</script>

<style scoped>
    ul 
    {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li
    {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm
    {
        background: red;
        color: #ffffff;
        border-radius: 0%;
        font-weight: bold;
    }
    input
    {
        margin-right: 1rem;
    }

    .done
    {
        text-decoration: line-through;
    }

    form {
        display: flex;
        padding: 1rem;
    }

    .textcg 
    {
        width: 500px;
        padding: 0.3rem
    }

    .butcg
    {
        width: 300px;
    }

    .ra 
    {
        font-weight: bold;
        width: 150px;
    }
</style>