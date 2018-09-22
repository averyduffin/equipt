import React from 'react';
import { css } from 'react-emotion';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const padding = css({
	paddingRight: 20,
});

export default class Example extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
		};
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		});
	}

	render() {
		return (
			<ButtonDropdown className={`${padding}`} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
				<DropdownToggle color="light" caret>
					Common Tools
				</DropdownToggle>
				<DropdownMenu>
					<DropdownItem header>Header</DropdownItem>
					<DropdownItem disabled>Action</DropdownItem>
					<DropdownItem>Another Action</DropdownItem>
					<DropdownItem divider />
					<DropdownItem>Another Action</DropdownItem>
				</DropdownMenu>
			</ButtonDropdown>
		);
	}
}
