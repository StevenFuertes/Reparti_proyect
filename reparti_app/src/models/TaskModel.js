export class TaskModel {

	constructor(
		_servicio = null,
		_createdAt = null,
		_doneAt = null,
		_deletedAt = null,
		_precio = null,
		_horario = null,
		_id = null,
	) {
		if (_servicio !== null) this.servicio = _servicio;
		this.createdAt =
			_createdAt === null ? new Date() : new Date(_createdAt);
		this.doneAt = _doneAt === null ? null : new Date(_doneAt);
		this.deletedAt = _deletedAt === null ? null : new Date(_deletedAt);
		this.precio = _precio;
		this.horario = _horario;
		if (_id !== null) this.id = _id;
	}

	timeElapsed(date) {
		let timeDiff = new Date() - date; 
		timeDiff /= 1000;

		if (timeDiff > 3600) {
			return "Hace " + Math.round(timeDiff / 3600) + "+ hrs.";
		}

		if (timeDiff > 60) {
			return "Hace " + Math.round(timeDiff / 60) + " min.";
		}
		
		return "Hace " + Math.round(timeDiff) + " seg.";
	}

	getDateTimeString(date) {
		return (
			String(date.toLocaleDateString()) +
			" " +
			String(date.toLocaleTimeString())
		);
	}
}