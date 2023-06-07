export interface Depot {
	name: string;
	location: string;
	address: string;
	coordinates: [number, number];
}

const depots: Depot[] = [
	{
		name: 'Depot Donnerbühlweg',
		location: 'Bern',
		address: 'Donnerbühlweg 31, 3012 Bern',
		coordinates: [46.951167, 7.431806]
	},
	{
		name: 'Depot Löscher',
		location: 'Bern',
		address: 'Restaurant Bar Löscher, Viktoriastrasse 70, 3013 Bern',
		coordinates: [46.95483, 7.452221]
	},
	{
		name: 'Depot Fischemätteli',
		location: 'Bern',
		address: 'Bioladen Fischermätteli, Weissensteinstrasse 29a, 3008 Bern',
		coordinates: [46.9409495, 7.4175303]
	},
	{
		name: 'Depot Q-Laden',
		location: 'Bern',
		address: 'Bioladen Q-Laden, Quartierhof 1, 3013 Bern',
		coordinates: [46.9583366, 7.4465914]
	},
	{
		name: 'Depot Via Felsenau',
		location: 'Bern',
		address: 'Via Felsenau, Spinnereiweg 4, 3004 Bern',
		coordinates: [46.9699074, 7.4421937]
	},
	{
		name: 'Depot Murifeld',
		location: 'Bern',
		address: 'Laden im Murifeld, Mindstrasse 10, 3006 Bern',
		coordinates: [46.941049, 7.470548]
	},
	{
		name: 'Depot vélo-salon',
		location: 'Fribourg',
		address: 'Bluefactory, vélo-salon Bluefactory, Passage du Cardinal 1, 1700 Fribourg',
		coordinates: [46.7975833, 7.1453566]
	},
	{
		name: 'Depot Wallenbuch',
		location: 'Wallenbuch',
		address: 'Hof von René, Murtenstrasse 37, 3206 Wallenbuch',
		coordinates: [46.930083, 7.221667]
	}
];

export default depots;
