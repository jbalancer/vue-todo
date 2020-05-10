<template>
	<div class="md-layout md-alignment-center-center">
		<div class="md-layout-item md-size-60 md-small-size-80 md-xsmall-size-100">
			<md-content class="md-elevation-1">
				<ToDoTextBase :todo-inp="todoInp" @add-todo="addToDo" />
				<ToDoListItem :todos="todos" @del-todo="delToDo" @edit-todo="editToDo" />					
			</md-content>
		</div>
	</div>
</template>

<script>

import ToDoListItem from './ToDoListItem.vue';
import ToDoTextBase from './ToDoTextBase.vue';

export default {
	name: 'ToDoList',
	data()
	{
		return {
			todoInp: {
				textEmpty: false,
				textInp: ''
			},
			todos: [
				{
					text: '1. Example',
					isEditable: false,
					isEmpty: false
				},
				{
					text: '2. Example',
					isEditable: false,
					isEmpty: false
				},
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident odio culpa, sapiente ex eius fugiat esse! Dolorum ullam, sunt culpa, necessitatibus, tenetur, sed voluptate itaque incidunt adipisci facere suscipit harum.',
					isEditable: false,
					isEmpty: false
				},
				{
					text: '4. Example',
					isEditable: false,
					isEmpty: false
				}
			]
		}
	},
	components: {
		ToDoListItem,
		ToDoTextBase
	},
	methods: {
		addToDo()
		{
			let
				curText = this.todoInp.textInp;

			if ( curText != '' )
			{
				if ( this.todoInp.textEmpty )
					this.todoInp.textEmpty = false;

				this.todos.push({
					text: curText,
					isEditable: false,
					isEmpty: false
				});

				this.todoInp.textInp = '';
			}
			else
			{
				this.todoInp.textEmpty = true;
			}
		},
		delToDo( index )
		{
			this.todos.splice(index, 1);
		},
		editToDo( index )
		{
			if ( this.todos[index].isEditable && this.todos[index].text == '' )
			{
				this.todos[index].isEmpty = true;

				return;
			}

			if ( this.todos[index].isEmpty )
				this.todos[index].isEmpty = false;

			this.todos[index].isEditable = !this.todos[index].isEditable;
		}
	}
}

</script>