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
		name: "Send duel to friends no ladder",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656537/">Random Battle Suggestions</a>`,
		],

		mod: 'gen8',
		team: 'random',
		ruleset: ['PotD', 'Obtainable', 'Species Clause', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod'],
	},
	{
		name: "[PokeMMO] Practice singles",

		mod: 'gen8',
		debug: true,
		battle: {trunc: Math.trunc},
		defaultLevel: 50,
		maxLevel: 50,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod','HP Percentage Mod','Sleep Clause Mod', 'Dynamax Clause', 'Accuracy Moves Clause'],
	},

	{
		name: "[PokeMMO] Practice doubles",

		mod: 'gen8',
		gameType: 'doubles',
		battle: {trunc: Math.trunc},
		debug: true,
		defaultLevel: 50,
		maxLevel: 50,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod','HP Percentage Mod','Sleep Clause Mod', 'Dynamax Clause', 'Accuracy Moves Clause',],
	},
// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////
	{
		name: "[Gen 8] VGC",

		mod: 'gen8',
		gameType: 'doubles',
		ruleset:
		['Flat Rules', '!! Adjust Level = 50', 'VGC Timer']
	},

];
