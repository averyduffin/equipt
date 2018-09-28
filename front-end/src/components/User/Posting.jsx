import React from 'react';
import styled from 'react-emotion';
import { withProps } from 'recompose';

const Posting = () => (
	<Container>
		<Form>
			<FormGroup>
				<label htmlFor="title">Rental Title</label>
				<Input type="text" id="title" placeholder="" />
			</FormGroup>
			<FormGroup>
				<label htmlFor="Price">Price (Dollars/Day)</label>
				<Input type="number" id="Price" placeholder="" />
			</FormGroup>
			<FormGroup>
				<label htmlFor="description">Description</label>
				<TextArea id="description" rows="3" />
			</FormGroup>
			<FormGroup>
				<label htmlFor="file">Upload Photo</label>
				<FileInput id="file" />
			</FormGroup>
		</Form>
	</Container>
);

export default Posting;

const Container = styled.div({
	// paddingTop: '7rem',
	// paddingLeft: '28px',
	// paddingRight: '28px',
});

const Form = styled.form({});
const FormGroup = withProps({ className: 'form-group' })(styled.div({}));
const Input = withProps({ className: 'form-control' })(styled.input({}));
const FileInput = withProps({ className: 'form-control-file', type: 'file' })(styled.input({}));
const TextArea = withProps({ className: 'form-control' })(styled.textarea({}));
