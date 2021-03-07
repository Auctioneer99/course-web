<template>
  <div class="about mh-100">
    <h1>Collection</h1>
    <div class="container row overflow-auto p-0 m-0 scrollbar" style="max-height: 600px;min-height:600px">
      <div v-for="card in collection" :key="card.id" class="col-3 mb-3" style="height:25rem;">
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

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5; 
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #191b1f; 
}
</style>