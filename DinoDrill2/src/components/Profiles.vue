<template lang="html">
  <main>
    <section id="profiles-container">
      <h2>Profiles</h2>
      <ul id="profiles">
          <app-skills-list></app-skills-list>
      </ul>
    </section>
  </main>
</template>

<script>
import SkillsList from './SkillsList'

export default {
    components: {
      appSkillsList: SkillsList
    }
}
</script>
