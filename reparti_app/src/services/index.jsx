const urlUsers = "https://6363105e37f2167d6f716e33.mockapi.io/reparti_user";


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

