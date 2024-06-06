const  Cell = ({ cell, id }) => {
	return (
		<div className="square" id={id}>
			{cell}
		</div>
	);
}

export default Cell;