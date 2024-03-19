<template>
	<Header />
	<Navigation />
	<RouterView />
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';
</script>

<style scoped></style>
