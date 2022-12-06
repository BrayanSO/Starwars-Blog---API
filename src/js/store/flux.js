const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			film:[]
		},
		actions: {
			getStarWars:async (resource)=> {
				let resp = await fetch("https://www.swapi.tech/api/"+ resource)
				if(!resp.ok){
					console.error(resp.status + ":" + resp.statusText)
					return
				}
				let data = await resp.json()
				let newStore={...getStore()}
				newStore[resource]=data.result || data.results
				setStore(newStore)
		},
	}

	};
};

export default getState;
