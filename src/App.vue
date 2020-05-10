<template>
	<div id="app">
		<ToDoList />
	</div>
</template>

<script>
	
import ToDoList from './components/ToDoList/ToDoList.vue';

export default {
	name: 'App',
	components: {
		ToDoList
	}
}

</script>

<style>
	
	@import url("./assets/css/material-icons.css");

</style>