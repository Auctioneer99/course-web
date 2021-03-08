<template>
	<div class="flip-card" ref="card">
		<div class="flip-card-inner w-100 h-100">
			<div class="flip-card-front w-100 h-100 position-absolute"> 
				<div class="card" style="height: 25rem;">
					<div class="card-img-top" style="height: 15rem;">
						<div class="w-100 h-100 margin-auto font-weight-bold rounded-top" v-bind:style="'background-image: url(' + data.img + ');background-size:100% 100%;'">
							<div class="p-1 d-inline d-inline-flex flex-column bg-light rounded">
								<span>H:{{data.health}}</span>
								<span>A:{{data.attack}}</span>
								<span>I:{{data.initiative}}</span>
								<span>M:{{data.moves}}</span>
							</div>
							<div class="float-right d-inline bg-light p-1 rounded">
								<span>x {{data.count}}</span>
							</div>
						</div>
					</div>
					<div class="card-body h-100 d-flex flex-column justify-content-around">
						<h5 class="card-title m-auto">{{data.name}}</h5>
						<p class="card-text m-auto">{{data.description}}</p>
						<button class="btn m-auto" @click="flip">View statistics</button>
					</div>
				</div>  
			</div>


			<div class="flip-card-back w-100 h-100 position-absolute">
				<div class="card" style="height: 25rem;">
					<div class="w-100 h-100 d-flex flex-column justify-content-around" style="background-color:white;">
						<h4 class="m-auto">{{data.name}}</h4>
						<h5 class="m-auto">Statistics</h5>
						<div class="m-auto">Play: {{data.statistics.playCount}}</div>
						<div class="m-auto">Death: {{data.statistics.deathCount}}</div>
						<div class="m-auto">Kill: {{data.statistics.killCount}}</div>
						<div class="m-auto">DamageDealt: {{data.statistics.damageDealt}}</div>
						<div class="m-auto">DamageReceived: {{data.statistics.damageReceived}}</div>
						<button class="btn align-bottom inline-block m-auto" @click="flip">Back</button>
					</div>
				</div>  
			</div>


		</div>
	</div>
</template>

<script>

export default {
	name: 'CardAnim',
	data() {
		return {
			flipped: false,
		}
	},
  props: {
    data: Object,
  },
	methods: {
		flip() {
			this.flipped = !this.flipped;
			this.$refs.card.classList.toggle('flipped');
			if (this.flipped)
			{
				this.getCardStat(this.data.id);
			}
		},
		async getCardStat(id) {
			this.$store.dispatch("getCardStat", {authToken: await this.$store.getters.authToken, cardid: id})
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