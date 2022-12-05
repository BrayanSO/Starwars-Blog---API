const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: []
		},
		actions: {
			getStarWars:async (resource)=> {
				let resp = await fetch("https://www.swapi.tech/api/"+ resource)
				if(resp.ok){
					console.log(resp.status + ":" + resp.statusText)
					return
				}
				let data = await await resp.json()
				setStore({...getStore(),
				planets: data.results
			})
		},
			getPlanets: async()=> {
				let resp = await fetch("https://www.swapi.tech/api/planets")
				let data = await await resp.json()
				setStore({...getStore(),
				planets: data.results})
			}}
	};
};

export default getState;
