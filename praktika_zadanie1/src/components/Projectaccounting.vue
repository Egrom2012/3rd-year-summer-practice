<template>
  <div>
    <form @submit.prevent="onsubmit">
<<<<<<< Updated upstream
      <input type="text" class="textcg" v-model="title" />
      <button type="submit" class="butcg">Создать новую задачу</button>
    </form>
    <div>
      <pre>editedId:{{ editedId }}</pre>
      <ul>
        <li
          v-for="(i, f) of spisok"
          v-bind:class="{ done: i.completed }"
          :key="i.id"
        >
          <span>
            <input type="checkbox" v-on:change="i.completed = !i.completed" />
            <strong> {{ f + 1 }} </strong>
            <input v-if="editedId === i.id" type="text" :value="i.title" />
            <span v-else>{{ i.title }} </span>
          </span>
          <button class="ra" @click="editedId = i.id">Изменить</button>
          <button class="rm" v-on:click="$emit('remove-project', i.id)">
            &times;
          </button>
        </li>
      </ul>
=======
        <input type="text" class="textcg" v-model="title" />
        <button type="submit" class="butcg">Создать новый проект</button>
    </form>
    <div>
        <ul>
            <li v-for="(i,f) in spisok" v-bind:class="{done:i.completed}">

                <span>
                    <input type="checkbox"
                           v-on:change="i.completed = !i.completed" />
                    <input type="text" v-if="i.isEditing" @keyup.enter="$emit('edit-Project',i.title)" v-model=i.title>
                    <span v-else> {{f+1}} {{i.title}}</span>
                </span>
                <button class="ra" v-on:click="$emit ('change-Editing',i.title)">Изменить</button>
                <button class="rm" v-on:click="$emit ('remove-project',i.id)">&times;</button>

            </li>
        </ul>
>>>>>>> Stashed changes
    </div>
  </div>
</template>

<script>
<<<<<<< Updated upstream
export default {
  props: ["spisok"],
  f: Number,
  data: () => ({
    title: "",
    editedId: null,
  }),
=======
    export default
        {
            props: ['spisok'],
            f: Number,
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

  methods: {
    onsubmit() {
      if (this.title.trim()) {
        const newproject = {
          title: this.title,
          id: Date.now(),
          completed: false,
        };
        this.$emit("add-project", newproject);
        this.title = "";
      }
    },
  },
};
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
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
.rm {
  background: red;
  color: #ffffff;
  border-radius: 0%;
  font-weight: bold;
}
input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
=======
=======
>>>>>>> Stashed changes
    .done {
        text-decoration: line-through;
    }
>>>>>>> Stashed changes

form {
  display: flex;
  padding: 1rem;
}

.textcg {
  width: 500px;
  padding: 0.3rem;
}

.butcg {
  width: 300px;
}

.ra {
  font-weight: bold;
  width: 150px;
}
</style>