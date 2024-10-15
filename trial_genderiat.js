/* The script wrapper */
define(['pipAPI'], function(APIConstructor) {

	var API = new APIConstructor();
	var global = API.getGlobal();
	
	/***********************************************
	// Settings
	***********************************************/

	API.addSettings('canvas',{
		maxWidth: 900,
		proportions : 0.6,
		background: '#ffffff',
		borderWidth: 5,
		canvasBackground: '#ffffff',
		borderColor: 'lightblue'
	});

	//the source of the images
	API.addSettings('base_url',{
		image : global.baseURL
	});

	/***********************************************
	// Trials
	***********************************************/

	// The basic trial.
	API.addTrialSets('sort',
	{
		data : {condition:'sort', score:9, block:0, 
		fixDuration:500, fbDuration:400, ITI:200},
		layout: [
			{location:{left:2,top:1},media:{word:'press E for'}, css:{color:'#000000','font-size':'1em'}},
			{location:{right:2,top:1},media:{word:'press I for'}, css:{color:'#000000','font-size':'1em'}},
			{location:{left:2,top:4},media:{word:'global.cisgenderLabels'}, css:{color:'#0000FF','font-size':'3em'}},
			{location:{right:2,top:4},media:{word:'global.transgenderLabels'}, css:{color:'#0000FF','font-size':'3em'}}
		],
		input: [
			{handle:'skip1',on:'keypressed', key:27} //Esc + Enter will skip blocks
		],
		interactions: [
			{ // begin trial
				conditions: [{type:'begin'}],
				actions: [
					{type:'showStim',handle:'fixation'},
					{type:'trigger',handle:'fixOut', duration:'<%=trialData.fixDuration%>'}
				]
			}, 
			{
				conditions: [{type:'inputEquals',value:'fixOut'}],
				actions: [
					{type:'hideStim',handle:'fixation'}, 
					{type:'showStim',handle:'target'},
					{type:'setInput',input:{handle:'left', on:'keypressed', key:'e'}}, 
					{type:'setInput',input:{handle:'right', on:'keypressed', key:'i'}}
				]
			}, 
			{
				conditions: [{type:'inputEqualsTrial', property:'correctResp'}],
				actions: [
					{type:'removeInput',handle:['All']},
					{type:'setTrialAttr',setter:{score:0}}, //Correct response
					{type:'log'},
					{type:'trigger',handle:'ITI'}
				]
			}, 
			{
				conditions: [{type:'inputEqualsTrial', property:'mistakeResp'}],
				actions: [
					{type:'removeInput',handle:['All']},
					{type:'showStim',handle:'error'},
					{type:'setTrialAttr',setter:{score:1}}, //Incorrect response
					{type:'log'},
					{type:'trigger',handle:'ITI', duration:'<%=trialData.fbDuration%>'}
				]
			}, 
			{
				conditions: [{type:'inputEquals',value:'ITI'}],
				actions: [
					{type:'hideStim',handle:'All'}, 
					{type:'trigger',handle:'endTrial', duration:'<%=trialData.ITI%>'}
				]
			}, 
			// skip block
			{
				conditions: [{type:'inputEquals',value:'skip1'}],
				actions: [
					{type:'setInput',input:{handle:'skip2', on:'enter'}} // allow skipping if next key is enter.
				]
			},
			// skip block
			{
				conditions: [{type:'inputEquals',value:'skip2'}],
				actions: [
					{type:'goto', destination: 'nextWhere', properties: {blockStart:true}},
					{type:'endTrial'}
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}],
				actions: [
					{type:'endTrial'}				
				]
			}
		],
		stimuli : [
			{inherit:'error'}, 
			{inherit:'fixation'}
		]
	});
	
	//Define the instructions trial
	API.addTrialSets('inst',{
		input: [
			{handle:'space',on:'space'} //Will handle a SPACEBAR response
		],
		interactions: [
			{ // begin trial
				conditions: [{type:'begin'}],
				actions: [{type:'showStim',handle:'All'}] //Show the instructions
			},
			{
				conditions: [{type:'inputEquals',value:'space'}], //What to do when space is pressed
				actions: [
					{type:'hideStim',handle:'All'}, //Hide the instructions
					{type:'log'}, //Hide the instructions
					{type:'setInput',input:{handle:'endTrial', on:'timeout',duration:500}} //In 500ms: end the trial. In the mean time, we get a blank screen.
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
				actions: [
					{type:'endTrial'} //End the trial
				]
			}
		],
		//Dummy stimulus for logging
		stimuli : [	
			{inherit:'dummy'},
			{media:{html: '<%=trialData.instHTML%>'}, nolog:true}
		]
	});

	/*********************
	//Create task trials 
	*********************/
	API.addTrialSets({
		Cisgender : [
			{
				data : {handle:'my', correctResp:'left', mistakeResp:'right'}, 
				inherit: {set:'sort', merge:['stimuli']},
				stimuli : [
					{inherit:'Cisgender'}
				]
			}
		], 
		Transgender : [
			{
				data : {handle:'my', correctResp:'right', mistakeResp:'left'}, 
				inherit: {set:'sort', merge:['stimuli']},
				stimuli : [
					{inherit:'Transgender'}
				]
			}
		]
	});
			
	/***********************************************
	// Stimuli
	***********************************************/
		
	API.addStimulusSets({
	//These are different types of stimuli.
	//That way we can later create a stimulus object the inherits from this set randomly.

		// This Default stimulus is inherited by the other stimuli so that we can have a consistent look and change it from one place
		defaultStim: [{data : {alias:'default'}, css:{color:'#000000','font-size':'2em'}, nolog:true}],
		dummy : [{data : {alias:'dummy', handle:'dummy'}, media : {word:'dummy'}, css:{color:'#ffffff','font-size':'0em'}}],
		fixation : [{ 
			inherit:'defaultStim', data:{handle:'fixation', alias:'fixation'}, 
			media:{image:'fixation.jpg'}
		}],
		error : [{ 
			inherit:'defaultStim', data:{handle:'error', alias:'error'}, 
			media:{image:'wrong.jpg'}
		}],
		Cisgender : [{ 
			inherit:'defaultStim', 
			data:{handle:'target', alias:'my'}, 
			nolog:false, media:{inherit:{set:global.cisgenderLabels, type:'exRandom'}}
		}],
		Transgender : [{ 
			inherit:'defaultStim', 
			data:{handle:'target', alias:'ot'}, 
			nolog:false, media:{inherit:{set:global.transgenderLabels, type:'exRandom'}}
		}]
	});

	/***********************************************
	// Media
	***********************************************/
	API.addMediaSets({
		Cisgender : [
			{image: 'C1.jpg'},
               		{image: 'C2.jpg'},
                	{image: 'C3.jpg'},
                	{image: 'C4.jpg'}
		],
		
		Transgender : [
			{image: 'T1.jpg'},
                	{image: 'T2.jpg'},
                	{image: 'T3.jpg'},              
                	{image: 'T4.jpg'}     
            
		]
	
	/***********************************************
	// Create trial sequence
	***********************************************/
	API.addSequence([
		{ //Instructions
			inherit : "inst", 
			data: {
				blockStart:true,
				block : 1, 
				instHTML : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="#000000">' + 
				'Please put your middle or index fingers on the <b>I</b> and <b>E</b> keys of your keyboard. ' + 
				'Images will appear on the screen one by one.<br/>' + 
				'For images that show a person of your gender (a <%=global.cisgenderLabels%>) press <b>E</b><br/>' + 
				'For images that show a person of the other gender (a <%=global.transgenderLabels%>) press <b>I</b><br/><br/>' + 
				'If you make an mistake, a red </color><font color="#ff0000"><b>X</b></font> will appear.<br/><br/>' +
				'<p style="font-size:13px; text-align:center; font-family:arial"><color="FFFFFF"><br/><br/>press SPACE to begin</p>' + 
				'<p style="font-size:12px; text-align:center; font-family:arial"><color="FFFFFF">[Round 1 of 1]</p></div>'
			}
		},
		{
			mixer : 'random', 
			data :
			[
				{
					mixer : 'repeat', 
					times : 10, 
					data :
					[
						{inherit:{set:'Cisgender', type:'exRandom'}, data : {block:1}},
						{inherit:{set:'Transgender', type:'exRandom'}, data : {block:1}}
					]
				}
			]
		},
		{ //Instructions
			inherit : "inst", 
			data: {
				blockStart:true,
				block : 2, 
				instHTML : '<div><p style="font-size:20px; text-align:left; margin-left:10px; font-family:arial"><color="#000000">' + 
					'You completed the task. Hit Space to continue.</p></div>'
			}
		}
	]);
	
	return API.script;
});

