export interface Depot {
	name: string;
	location: string;
	address: string;
	coordinates: [number, number];
}

const depots: Depot[] = [
	{
		name: 'Alpenegg',
		location: 'Bern',
		address: 'Alpeneggstrasse 18, 3012 Bern',
		coordinates: [46.95377, 7.4381]
	},
	{
		name: 'Bern West',
		location: 'Bern',
		address: 'Bümplizstrasse 13, 3027 Bern',
		coordinates: [46.94845, 7.39664]
	},
	{
		name: 'Donnerbühlweg',
		location: 'Bern',
		address: 'Donnerbühlweg 31, 3012 Bern',
		coordinates: [46.95119, 7.43178]
	},
	{
		name: 'Fischermätteli',
		location: 'Bern',
		address: 'Bioladen Fischermätteli, Weissensteinstrasse 29a, 3008 Bern',
		coordinates: [46.94093, 7.4198]
	},
	{
		name: 'Gerbegasse',
		location: 'Kerzers',
		address: 'Gerbegasse 18, 3210 Kerzers',
		coordinates: [46.97473, 7.19676]
	},
	{
		name: 'Löscher',
		location: 'Bern',
		address: 'Restaurant Bar Löscher, Viktoriastrasse 70, 3013 Bern',
		coordinates: [46.95485, 7.45214]
	},
	{
		name: 'Murifeld',
		location: 'Bern',
		address: 'Laden im Murifeld, Mindstrasse 10, 3006 Bern',
		coordinates: [46.94117, 7.4705]
	},
	{
		name: 'Q-Laden',
		location: 'Bern',
		address: 'Bioladen Q-Laden, Quartierhof 1, 3013 Bern',
		coordinates: [46.95838, 7.44662]
	},
	{
		name: 'Tiefenau',
		location: 'Bern',
		address: 'Kastellweg 7, 3004 Bern',
		coordinates: [46.97395, 7.45077]
	},
	{
		name: 'Via Felsenau',
		location: 'Bern',
		address: 'Via Felsenau, Spinnereiweg 4, 3004 Bern',
		coordinates: [46.97006, 7.44215]
	},
	{
		name: 'Düdingen Robinsonspielplatz',
		location: 'Düdingen',
		address: 'Leimacker 1, 3186 Düdingen',
		coordinates: [46.846006, 7.199499]
	},
	{
		name: 'Bluefactory',
		location: 'Fribourg',
		address: 'Bluefactory, NeighborHub, Passage du Cardinal 1, 1700 Fribourg',
		coordinates: [46.79745, 7.14715]
	},
	{
		name: 'Wallenbuch',
		location: 'Wallenbuch',
		address: 'Hof Faver, Murtenstrasse 37, 3206 Wallenbuch',
		coordinates: [46.93008, 7.22173]
	}
];

export default depots;
