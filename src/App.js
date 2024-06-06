import { useState} from "react";
import Cell from "./components/Cell";



const App = () => {
	const [cells] = useState(["", "", "", "", "", "", "", "", ""]);
	const [activePlayer, setActivePlayer] = useState("O");
	const [winnerMessage, setWinnerMessage] = useState('');
	const message = `Player 1's turn: ${activePlayer}'s turn`;

    return (
        <div className="app">
        <div className={"gameBoard"}>
            {cells.map((cell, index) =>
                <Cell
                    key={index}
                    id={index}
                    cell={cell}
                /> )}
        </div>
			<p>{winnerMessage || message}</p>
        </div>
	)
}

export default App;
