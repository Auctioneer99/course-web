<template>
  <div class="about mh-100">
    <h1>Collection</h1>
    <div class="container row overflow-auto p-0 m-0 scrollbar" style="max-height: 600px;">


      <div v-for="card in collection" :key="card.name" class="col-4 p-3">
          <Card :data=card />
      </div>


    </div>
    <div></div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: 'Collection',
  components: {
    Card
  },
  computed: {
      collection() {
          return this.$store.state.collection.collection;
      }
  },
  data() {
    return {

    }
  },
  methods: {
      
  },
}
</script>
