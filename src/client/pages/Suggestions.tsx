import * as React from 'react';

const Suggestions: React.FC<SuggestionsProps> = (props) => {
	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">Suggestions View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface SuggestionsProps {}

export default Suggestions;