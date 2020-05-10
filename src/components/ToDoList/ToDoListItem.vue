<template>
	<md-list>
		<md-list-item
			v-for="( todo, index ) in todos"
			:key="index"
		>						
			<div class="md-list-item-text">
				<p md-with-hover>{{ todo.text }}</p>
			</div>

			<md-field
				:class="{ 'md-invalid': todos[index].isEmpty }"
				v-if="todo.isEditable"
			>
				<label>Редактирование</label>

				<md-textarea md-autogrow
					v-model.trim="todos[index].text"
				></md-textarea>

				<span class="md-error">Поле не должно быть пустым</span>

			</md-field>

			<md-button class="md-icon-button"
				@click="editToDo(index)"
			>
				<md-icon>edit</md-icon>
				<md-tooltip md-direction="left">Просмотреть / Изменить</md-tooltip>
			</md-button>

			<md-button class="md-icon-button"
				@click="delToDo(index)"
			>
				<md-icon>delete</md-icon>
				<md-tooltip md-direction="left">Удалить</md-tooltip>
			</md-button>						

		</md-list-item>				
	</md-list>
</template>

<script>
	
export default {
	name: 'ToDoListItem',
	props: {
		todos: Array
	},
	methods: {
		delToDo( index )
		{
			this.$emit('del-todo', index);
		},
		editToDo( index )
		{
			this.$emit('edit-todo', index);
		}
	}
}

</script>

<style scoped>

.md-list {
	padding: 0;
	border-left: 1px solid #E7E7E7;
	border-right: 1px solid #E7E7E7;
}

.md-list-item {
	border-bottom: 1px solid #E7E7E7;
}

</style>