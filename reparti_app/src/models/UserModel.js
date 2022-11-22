export class UserModel {
	constructor(
		_name = null,
		_lastName = null,
		_email = null,
		_pass = null,
		_imageProfile = null,
		_createdAt = null,
		_id = null,
		_dni = null,
		_phone = null,
		_tower = null,
		_dpto = null,

	) {
		this.id = _id;
		this.name = _name;
		this.lastName = _lastName;
		this.email = _email;
		this.pass = _pass;
		this.imageProfile = _imageProfile;
		this.dni = _dni;
		this.phone = _phone;
		this.tower = _tower;
		this.dpto = _dpto;
		this.createdAt = !_createdAt ? new Date() : new Date(_createdAt);
	}

	getFullname() {
		return `${this.name} ${this.lastName}`;
	}

	getFullDetails() {
		return `${this.getFullname()} > ${this.createdAt.toDateString()}`;
	}
}