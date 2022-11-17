const urlUsers = "https://6363105e37f2167d6f716e33.mockapi.io/reparti_user";
const urlPublish = "https://6363105e37f2167d6f716e33.mockapi.io/publication";

// Data de usuarios

export const getUsers = async () => {
	try {
		const response = await fetch(urlUsers);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const postUser = async (user) => {
	try {
		const response = await fetch(urlUsers, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(user),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const get = async () => {
	try {
		const response = await fetch(urlPublish);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const getById = async (id) => {
	try {
		const response = await fetch(urlPublish + "/" + id);
		console.log(response);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const post = async (body) => {
	try {
		const response = await fetch(urlPublish, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// id: Publicacion
export const update = async (id, body) => {
	try {
		const response = await fetch(`${urlPublish}/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

// Para la eliminar un registro
export const destroy = async (id) => {
	try {
		const response = await fetch(`${urlPublish}/${id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};