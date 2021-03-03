<template>
        <div class="card">
          <div class="card-img-top p-3" style="height: 20rem;">
            <img :src="data.img" :alt="data.name" class="w-100 m-auto">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{data.name}}</h5>
            <p class="card-text">{{data.description}}</p>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object
  }
}
</script>
