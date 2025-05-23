/* The script wrapper */
define(['pipAPI'], function(APIconstructor) {

	var API = new APIconstructor();	

	API.addSettings('canvas',{
		maxWidth: 500,
		maxheight: 500,
		proportions : 1.2,
		background: '#ffffff',
		borderWidth: 5,
		canvasBackground: '#ffffff',
		borderColor: 'lightblue'
	});
	
	API.addSettings('base_url',{
			image : '/images/'
	});
	

	API.addMediaSets('cisgender',[
		{image:'T1.jpg'},
		{image:'T2.jpg'},
		{image:'T3.jpg'},
		{image:'T4.jpg'}
	]);
	

	API.addMediaSets('transgender',[
		{image:'C1.jpg'},
		{image:'C2.jpg'},
		{image:'C3.jpg'},
		{image:'C4.jpg'}
	]);

	//Now let's create a basic stimulus with the size we want and the handle we need.
    API.addStimulusSets({
        // This Default stimulus is inherited by the other stimuli so that we can have a consistent appearance and change it from one place.
        Default: [
            {css:{color:'#0000FF','font-size':'2em'}}
        ],

        // This sets the appearance for the instructions.
        Instructions: [
            {css:{'font-size':'1.3em',color:'white', lineHeight:1.2},handle:'instructions'}
        ],
        cisgender: [
            {data:{group:'transgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'cisgender'}}},
            {data:{group:'transgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'cisgender'}}},
            {data:{group:'transgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'cisgender'}}},
            {data:{group:'transgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'cisgender'}}}
        ],
        transgender : [
            {data:{group:'cisgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'transgender'}}},
            {data:{group:'cisgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'transgender'}}},
            {data:{group:'cisgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'transgender'}}},
            {data:{group:'cisgender', handle:'target'}, inherit:'Default', media: {inherit:{type:'exRandom',set:'transgender'}}}
        ],

        // #### Feedback
        // This stimulus is used for giving feedback, in this case only an error notification
        feedback : [{handle:'error', location: {top: 50}, css:{color:'red','font-size':'4em'}, media: {word:'X'}, nolog:true}],

		layout: [
			{media:{word:'Klik op de i toets voor transgender en de e toets voor cisgender'}, css : {color:'black'}, location:{bottom:0}},
			{media:{word:'Cisgender'},location:{left:-1,top:3},css:{background:'white',color: 'black', padding:'5%',fontSize:'1.5em'}},
			{media:{word:'Transgender'},location:{right:-1,top:3},css:{background:'white',color: 'black',padding:'5%',fontSize:'1.5em'}}
		]
    });
	
	API.addTrialSets('base',[{
		data: {score:0},
		input: [
		    {handle:'enter',on:'enter'},
			{handle:'cisgender',on:'keypressed',key:'e'},
			{handle:'transgender',on:'keypressed',key:'i'},
			{handle:'left',on:'leftTouch',touch:true},
            {handle:'right',on:'rightTouch',touch:true}
		],
		layout: [
			{media:{word:'Klik op de i toets voor transgender en de e toets voor cisgender'}, css : {color:'black'}, location:{bottom:0}},
			{media:{word:'Cisgender'},location:{left:0,top:3},css:{background:'white',color: 'black', padding:'2%',fontSize:'1.5em'}},
			{media:{word:'Transgender'},location:{right:0,top:3},css:{background:'white',color: 'black',padding:'2%',fontSize:'1.5em'}}
		],	
		

		interactions: [
			// Display the target stimulus.
			{
				conditions:[{type:'begin'}],
				actions: [{type:'showStim', handle: 'target'}]
			},
			// Correct response actions
			{
				conditions: [
					{type:'inputEqualsTrial',property:'group'}
				],
				actions: [
					{type:'setTrialAttr', setter:{score:0}},
					{type:'log'},
					{type:'trigger', handle:'ITI'}
				]
			},
            {
                // Error
                conditions: [
                    {type:'inputEquals',value:['cisgender','transgender']},
                    {type:'inputEqualsStim',property:'group',negate:true}
                ],
                actions: [
                    {type:'showStim',handle:'error'},
                    {type:'setTrialAttr', setter:{score:1}}
                ]
            },			
			// Incorrect response actions
			{
				conditions: [
					{type:'inputEqualsTrial',property:'group',negate:true},
					{type:'inputEquals',value:['cisgender','transgender']}
				],
				actions: [
					{type:'showStim',handle:'error'},
                    {type:'setTrialAttr', setter:{score:1}},
					{type:'log'},
					{type:'removeInput',handle:['cisgender','transgender']},
					{type:'trigger', handle:'ITI'}
				]
			},
			// Inter trial interval
			{
				conditions: [{type:'inputEquals', value:'ITI'}],
				actions:[
					{type:'hideStim',handle:'All'},
					{type:'removeInput',handle:['cisgender','transgender']},
					{type:'trigger', handle:'end',duration:200}
				]
			},
			// End trial
			{
				conditions: [{type:'inputEquals', value:'end'}],
				actions:[
					{type:'endTrial'}
				]
			}
		]
	}]);

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
					{type:'setInput',input:{handle:'endTrial', on:'timeout',duration:500}} //In 500ms: end the trial. In the mean time, we get a blank screen.
				]
			},
			{
				conditions: [{type:'inputEquals',value:'endTrial'}], //What to do when endTrial is called.
				actions: [
					{type:'endTrial'} //End the trial
				]
			}
		]
	});
	
	API.addTrialSets('cisgender',[{
		inherit:'base',
		data: {group:'cisgender', condition:'cisgender'},
		stimuli: [
			{
				inherit : 'cisgender', 
				media : {inherit:{set:'cisgender',type:'exRandom'}}
			},
		    {inherit:{type:'random',set:'feedback'}}
		]
	}]);


	API.addTrialSets('transgender',[{
		inherit:'base',
		data: {group:'transgender', condition:'transgender'},
		stimuli: [
			{
				inherit : 'transgender', 
				media : {inherit:{set:'transgender',type:'exRandom'}} 
			},
			{inherit:{type:'random',set:'feedback'}}
		]
	}]);

	API.addSequence([
		{
			inherit : 'inst', 
			stimuli: [
				{
					media:{html:
				'<div>' +
				'<p align="center"><u>Sorteeropdracht</u></p>' +
				'<br/>' +
				'Leg uw linker vinger op de <b>E</b> toets en uw rechter vinger op de <b>I</b> toets. ' +
				'Als de persoon transgender is, klik op de <b>I</b> toets. Als de persoon cisgender is, klik op de <b>E</b> toets ' +
				'Items komen een voor een voorbij.<br/><br/>' +	
				
				'<p align="center">Klik op de <b>spatiebalk<b> om te beginnen.</p>' +
			'</div>'},
					css : {color:'black', padding:'3%'}
				}
			]			
		},
		{
			mixer: 'random',
			data: [
				{
					mixer: 'repeat',
					times: 12,
					data: [
						{inherit:'cisgender', data : {block:1}},
						{inherit:'transgender', data : {block:1}}
					]
				}
			]
		},
		{
			inherit : 'inst', 
			data: {blockStart:true},
			stimuli: [
				{
					media:{word:'U hebt het oefen gedeelte van de test afgerond. Druk op de spatiebalk om verder te gaan.'}, 
					css : {color:'black', padding:'3%'}
				}
			]			
		}
	]);
	return API.script;
});
/* don't forget to close the define wrapper */





