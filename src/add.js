import { prompt, Separator } from 'inquirer';
import chalk from 'chalk';
import shell from 'shelljs';
import upath from 'upath';
import { routeForReact, routeForVue } from './add/index';

const log = console.log;
const question = [
	{
		type: 'input',
		name: 'project',
		message: 'Project Name:',
		when: (answers) => answers.type === 'routeForVue',
		validate(val) {
			if (val === '') {
				return 'Project Name is required!';
			} else {
				return true;
			}
		}
	},
	{
		type: 'list',
		name: 'template',
		message: 'Select template:',
		when: (answers) => answers.type === 'routeForVue',
		choices: [
			new Separator(' = For template = '),
			'basic',
			'paging',
			'form'
		],
		default: 'basic'
	},
	// paging
	{
		type: 'list',
		name: 'pagingType',
		message: 'Select type:',
		when: (answers) => answers.template === 'paging',
		choices: [
			new Separator(' = For template = '),
			'basic',
			'tabs'
		],
		default: 'basic'
	},
	{
		type: 'list',
		name: 'pagingMode',
		message: 'Select mode:',
		when: (answers) => answers.template === 'paging',
		choices: [
			new Separator(' = For template = '),
			'table',
			'piece',
			'native'
		],
		default: 'table'
	},
	{
		type: 'input',
		name: 'path',
		message: 'RoutePath is required:',
		default: '/home',
		when: (answers) => answers.type !== 'none',
		validate(val) {
			if (val === '') {
				return 'Name is required!';
			} else {
				return true;
			}
		}
	},
	{
		type: 'input',
		name: 'dir',
		message: 'Where to in the project:',
		when: (answers) => answers.type !== 'none',
		default: upath.normalize(`${process.cwd()}/src/pages/`),
		validate(val) {
			if (val === `${process.cwd()}/tmp/`) {
				// shell.rm('-rf', 'tmp');
			}
			return true;
		}
	},

];

const stream = prompt(question).then((res) => {
	routeForVue(res);
	log(res);
});

export default stream;
