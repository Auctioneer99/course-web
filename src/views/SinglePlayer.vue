<template>
    <div class="h-100 d-flex flex-column justify-content-around">
        <h1>SinglePlayer</h1>
        <div class="container row overflow-auto p-3 m-0 scrollbar h-100">
            <div class="col-4 h-100">
                <div class="card h-100">
                    <div class="card-img-top p-3" style="height: 25rem;background-color: black">
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <h5 class="card-title m-auto">Learn</h5>
                        <p class="card-text m-auto">desc</p>
                    </div>
                </div>
            </div>
            <div class="col-4 h-100">
                <div class="card h-100">
                    <div class="card-img-top p-3" style="height: 25rem;background-color: black">
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <h5 class="card-title m-auto">Vs Bots</h5>
                        <p class="card-text m-auto">desc</p>
                    </div>
                </div>
            </div>
            <div class="col-4 h-100">
                <div class="card h-100">
                    <div class="card-img-top p-3" style="height: 25rem;background-color: black">
                        <img class="w-100 m-auto">
                    </div>
                    <div class="card-body d-flex flex-column justify-content-around">
                        <h5 class="card-title m-auto">Campaign</h5>
                        <p class="card-text m-auto">desc</p>
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
