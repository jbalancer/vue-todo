import commonjs from '@rollup/plugin-commonjs'; // Convert CommonJS modules to ES6
import vue from 'rollup-plugin-vue'; // Handle .vue SFC files
import buble from '@rollup/plugin-buble'; // Transpile/polyfill with reasonable browser support
import css from "rollup-plugin-import-css";

export default {
	input: 'src/components/ToDoList/ToDoList.vue', // Path relative to package.json
	output: {
		name: 'ToDoList',
		exports: 'named',
	},
	plugins: [
		vue(),
		css(),
		commonjs(),
		buble(), // Transpile to ES5
	],
	external: [
		'vue-material'
	]
};