const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api",
			characters: undefined,
			favorites:[]
		},
		actions: {
			// getCharacters: async() => {
			// 	try {
			// 		const store = getStore()
			// 		const res = await fetch(store.API_URL+"/character")
			// 		if(!res.ok) throw new Error(`Invalid Response, Response status: ${res.status}`)
			// 		const body = await res.json()
			// 		setStore({characters:body.results})
			// 	} catch (error) {
			// 		console.log(error)
			// 	}
			// },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			request: async (path) => {
				try {
					const store = getStore()
					const res = await fetch(store.API_URL+path)
					if(!res.ok) throw new Error(`Invalid response, Response status: ${res.status}`)
					const body = await res.json()
					return(body.results ? body.results : body.result)
				} catch (error) {
					console.log(error)
				}
			},
			addFavorites: (id, name, type) => {
				const store = getStore()
				if(store.favorites.length===0){
					setStore({favorites:[{id, name, type}]})	
				}else{
					const newFavorites = store.favorites.filter(favorite => favorite['id']!==id && favorite['type']===type)
					if(newFavorites.length != store.favorites.length){
						setStore({favorites: newFavorites })
					}else{
						setStore({favorites: [...store.favorites, {id, name, type}]})
					}
				}
				
			},
			removeFavorites: (id, type) => {
				const store = getStore()
				const newFavorites = store.favorites.filter(favorite => favorite['id']!==id && favorite['type']===type)
				setStore({favorites: newFavorites})
			},
			isFavorite: (id, type) => {
				const store = getStore()
				let isFavorite = false
				store.favorites.map(favorite => {
					if(favorite.type === type && favorite.id === id){
						isFavorite = true
					}
				})
				return isFavorite
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
