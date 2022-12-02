const urlUsers = "https://6363105e37f2167d6f716e33.mockapi.io/reparti_user";
const url = "https://6363105e37f2167d6f716e33.mockapi.io/publication";


  export const get = async () => {
	try {
	  const response = await fetch(url);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  return error;
	}
  };
  
  
  export const post = async (body) => {
	try {
	  const response = await fetch(url, {
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
  
  export const getUsers = async () => {
	try {
	  const response = await fetch(urlUsers);
	  const data = await response.json();
	  return data;
	} catch (error) {
	  console.log(error);
	}
  };
  
  // id: Tarea
  
  export const update = async (id, body) => {
	try {
	  const response = await fetch(`${url}/${id}`, {
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
  
//   // Para la eliminar un registro unicamente necesito el id
//   export const destroy = async (id) => {
// 	try {
// 	  const response = await fetch(`${url}/${id}`, {
// 		method: "DELETE",
// 		headers: {
// 		  "Content-type": "application/json",
// 		},
// 	  });
// 	  const data = await response.json();
// 	  return data;
// 	} catch (error) {
// 	  console.log(error);
// 	}
//   };