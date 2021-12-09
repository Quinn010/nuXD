// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"
Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
export const Formats: FormatList = [
];
--------------------------------------------------------------------------------
If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Singles",
	},
	{
		name: "[Gen 8] Random Battle",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Unrated Random Battle",

		mod: 'gen8',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[Gen 8] Multi Random Battle",

		mod: 'gen8',
		team: 'random',
		gameType: 'multi',
		searchShow: false,
		tournamentShow: false,
		rated: false,
		ruleset: [
			'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod',
		],
	},
	{
		name: "[Gen 8] OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672210/">OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672556/">OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674058/">OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['Uber', 'AG', 'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'King\'s Rock', 'Baton Pass'],
	},
	{
		name: "[Gen 8] OU (Blitz)",

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', 'Blitz'],
	},
	{
		name: "[Gen 8] Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676539/">Ubers Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675564/">Ubers Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675194/">Ubers Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Standard', 'Dynamax Clause'],
		banlist: ['AG', 'Shadow Tag', 'Baton Pass'],
	},
	{
		name: "[Gen 8] UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3681331/">UU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679621/">UU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674793/">UU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU'],
		banlist: ['OU', 'UUBL', 'Light Clay'],
	},
	{
		name: "[Gen 8] RU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687060/">RU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661013/">RU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676023/">RU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] UU'],
		banlist: ['UU', 'RUBL'],
	},
	{
		name: "[Gen 8] NU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687023/">NU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673598/">NU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676265/">NU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] RU'],
		banlist: ['RU', 'NUBL', 'Drizzle', 'Drought'],
	},
	{
		name: "[Gen 8] PU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3686048/">PU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3676106/">PU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 8] LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Little Cup', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Corsola-Galar', 'Cutiefly', 'Drifloon', 'Gastly', 'Gothita', 'Rufflet', 'Scraggy', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vullaby', 'Vulpix-Alola', 'Woobat', 'Zigzagoon-Base',
			'Chlorophyll', 'Moody', 'Baton Pass', 'Sticky Web',
		],
	},
	{
		name: "[Gen 8] Monotype",
		desc: `All the Pok&eacute;mon on a team must share a type.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672167/">Monotype Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673391/">Monotype Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673165">Monotype Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Same Type Clause', 'Standard', 'Dynamax Clause'],
		banlist: [
			'Blaziken', 'Calyrex-Ice', 'Calyrex-Shadow', 'Dialga', 'Dracovish', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Naganadel',
			'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal',
			'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Zygarde-Base', 'Moody', 'Power Construct', 'Shadow Tag', 'Bright Powder',
			'Damp Rock', 'Focus Band', 'King\'s Rock', 'Lax Incense', 'Quick Claw', 'Smooth Rock', 'Terrain Extender', 'Baton Pass',
		],
	},
	{
		name: "[Gen 8] 1v1",
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656364/">1v1 Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3664157/">1v1 Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657779/">1v1 Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Obtainable', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Accuracy Moves Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Dynamax Clause', 'Endless Battle Clause',
		],
		banlist: [
			'Calyrex-Ice', 'Calyrex-Shadow', 'Cinderace', 'Dialga', 'Dragonite', 'Eternatus', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Jirachi',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Melmetal', 'Mew', 'Mewtwo', 'Mimikyu', 'Necrozma-Dawn-Wings',
			'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Sableye', 'Snorlax', 'Solgaleo', 'Victini', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned',
			'Zamazenta', 'Zamazenta-Crowned', 'Zekrom', 'Moody', 'Bright Powder', 'Focus Band', 'Focus Sash', 'Lax Incense', 'Quick Claw', 'Perish Song',
		],
	},
	{
		name: "[Gen 8] Anything Goes",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672172/">AG Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3675040/">AG Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672899/">AG Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['Obtainable', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
	},
	{
		name: "[Gen 8] ZU",
		desc: `The unofficial usage-based tier below PU.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3687415/">ZU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3680071/">ZU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3678037/">ZU Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] PU'],
		banlist: [
			'PU', 'Centiskorch', 'Drampa', 'Exeggutor-Alola', 'Gallade', 'Haunter', 'Magmortar', 'Magneton', 'Omastar', 'Rotom-Frost',
			'Turtonator', 'Vanilluxe', 'Vikavolt', 'Silvally-Dragon', 'Silvally-Ground', 'Sneasel', 'Damp Rock', 'Grassy Seed',
		],
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660866/">LC UU</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC'],
		banlist: [
			// LC OU
			'Abra', 'Archen', 'Carvanha', 'Diglett-Base', 'Dwebble', 'Ferroseed', 'Foongus', 'Frillish', 'Grookey', 'Koffing',
			'Larvesta', 'Magnemite', 'Mareanie', 'Mienfoo', 'Mudbray', 'Munchlax', 'Natu', 'Onix', 'Pawniard', 'Ponyta',
			'Ponyta-Galar', 'Porygon', 'Slowpoke-Base', 'Spritzee', 'Staryu', 'Timburr', 'Trapinch', 'Tyrunt', 'Vulpix',
			// LC UUBL
			'Farfetch\u2019d-Galar', 'Scorbunny', 'Shellder', 'Wingull',
		],
	},
	{
		name: "[Gen 8] CAP",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656824/">CAP Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3671157/">CAP Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3674024/">CAP Viability Rankings</a>`,
		],

		mod: 'gen8',
		ruleset: ['[Gen 8] OU', '+CAP'],
		banlist: ['Crucibellite'],
	},
	{
		name: "[Gen 8] CAP LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3691918/">CAP LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8997714/">CAP LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/posts/8997713/">CAP LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['[Gen 8] LC', '+CAP'],
		banlist: ['Cawdet'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles",

		mod: 'gen8',
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8', 'Limit One Restricted'],
		restricted: ['Restricted Legendary'],
	},
	{
		name: "[Gen 8] Battle Stadium Singles Series 9",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3679374/">BSS Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3672698/">BSS Viability Rankings</a>`,
		],

		mod: 'gen8',
		searchShow: false,
		ruleset: ['Flat Rules', '!! Adjust Level = 50', 'Min Source Gen = 8'],
	},
	{
		name: "[Gen 8] Custom Game",

		mod: 'gen8',
		searchShow: false,
		debug: true,
		battle: {trunc: Math.trunc},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "Sw/Sh Doubles",
	},
	{
		name: "[Gen 8] Random Doubles Battle",

		mod: 'gen8',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 8] Doubles OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3689189/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3673519/">Doubles OU Viability Rankings</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', 'Dynamax Clause', 'Swagger Clause'],
		banlist: ['DUber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 8] Doubles Ubers",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661142/">Doubles Ubers</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['Standard Doubles', '!Gravity Sleep Clause'],
		banlist: [],
	},
	{
		name: "[Gen 8] Doubles UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658504/">Doubles UU</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		ruleset: ['[Gen 8] Doubles OU'],
		banlist: ['DOU', 'DBL'],
	},
	{
		name: "[Gen 8] Doubles LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658672/">Doubles LC</a>`,
		],

		mod: 'gen8',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Standard Doubles', 'Little Cup', 'Dynamax Clause', 'Swagger Clause', 'Sleep Clause Mod'],
		banlist: ['Corsola-Galar', 'Cutiefly', 'Ponyta-Base', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Vulpix', 'Vulpix-Alola'],
	},
];