const renderCellContent = (cell) => {
	if (cell === 'X') return 'X';
	if (cell === 'O') return 'O';
	return null;
}

const  Cell = ({ cell, id }) => {
	return (
		<div className="square" id={id}>
			{renderCellContent(cell)}
		</div>
	);
}

export default Cell;