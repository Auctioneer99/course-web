<template>
	<div class="flip-card" ref="card">
		<div class="flip-card-inner w-100 h-100">


			<div class="flip-card-front w-100 h-100 position-absolute"> 
				<div class="card" style="height: 25rem;">
								<div class="card-img-top" style="height: 15rem;">
									<div class="w-100 h-100  margin-auto" style="background-color:grey;">
										<div class="w-50 h-50 p-1 d-inline d-inline-flex flex-column">
											<div>H:{{data.health}}</div>
											<div>A:{{data.attack}}</div>
											<div>I:{{data.initiative}}</div>
											<div>M:{{data.moves}}</div>
										</div>
										<div class="w-25 h-25 float-right d-inline p-1">
											x {{data.count}}
										</div>
									</div>
									<!--<img :src="data.img" :alt="data.name" class="w-100 m-auto">-->
								</div>
								<div class="card-body h-100">
									<h5 class="card-title">{{data.name}}</h5>
									<p class="card-text">{{data.description}}</p>
									<button class="btn" @click="flip">View statistics</button>
								</div>
				</div>  
			</div>


			<div class="flip-card-back w-100 h-100 position-absolute">
				<div class="card" style="height: 25rem;">
				<div class="w-100 h-100" style="background-color:white;">
					asdasd 
					asdasd
					asd<br>
					asdsad
									<button class="btn" @click="flip">View statistics</button>
				</div>
<!--
					<div class="card-img-top" style="height: 15rem;">
									<div class="w-100 h-100  margin-auto" style="background-color:red;">
										<div class="w-50 h-50 p-1 d-inline d-inline-flex flex-column">
										</div>
										<div class="w-25 h-25 float-right d-inline p-1">
										</div>
									</div>
									<img :src="data.img" :alt="data.name" class="w-100 m-auto">
								</div>
								<div class="card-body">
									<h5 class="card-title">1</h5>
									<p class="card-text">2</p>
									<button class="btn" @click="flip">View statistics</button>
								</div>-->
				</div>  
			</div>


		</div>
	</div>
</template>

<script>

export default {
	name: 'CardAnim',
  props: {
    data: Object
  },
	methods: {
		flip() {
			this.$refs.card.classList.toggle('flipped');
		}
	}
}
</script>

<style scoped>
.flip-card {
	background-color: transparent; 
	perspective: 1000px;
}
.flip-card-inner {
	transition: transform 0.6s;
	transform-style: preserve-3d;
	box-shadow: 0 8px 10px 0 rgba(90,90,90,0.2)
}
.flip-card.flipped .flip-card-inner {   
	transform: rotateY(-180deg);
}
.flip-card-front, .flip-card-back {
	backface-visibility: hidden;
}
.flip-card-back {
	transform: rotateY(180deg);
}
</style>