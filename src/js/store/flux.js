const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			getPlanets: async()=> {
				let resp = await fetch("https://www.swapi.tech/api/planets")
				let data = await await resp.json()
				setStore({...getStore(),
				planets: data.results})
			}
			
		}
	};
};

export default getState;
