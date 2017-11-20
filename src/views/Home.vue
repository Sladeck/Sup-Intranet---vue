<template>
  <main id="home-view">
    <div class="container">
      <h1>Bienvenue dans l'intranet</h1>

      <p>La plate-forme sociale de l'entreprise</p>

      <hr>

      <p>Avez-vous dit bonjour aujourd'hui à :</p>

      <user-card :user="user" v-if="user"></user-card>

      <div class="actions">
        <a href="#" @click.prevent="randomUser" class="btn">
          <icon name="random" /> Dire bonjour à quelqu'un d'autre
        </a>
      </div>
    </div>
  </main>
</template>


<script>
import axios         from 'axios'
import UserCard     from '../components/UserCard.vue'

export default {
  name: 'home-view',

  components: { UserCard },

  data () {
    return {
      users: [],
        user : null
    }
  },

  methods: {
    // Prend un utilisateur au hasard dans le tableau 'users'
    randomUser() {
      this.user = this.users[ Math.floor(Math.random() * this.users.length) ]
    }
  },

  // Lorsque le composant App est initialisé par Vue.js, on charge un utilisateur au hasard
  created(){
    axios.get('http://localhost:1337/collaborateurs')
      .then(res => res.data)
      .then(users => {
        console.log('Users are', users)
        this.users = users
        this.randomUser()
      })
  }
}
</script>

<style lang="css">
</style>
