const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [
					{
						"uid": "1",
						"name": "Tatooine",
						"url": "https://www.swapi.tech/api/planets/1"
					},
					{
						"uid": "2",
						"name": "Alderaan",
						"url": "https://www.swapi.tech/api/planets/2"
					},
					{
						"uid": "3",
						"name": "Yavin IV",
						"url": "https://www.swapi.tech/api/planets/3"
					},
					{
						"uid": "4",
						"name": "Hoth",
						"url": "https://www.swapi.tech/api/planets/4"
					},
					{
						"uid": "5",
						"name": "Dagobah",
						"url": "https://www.swapi.tech/api/planets/5"
					},
					{
						"uid": "6",
						"name": "Bespin",
						"url": "https://www.swapi.tech/api/planets/6"
					},
					{
						"uid": "7",
						"name": "Endor",
						"url": "https://www.swapi.tech/api/planets/7"
					},
					{
						"uid": "8",
						"name": "Naboo",
						"url": "https://www.swapi.tech/api/planets/8"
					},
					{
						"uid": "9",
						"name": "Coruscant",
						"url": "https://www.swapi.tech/api/planets/9"
					},
					{
						"uid": "10",
						"name": "Kamino",
						"url": "https://www.swapi.tech/api/planets/10"
					}
				]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
