<template>
  <div class="about mh-100">
    <h1>This project was created by Ruslan Zalilov</h1>
    <div class="container row overflow-auto p-0 m-0 scrollbar" style="max-height: 600px;">
      <div v-for="i in data" :key="i.name" class="col-4 p-3">
        <div class="card">
          <div class="card-img-top p-3" style="height: 20rem;">
            <img :src="i.img" :alt="i.name" class="w-100 m-auto">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{i.name}}</h5>
            <p class="card-text">{{i.description}}</p>
            <a :href="i.link" class="btn btn-primary">Go</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          img: "https://jokac88.github.io/img/icon/bootstrap.png",
          name: "Bootstrap",
          description: "The world’s most popular framework for building responsive, mobile-first sites.",
          link: "https://getbootstrap.com/"
        },
        {
          img: "https://itproger.com/img/tests/vue-js.svg",
          name: "Vue.js",
          description: "Progressive framework for building user interfaces.",
          link: "https://vuejs.org/"
        },
        {
          img: "https://a0.awsstatic.com/main/images/logos/aws_logo_smile_1200x630.png",
          name: "Amazon Web Services",
          description: "The world’s most comprehensive and broadly adopted cloud platform.",
          link: "https://aws.amazon.com/"
        },
        {
          img: "https://cdn.iconscout.com/icon/free/png-512/unity-5-555544.png",
          name: "Unity",
          description: "Unity is the world’s most popular game engine.",
          link: "https://unity.com/"
        },
        {
          img: "https://www.ascendtraining.com/wp-content/uploads/2015/06/javascript.png",
          name: "Velocity.js",
          description: "Velocity is an animation engine.",
          link: "http://velocityjs.org/"
        },
        {
          img: "https://pbs.twimg.com/media/C1q-Nz_WEAYjrEu.png",
          name: "jQuery",
          description: "jQuery is a fast, small, and feature-rich JavaScript library.",
          link: "https://jquery.com/"
        }
      ]
    }
  }
}
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5; 
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #4285F4; 
}

</style>
