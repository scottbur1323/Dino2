<template lang="html">
  <div>
  <li v-for="(dino, index) in dinoArray" v-bind:index="index" class="profile-card" >
      <header class="profile-header">
        <img :src="dino.image" @click.self="listItemClicked">
        <h2 @click.self="listItemClicked">{{dino.name}}</h2>
      </header>
      <section class="skills-container" style="display:none">
        <h4>Skills</h4>
        <ul v-for="skill in dino.skills" class="skills-list">
            <li>{{skill}}</li>
        </ul>
      </section>
    </li>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      dinoArray: []
    }
  },
  methods: {
    populateTheCard: function() {
      fetch('../static/dinosaurs.json')
      .then(response => {
        return response.json()
      }).then(response => {
        this.dinoArray = response
      }).catch(error => {
        console.log(error)
      })
    },
    listItemClicked: function(event) {
      if (event.target.parentElement.nextElementSibling.style.display === "") {
        event.target.parentElement.nextElementSibling.style.display = "none"
      } else event.target.parentElement.nextElementSibling.style.display = ""
    }
  },
  mounted: function() {
    this.populateTheCard()
  }
}
</script>
