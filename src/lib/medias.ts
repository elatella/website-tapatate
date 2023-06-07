import { base } from '$app/paths';

export interface Media {
	date: string;
	link?: string;
	audioSrc?: string;
}

const medias: Media[] = [
	{
		date: '16.12.2021',
		link: 'https://gogreen.ch/de/nachhaltige-ernaehrung-faengt-nicht-im-supermarkt-an/'
	},
	{
		date: '26.08.2021',
		link: 'https://www.woz.ch/-bc2c'
	},
	{
		date: '29.10.2018',
		link: `${base}/media/2018.10.29_LaLibert%C3%A9.pdf`
	},
	{
		date: '18.10.2018',
		audioSrc: `${base}/media/2018.10.18_Rabe_CarnotzetVoltaire.m4a`
	},
	{
		date: '05.10.2018',
		link: 'https://tapatate.ch/docs/Medien_2018.10.05_BernerZeitung.pdf'
	},
	{
		date: '09.2018',
		link: `${base}/media/2018.09_Unipress175.pdf`
	},
	{
		date: '30.05.2018',
		audioSrc: `${base}/media/2018.05.30_RabeInfo.mp3`
	},
	{
		date: '20.01.2018',
		audioSrc: `${base}/media/2018.01.20_Rabe_BoelzNoEis.mp3`
	}
];

export default medias;
