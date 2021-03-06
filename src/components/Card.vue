<template>
  <div class="card">
    <div class="card-img-top" style="height: 15rem;">
      <div class="w-100 h-100  margin-auto" style="background-color:grey;">
        <div class="w-50 h-50 p-1 d-inline d-inline-flex flex-column">
          <div>H:{{data.health}}</div>
          <div>A:{{data.attack}}</div>
          <div>I:{{data.initiative}}</div>
          <div>M:{{data.moves}}</div>
        </div>
        <div class="w-25 h-25 float-right d-inline p-1">
          <div>x {{data.count}}</div>
        </div>
      </div>
      <!--<img :src="data.img" :alt="data.name" class="w-100 m-auto">-->
    </div>
    <div class="card-body">
      <h5 class="card-title">{{data.name}}</h5>
      <p class="card-text">{{data.description}}</p>
      <button class="btn">View statistics</button>
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
