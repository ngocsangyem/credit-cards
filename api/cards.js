const express = require('express');
const router = express.Router();

const HEADER_ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin';

/**
 * GET cards list.
 *
 * @return cards list | empty.
 */
router.get('/', async (req, res) => {
	try {
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader(
			'Access-Control-Allow-Methods',
			'GET, POST, OPTIONS, PUT, PATCH, DELETE'
		);
		res.setHeader(
			'Access-Control-Allow-Headers',
			'X-Requested-With,content-type'
		);
		// Set to true if you need the website to include cookies in the requests sent
		// to the API (e.g. in case you use sessions)
		res.setHeader('Access-Control-Allow-Credentials', true);
		res.json({
			cards: [
				{
					card_number: ' 5273327110452709',
					name: 'Dennis Ilan',
					expiration_date: '11/24',
					ccv_number: '392',
					id: '45977b49-ebf2-41f0-9da1-abb7e9842624',
				},
				{
					card_number: ' 2700457222980717',
					name: 'Jack Radley',
					expiration_date: '09/27',
					ccv_number: '121',
					id: 'd08583d5-d831-4fce-ab15-350135d5abbb',
				},
				{
					card_number: ' 2229051544004777',
					name: 'Jonathan Ranck',
					expiration_date: '01/23',
					ccv_number: '535',
					id: '8cb2f9f5-a52d-4961-801d-2a272cea1c10',
				},
				{
					card_number: ' 5147511930648091',
					name: 'Helen Twiraga',
					expiration_date: '08/26',
					ccv_number: '347',
					id: 'b160b302-f950-4f31-8de0-be4e7e95aafd',
				},
				{
					card_number: ' 5152463719396850',
					name: 'Paul Crescenzi',
					expiration_date: '10/24',
					ccv_number: '512',
					id: 'a50516a8-f23f-4b6c-9d2b-99cabea63043',
				},
				{
					card_number: ' 2227629365105856',
					name: 'Anna Crescenzi',
					expiration_date: '08/23',
					ccv_number: '353',
					id: '74f12415-fbb3-4b3a-bfe0-fb7f5d4c7ae5',
				},
				{
					card_number: ' 2289211984192170',
					name: 'Rachel Applegate',
					expiration_date: '08/25',
					ccv_number: '559',
					id: '524f9158-8716-483a-ad3b-457f9d098d09',
				},
				{
					card_number: ' 2409142624756725',
					name: 'Carolyn Smith',
					expiration_date: '06/28',
					ccv_number: '295',
					id: '36122bc8-5d6b-47d9-be23-f65e54572ac8',
				},
				{
					card_number: ' 2225497640420298',
					name: 'Timothy Amaral',
					expiration_date: '08/28',
					ccv_number: '421',
					id: '4ba3d8ed-2f6a-441d-8ef9-5248ada2eb8d',
				},
				{
					card_number: ' 2554451222629397',
					name: 'Kenneth Bohyer',
					expiration_date: '07/23',
					ccv_number: '525',
					id: 'a8f80111-3915-4d59-ba0d-4e02ba694c43',
				},
				{
					card_number: ' 2226196593010960',
					name: 'Paul Zao',
					expiration_date: '01/24',
					ccv_number: '153',
					id: '27895d40-0803-4dd8-8df6-94939b50cec2',
				},
				{
					card_number: ' 2223395126284000',
					name: 'Daniel Cha',
					expiration_date: '02/28',
					ccv_number: '192',
					id: '11429793-65aa-4fd0-a83b-a49d65ca963b',
				},
				{
					card_number: ' 2223433256253402',
					name: 'Ryan Frondel',
					expiration_date: '11/25',
					ccv_number: '347',
					id: '096a202a-fd3c-44cc-92d9-d93579f06b84',
				},
				{
					card_number: ' 2224051834103995',
					name: 'Brandon Elston',
					expiration_date: '01/27',
					ccv_number: '316',
					id: 'a3d9c7f7-d75b-476a-a5f4-3545f7da340e',
				},
				{
					card_number: ' 2226469873506274',
					name: 'Sarah Somers',
					expiration_date: '10/26',
					ccv_number: '482',
					id: '8839fb9e-bd92-4704-9062-a9ef2f10c1b6',
				},
				{
					card_number: ' 2222858909868563',
					name: 'Karen Mill',
					expiration_date: '10/24',
					ccv_number: '371',
					id: '69d29ad2-5e63-4eb9-a64b-a0f107477b1c',
				},
				{
					card_number: ' 5287090862679911',
					name: 'Deborah Chisom',
					expiration_date: '03/26',
					ccv_number: '248',
					id: 'e151f9eb-20e5-4292-b135-dca6ccb29f0c',
				},
				{
					card_number: ' 2288130016660239',
					name: 'Larry Hay',
					expiration_date: '06/24',
					ccv_number: '373',
					id: 'd07ae6de-2170-493e-b728-9efa4537d1f3',
				},
				{
					card_number: ' 2720369046099010',
					name: 'Katherine Leroy',
					expiration_date: '12/25',
					ccv_number: '186',
					id: 'fe178588-3bcb-4698-bb9c-1275f4ce2156',
				},
				{
					card_number: ' 2702080253266620',
					name: 'Mary Frondel',
					expiration_date: '07/28',
					ccv_number: '192',
					id: 'e38f6d84-d57e-4b4d-aa1f-28d13b790a0a',
				},
				{
					card_number: ' 2712690597071953',
					name: 'Andrew Mini',
					expiration_date: '03/27',
					ccv_number: '218',
					id: '3aec535b-a3a5-45b4-b06a-6d27de5af5ba',
				},
				{
					card_number: ' 2715285878765527',
					name: 'Ruth Coontz',
					expiration_date: '03/23',
					ccv_number: '285',
					id: '0d3c526b-c04a-45c7-bcca-07e69b15cea1',
				},
				{
					card_number: ' 2231948711584802',
					name: 'Carolyn Elston',
					expiration_date: '02/24',
					ccv_number: '131',
					id: '30e5fc1e-8157-422d-b4e1-1f24bbcc24ac',
				},
				{
					card_number: ' 2273465980463443',
					name: 'Jerry Gold',
					expiration_date: '12/23',
					ccv_number: '132',
					id: 'a0945270-09c8-4a09-b3d6-450ec363bc8b',
				},
				{
					card_number: ' 5194605812489384',
					name: 'Nicholas Wardley',
					expiration_date: '11/27',
					ccv_number: '181',
					id: '9072791b-99e6-401f-a564-f1c203b2bba9',
				},
				{
					card_number: ' 2227578289538025',
					name: 'Deborah Beder',
					expiration_date: '06/28',
					ccv_number: '365',
					id: '62d3efd0-074f-4029-b166-d2405902adb8',
				},
				{
					card_number: ' 2281401123565927',
					name: 'Christopher Rosovsky',
					expiration_date: '04/26',
					ccv_number: '224',
					id: 'f2827a68-7c6f-470c-8728-93114e4a6f28',
				},
				{
					card_number: ' 2536958001962206',
					name: 'Dorothy Matloff',
					expiration_date: '10/23',
					ccv_number: '471',
					id: '432590d0-90fb-4bca-b9e9-cccbd24ac860',
				},
				{
					card_number: ' 2269280081450298',
					name: 'Samuel Hinde',
					expiration_date: '04/27',
					ccv_number: '111',
					id: '1d7391a3-51ab-4de6-ac97-384a18fb90ea',
				},
				{
					card_number: ' 2395228955760869',
					name: 'Helen Lapierre',
					expiration_date: '02/28',
					ccv_number: '557',
					id: 'c66892f9-de39-4d3d-bc10-88ccd2aefce4',
				},
				{
					card_number: ' 5516596776992755',
					name: 'Mary Cha',
					expiration_date: '04/28',
					ccv_number: '242',
					id: '55a2c5da-ecb3-414d-aa50-b3056aec3b2f',
				},
				{
					card_number: ' 2225576427428069',
					name: 'Cynthia Mecatti',
					expiration_date: '06/27',
					ccv_number: '565',
					id: '43b94533-3c04-487d-ab59-a346f65db0c3',
				},
				{
					card_number: ' 2257582574508431',
					name: 'Gary Smith',
					expiration_date: '05/28',
					ccv_number: '413',
					id: 'fd186192-f861-4a86-bcc5-8753d243adfc',
				},
				{
					card_number: ' 2231885387172613',
					name: 'Rebecca Omalley',
					expiration_date: '02/26',
					ccv_number: '373',
					id: '07a32958-a478-4676-965f-035ef4b06dd3',
				},
				{
					card_number: ' 2252525642521212',
					name: 'Edward Mecatti',
					expiration_date: '04/27',
					ccv_number: '133',
					id: 'aeb28d45-1f37-498c-9f3c-f66c006ff928',
				},
				{
					card_number: ' 2224773963688096',
					name: 'Christopher Kuldell',
					expiration_date: '09/25',
					ccv_number: '568',
					id: '2f855a91-f20b-4369-960e-6183d1280522',
				},
				{
					card_number: ' 2594632079061865',
					name: 'Jonathan Oliphant',
					expiration_date: '07/25',
					ccv_number: '165',
					id: '576f0c4c-14ba-4281-a745-23613928d229',
				},
				{
					card_number: ' 5253587471137553',
					name: 'Ashley Mill',
					expiration_date: '10/25',
					ccv_number: '119',
					id: '8a1b19a6-b938-402b-a874-aa612594c409',
				},
				{
					card_number: ' 2227845543096938',
					name: 'Debra Ehrlich',
					expiration_date: '09/27',
					ccv_number: '409',
					id: '5b3d4827-173a-4581-9fa0-e218a159b4c4',
				},
				{
					card_number: ' 2278235025410799',
					name: 'Eric Maconochie',
					expiration_date: '06/27',
					ccv_number: '242',
					id: '80739b13-89f5-4685-a3a2-c9c73abcbe6d',
				},
				{
					card_number: ' 2380271219380899',
					name: 'Richard Beder',
					expiration_date: '06/23',
					ccv_number: '575',
					id: '228d6122-b4ff-47d2-b88c-91788507025a',
				},
				{
					card_number: ' 2229811600834486',
					name: 'Katherine Hay',
					expiration_date: '02/25',
					ccv_number: '425',
					id: '8ded4f0f-95e6-4ce1-8df0-8621e37b8cbf',
				},
				{
					card_number: ' 2235447317413975',
					name: 'Samuel Elston',
					expiration_date: '10/26',
					ccv_number: '386',
					id: '84841726-73a1-4eee-9a9e-0c49cacbd4a2',
				},
				{
					card_number: ' 2719583355634513',
					name: 'Larry Gold',
					expiration_date: '10/24',
					ccv_number: '200',
					id: 'ab5b0e73-e5db-424c-b466-9570bcfc1e16',
				},
				{
					card_number: ' 2286524864678842',
					name: 'Karen Zao',
					expiration_date: '02/26',
					ccv_number: '286',
					id: '68300142-0e7d-4097-8129-44d248f0dc73',
				},
				{
					card_number: ' 2296955746698244',
					name: 'Samuel Starna',
					expiration_date: '09/25',
					ccv_number: '567',
					id: '8966031a-fd0a-46d2-af07-a106645d0aa0',
				},
				{
					card_number: ' 2224479021057718',
					name: 'Joseph Twiraga',
					expiration_date: '03/23',
					ccv_number: '224',
					id: 'f5255b56-0b2c-4435-85fe-d3535059651a',
				},
				{
					card_number: ' 2254583363003686',
					name: 'George Oliphant',
					expiration_date: '05/27',
					ccv_number: '393',
					id: 'ef5acbaf-25c2-4d7f-aeb6-71964b88a8c0',
				},
				{
					card_number: ' 2720655096796962',
					name: 'Scott Scheiber',
					expiration_date: '11/28',
					ccv_number: '151',
					id: '44898d9e-3461-4818-8c9d-e2be5743381f',
				},
				{
					card_number: ' 2305047807881346',
					name: 'Jacob Salmon',
					expiration_date: '03/23',
					ccv_number: '564',
					id: 'face028b-7f7e-41be-9683-014a501617b9',
				},
			],
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send('Server error');
	}
});

module.exports = router;
