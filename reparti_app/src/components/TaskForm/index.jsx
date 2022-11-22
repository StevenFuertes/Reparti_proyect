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
		<div>

			{/* //////// INPUT PARA PUBLICAR //////////// */}

			<div class="row mb-3">
				<div class="col">
					<label for="exampleInputEmail1" class="form-label fw-bold">
						<i class="fa-solid fa-envelope"></i> Descripcion del servicio
					</label>
						<input
							id="input_task"
							type="text"
							className="form-control p-3"
							placeholder="Publica aqui ..."
							ref={inputElement}
							onKeyPress={inputKeyPress}
						/>

				</div>
			</div>

			{/* //////// HORARIO DE ATENCION Y COSTOS //////////// */}

			<div class="row mb-3">
				<div class="col">
					<label for="Select" class="form-label fw-bold">
						Costo del RepartiDev
					</label>
					<select id="Select" class="form-select p-3">
						<option class="d-none">Elije una Opción</option>
						<option>S/1.00</option>
						<option>S/1.50</option>
						<option>S/2.00</option>
					</select>
				</div>
				<div class="col">
					<label for="Select" class="form-label fw-bold">
						Horario de Atención
					</label>
					<select id="Select" class="form-select p-3">
						<option class="d-none">Elije una Opción</option>
						<option>08:00 - 14:00 hs.</option>
						<option>14:00 - 19:00 hs.</option>
						<option>19:00 - 22:00 hs.</option>
					</select>
				</div>
			</div>

			{/* //////// METODOS DE PAGO //////////// */}

			{/* <div class="row mb-3">
				<h6 class="form-label fw-bold">Métodos de Pago</h6>
				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							BCP
						</label>
					</div>
				</div>

				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Interbank
						</label>
					</div>
				</div>

				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							BBVA
						</label>
					</div>
				</div>

				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Yape
						</label>
					</div>
				</div>

				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Plin
						</label>
					</div>
				</div>

				<div class="col-4">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="flexCheckDefault"
						/>
						<label class="form-check-label" for="flexCheckDefault">
							Efectivo
						</label>
					</div>
				</div>
			</div> */}

			<div class="d-grid gap-3 ">
				<button
					class="btn btn-warning fw-bold mt-5"
					type="button"
					id="button-addon2"
					onClick={addButton}
				>
					Publicar
				</button>
			</div>
		</div>
	);
}

export default TaskForm;
