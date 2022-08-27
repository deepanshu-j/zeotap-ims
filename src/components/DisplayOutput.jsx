import React from 'react';
import './DisplayOutput.css';

export default function DisplayOutput({ fileName, output }) {
	return (
		<div>
			<h4 className="mapping__title">Mapping</h4>
			{Object.keys(output).map((e, i) => {
				//   <SomeComponent key={i} {...e} />
				return (
					<div key={i} className="block__container">
						<div className="block">{e} </div>→ <div className="block">{output[e]}</div>
					</div>
				);
			})}
		</div>
	);
}
