<template>
  <div class="about mh-100">
    <h1>Collection</h1>
    <button class="btn" @click="collec">Update</button>
    <div class="container row overflow-auto p-0 m-0 scrollbar" style="max-height: 600px;min-height:600px">
      <div v-for="card in collection" :key="card.id" class="col-3 p-3" style="height:27rem;">
        <CardAnim :data=card />
      </div>
    </div>
  </div>
</template>

<script>
import CardAnim from "@/components/CardAnim.vue";

export default {
  name: 'Collection',
  components: {
    CardAnim
  },
  computed: {
      collection() {
          return this.$store.state.collection.cards;
      }
  },
  data() {
    return {

    }
  },
  methods: {
      collec() {
        this.$store.dispatch("updateCollectionCount", this.$store.state.auth.user.username);
      }
  },
  beforeCreate() {
  }
}
</script>
