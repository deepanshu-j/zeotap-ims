import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';

function InputField() {
	const submitButton = () => {};

	return (
		<form className="input__form">
			<input
				id="fileSelect"
				type="file"
				name="csv_file"
				accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
			/>
			<br />
			<div>
				<Button variant="outline-success" onClick={submitButton} size="sm">
					Upload
				</Button>
			</div>
		</form>
	);
}

export default InputField;
