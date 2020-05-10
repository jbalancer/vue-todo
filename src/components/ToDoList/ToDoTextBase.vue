<template>
	<md-content class="md-primary todo-text-base">
		<md-field
			:class="{'md-invalid': todoInp.textEmpty}"
		>
			<label>Введите текст ...</label>
			<md-textarea
				v-model.trim="todoInp.textInp"
			></md-textarea>
			<span class="md-error">Упс! Введите хотя бы 1 символ!</span>
		</md-field>
		<md-button class="md-raised"
			@click="addToDo"
		>Добавить</md-button>
	</md-content>
</template>

<script>
	
export default {
	name: 'ToDoTextBase',
	props: {
		todoInp: Object
	},
	methods: {
		addToDo()
		{
			this.$emit('add-todo');
		}
	}
}

</script>

<style scoped>
	
.todo-text-base {
	padding: 20px;
}

.todo-text-base .md-button {
	display: block;
	margin: 0 auto;
}

.todo-text-base .md-textarea {
	min-height: 40px!important;
	max-height: 100px;
}

.todo-text-base.md-primary .md-has-textarea {
	background-color: rgba(0, 0, 0, .4);
	border-radius: 5px;
}

.todo-text-base.md-primary .md-textarea {
	border-color: #FFFFFF;
	-webkit-text-fill-color: #FFFFFF!important;
	color: #FFFFFF;
	caret-color: #C6DBFF;
}

.todo-text-base.md-primary .md-field label {
	color: #FFFFFF;
}

.todo-text-base.md-primary .md-field.md-has-value label {
	color: #8DB8FF;
}

.todo-text-base.md-primary .md-field.md-invalid .md-error {
	color: #FFB8B8
}

.todo-text-base.md-primary .md-field:before {
	border: 1px solid #8DB8FF!important;
	border-radius: 5px;
}

.todo-text-base.md-primary .md-field:after {
	border: none!important;
	border-radius: 5px;
}

</style>