const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			films:[]
		},
		actions: {
			getStarWars:async (resource, pagination= {})=> {
				let resp = await fetch("https://www.swapi.tech/api/"+ resource)
				if(!resp.ok){
					console.error(resp.status + ":" + resp.statusText)
					return
				}
				let data = await resp.json()
				console.log({
					data
				})
				let newStore = {
					...getStore()
				}
				newStore[resource] = data.result || data.results
				setStore(newStore)
		},
	}

	};
};

export default getState;
