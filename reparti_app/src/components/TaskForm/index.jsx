import { useRef } from "react";

function TaskForm(props) {
	const { onSubmitFunction } = props;
	const inputElement = useRef();

	function inputKeyPress(event) {
		if (event.key === "Enter") {
			addButton();
		}
	}

	function addButton() {
		if (inputElement.current.value === "") return;
		onSubmitFunction(inputElement.current.value);
		inputElement.current.value = "";
	}

	return (
		<tr>
			<th className="input-group">
				<input
					id="input_task"
					type="text"
					
					className="form-control"
					placeholder="Publica aqui ..."
					ref={inputElement}
					onKeyPress={inputKeyPress}
				/>
				<button
					className="btn btn-outline-primary"
					type="button"
					id="button-addon2"
					onClick={addButton}
				>
					Publicar
				</button>
			</th>
		</tr>
	);
}

export default TaskForm;