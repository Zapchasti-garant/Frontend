<template>
	<div class="carousel">
		<div class="wrapper__carousel">
			<button @click.prevent="prevImage" class="btn-reset carousel__prev">
				<SvgIcon type="mdi" :path="iconLeft" class="icon"></SvgIcon>
			</button>

			<transition-group
				tag="ul"
				name="slide"
				class="carousel__images list-reset"
			>
				<li
					v-for="(image, index) in images"
					:key="index"
					class="carousel__item"
					v-show="isCurrentImage(index)"
				>
					<img :src="image" :alt="image" />
				</li>
			</transition-group>
			<!-- <Transition :name="transitionName">
				<img
					:key="currentImage"
					:src="images[currentImage]"
					:alt="images[currentImage]"
				/>
			</Transition> -->

			<button @click.prevent="nextImage" class="btn-reset carousel__next">
				<SvgIcon type="mdi" :path="iconRight" class="icon"></SvgIcon>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
// @ts-ignore
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiArrowLeftCircle, mdiArrowRightCircle } from '@mdi/js'
import { ref } from 'vue'
import { images } from '../helpers/pathToImg'

const isCurrentImage = (index: number) => index === currentImage.value
const iconLeft = ref(mdiArrowLeftCircle)
const iconRight = ref(mdiArrowRightCircle)
const currentImage = ref<number>(1)
const transitionName = ref('slide-left')
const nextImage = () => {
	currentImage.value = (currentImage.value + 1) % images.length
	transitionName.value = 'slide-right'
}
const prevImage = () => {
	currentImage.value = (currentImage.value - 1 + images.length) % images.length
	transitionName.value = 'slide-left'
}
</script>

<style scoped>
.carousel {
	max-width: 1920px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	background-image: url('/img/back-carousel.jpg');
}
.wrapper__carousel {
	position: relative;
	display: flex;
	width: 70%;
	height: 450px;
}
.carousel__images {
	width: 100%;
	height: 100%;
	display: flex;
	overflow: hidden;
}
.carousel__item {
	width: 100%;
	height: 100%;
}
.carousel__item img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
	transition: transform 0.5s ease;
}
.slide-left-enter,
.slide-right-leave-to {
	transform: translateX(-100%);
}
.slide-right-enter,
.slide-left-leave-to {
	transform: translateX(100%);
}
.carousel__next {
	position: absolute;
	z-index: 5;
	top: 50%;
	right: 0;
	transform: translateY(-50%);
}
.carousel__prev {
	position: absolute;
	z-index: 5;
	top: 50%;
	left: 0;
	transform: translateY(-50%);
}
.icon {
	width: 45px;
	height: 45px;
}
</style>
