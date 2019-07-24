import { prompt } from 'inquirer';
import chalk from 'chalk';
import download from 'download-git-repo';
import ora from 'ora';

const log = console.log;
const question = [
	{
		type: 'input',
		name: 'project',
		message: 'Project name:',
		validate(val) {
			if (val !== '') {
				return true;
			}
			return 'Project name is required!';
		}
	},
	{
		type: 'input',
		name: 'place',
		message: 'Where to init the project:',
		default: './'
	}
];

const stream = prompt(question)
	.then((opts = {}) => {
		// options
		let repository = 'git@github.com:taosz/basic-vue.git';
		let { project, place } = opts;
		const spinner = ora('Downloading repository...');

		spinner.start();

		download(`${repository}`, `${place}/${project}`, (err) => {
			if (err) {
				log(chalk.red(err));
				process.exit();
			}
			spinner.stop();
			log(chalk.green('New project has been initialized successfully!'));
		});

	})
	.catch(e => {
		log(chalk`{red ${e}}`);
	});

export default stream;
