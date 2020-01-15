<template>
	<div id="nav">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
	</div>
</template>
<style lang="scss">
#nav {
	position: fixed;
	top: grid(1);
	right: grid(1);
	background-color: black;
	color: white;
	border-radius: 0.25rem;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.125);
	display: flex;
	padding: 1rem;
	a {
		display: block;
		padding: 0.5rem;
		color: currentColor;
		text-decoration: none;
	}
}
</style>
