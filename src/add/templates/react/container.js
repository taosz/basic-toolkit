export const container = (opts = {}) => {
	const { name, action, pathArr, componentArr, obj } = opts;
	let actionType = componentArr.join('_').toUpperCase() + '_GET';
	let data = `${name[0].toLowerCase()}${name.slice(1)}`;
	let contents = '';
	contents += `import React, { Component, Fragment } from 'react';\n`;
	contents += `import PropTypes from 'prop-types';\n`;
	contents += `import { bindActionCreators } from 'redux';\n`;
	contents += `import { connect } from 'react-redux';\n`;
	contents += `import * as creators from '@stores/actions';\n\n`;
	contents += `// 公用组件\n`;
	contents += `// import SetTitle from '@components/_common/SetTitle/SetTitle';\n`;
	contents += `// 业务组件\n`;
	contents += `\n`;
	contents += `class Container extends Component {\n`;
	contents += `	constructor(...params) {\n`;
	contents += `		super(...params);\n`;
	contents += `	}\n`;
	contents += `	componentDidMount() {\n`;
	contents += `		this.loadData(this.props);\n`;
	contents += `	}\n`;
	contents += `	loadData($props){\n`;
	contents += `		return;\n`;
	contents += `		if ($props.${data}.isFetching === 0) {\n`;
	contents += `			let url = '${actionType}';\n`;
	contents += `			let param = {};\n\n`;
	contents += `			let params = {\n`;
	contents += `				param: param,\n`;
	contents += `				ajaxType: 'GET',\n`;
	contents += `				onSuccess: (res) => {\n`;
	contents += `					//\n`;
	contents += `				},\n`;
	contents += `				onError: (res) => {\n`;
	contents += `					//\n`;
	contents += `				}\n`;
	contents += `			};\n`;
	contents += `			$props.actions.request(url, params, {});\n`;
	contents += `		}\n`;
	contents += `	}\n`;
	contents += `	render() {\n`;
	contents += `		return (\n`;
	contents += `			<div>\n`;
	contents += `				test\n`;
	contents += `			</div>\n`;
	contents += `		);\n`;
	contents += `	}\n`;
	contents += `};\n\n`;
	contents += `Container.propTypes = {};\n\n`;
	contents += `function mapStateToProps(state) {\n`;
	contents += `	return {\n`;
	contents += `		${data}: state.${data},\n`;
	contents += `	};\n`;
	contents += `}\n\n`;
	contents += `function mapDispatchToProps(dispatch) {\n`;
	contents += `	return {\n`;
	contents += `		actions: bindActionCreators(creators, dispatch)\n`;
	contents += `	};\n`;
	contents += `}\n\n`;
	contents += `export default connect(mapStateToProps, mapDispatchToProps)(Container);\n`;
	return contents;
};