import { getNewContent } from '../utils/helper';

export const mutation = (content, opts = {}) => {
	const { mutation, pathArr, project, obj } = opts;
	try {
		if (pathArr.includes('list') === false) {
			let mutationType = pathArr.join('_').toUpperCase() + '_GET';
			let _mutationType = pathArr.join('_').toUpperCase() + '_LIST_GET';

			// 旧的保留
			// let oldContent = `export const ${mutationType} = '${mutationType}';`;
			let newContent = `export const ${_mutationType} = '${_mutationType}';`;


			if (content.includes(newContent) === false) {
				content += `${newContent}\n`;
			}
		}
		return content;
	} catch (e) {
		console.log(e);
		return content;
	}
};

