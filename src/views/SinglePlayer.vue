<template>
    <div class="mh-100">
        <h1>SinglePlayer</h1>
        <div class="container row overflow-auto p-0 m-0 scrollbar">
            <div class="col-4 p-3">
                <div class="card">
                    <div class="card-img-top p-3" >
                        style="height: 20rem;"
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">card</h5>
                        <p class="card-text">desc</p>
                    </div>
                </div>
            </div>
            <div class="col-4 p-3">
                <div class="card">
                    <div class="card-img-top p-3" >
                        style="height: 20rem;"
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">card</h5>
                        <p class="card-text">desc</p>
                    </div>
                </div>
            </div>
            <div class="col-4 p-3" style="background-color:black;">
                <div class="card">
                    <div class="card-img-top p-3" >
                        style="height: 20rem;"
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">card</h5>
                        <p class="card-text">desc</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
  name: 'SinglePlayer',
  data() {
    return {
      disabled: false,
    }
  },
  methods: {

  },
}
</script>
