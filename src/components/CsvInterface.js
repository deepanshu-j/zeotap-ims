import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import 'react-table/react-table.css';
import ReactTable from 'react-table';
import CsvInput from './CsvInput';
import DisplayOutput from '../components/DisplayOutput';
import OUTPUT1 from '../output_file1.json';
import OUTPUT2 from '../output_file2.json';
import OUTPUT3 from '../output_file3.json';
import Spinner from 'react-bootstrap/Spinner';

function Interface() {
	const [ data, setData ] = useState([]);
	const [ columns, setColumns ] = useState([]);
	const [ loading, setLoading ] = useState(true);
	const [ showOutput, setShowOutput ] = useState(false);
	const [ fileName, setFileName ] = useState('');

	useEffect(
		() => {
			if (data.length && columns.length) {
				setLoading(false);
				// start timer 5 sec //
				// and show loading
				// setShowOutput(true);
			}
		},
		[ data, columns ]
	);

	useEffect(
		() => {
			// const timer =
			setShowOutput(false);
			setTimeout(() => {
				setShowOutput(true);
				console.log('after 5 sec');
			}, 5000);
			// return () => clearTimeout(timer);
		},
		[ data ]
	);

	const handleFileChange = (file) => {
		Papa.parse(file, {
			header: true,
			dynamicTyping: true,
			complete: handleDataChange
		});
	};

	const makeColumns = (rawColumns) => {
		return rawColumns.map((column) => {
			return { Header: column, accessor: column };
		});
	};

	const handleDataChange = (file) => {
		setData(file.data);
		setColumns(makeColumns(file.meta.fields));
	};

	return (
		<div>
			<CsvInput handleFileChange={handleFileChange} setFileName={setFileName} data={data} />
			{!loading &&
			showOutput && (
				<ReactTable data={data} columns={columns} defaultPageSize={5} className="-striped -highlight" />
			)}

			<br />
			<br />
			{!loading && !showOutput && <h5 style={{}}>Please wait!! Loading Preview and predictions </h5>}
			{!loading && !showOutput && <Spinner animation="border" />}

			{!loading &&
			showOutput &&
			fileName === 'file1.csv' && <DisplayOutput fileName={fileName} output={OUTPUT1} />}

			{!loading &&
			showOutput &&
			fileName === 'file2.csv' && <DisplayOutput fileName={fileName} output={OUTPUT2} />}

			{!loading &&
			showOutput &&
			fileName === 'file3.csv' && <DisplayOutput fileName={fileName} output={OUTPUT3} />}
		</div>
	);
}

export default Interface;
