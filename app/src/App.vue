<template>
	<div id="app">
		<navigation></navigation>
		<main id="page">
			<router-view />
		</main>
	</div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
	components: { Navigation }
};
</script>

<style lang="scss" src="@/assets/scss/app.scss"></style>
