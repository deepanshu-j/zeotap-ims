import React, { useRef, useState } from 'react';

import Button from 'react-bootstrap/Button';

function CsvInput({ handleFileChange, setFileName }) {
	const submitButton = () => {};

	const [ filename, setFilename ] = useState('');

	const csvRef = useRef(null);

	const handleChange = (e) => {
		// populate file name in our state field //
		if (e.target.files.length > 0) {
			let uploadedFilename = e.target.files[0].name;
			setFilename(uploadedFilename);
			setFileName(uploadedFilename);
			// alert(uploadedFilename);
		}

		var file = csvRef.current.files[0];
		if (!file) return;

		handleFileChange(file);
	};
	return (
		<form className="csv-form">
			<div className="csv-form-group">
				<label for="files" className="btn" style={{ border: '1px solid black' }}>
					Upload File
				</label>
				<input
					type="file"
					style={{ visibility: 'hidden' }}
					className="csv-form-control"
					id="files"
					accept=".csv"
					onChange={handleChange}
					ref={csvRef}
					placeholder={'Upload and submit'}
				/>
			</div>
			<br />
			{/* <div>
				<Button variant="outline-success" onClick={submitButton} size="sm">
					Upload
				</Button>
			</div> */}
		</form>
	);
}

export default CsvInput;
