define(['managerAPI',
		'https://cdn.jsdelivr.net/gh/minnojs/minno-datapipe@1.*/datapipe.min.js'], function(Manager){


	//You can use the commented-out code to get parameters from the URL.
	//const queryString = window.location.search;
    //const urlParams = new URLSearchParams(queryString);
    //const pt = urlParams.get('pt');

	var API    = new Manager();
	//const subid = Date.now().toString(16)+Math.floor(Math.random()*10000).toString(16);
	init_data_pipe(API, 'sW28msEenoyj',  {file_type:'csv'});	

    API.setName('mgr');
    API.addSettings('skip',true);

    //Randomly select which of two sets of category labels to use.
    let genderSet = API.shuffle(['a','b'])[0];
    let transgenderLabels = [];
    let cisgenderLabels = [];

    if (genderSet == 'a') {
        transgenderLabels.push('Transgender personen');
        cisgenderLabels.push('Cisgender personen');
    } else {
        transgenderLabels.push('Transgender personen');
        cisgenderLabels.push('Cisgender personen');
    }

    API.addGlobal({
        genderiat:{},
        //YBYB: change when copying back to the correct folder
        baseURL: './images/',
        genderSet:genderSet,
        transgenderLabels:transgenderLabels,
        cisgenderLabels:cisgenderLabels,
        //Select randomly what attribute words to see. 
        //Based on Axt, Feng, & Bar-Anan (2021).
        posWords : API.shuffle([
	    'Liefde', 'Blijdschap', 'Vriend', 'Plezier',
            'Adoreren', 'Vrolijk', 'Vriendschap', 'Blij', 
            'Glimlachend', 'Koesteren', 'Uitstekend', 'Tevreden', 
            'Vreugdevol', 'Spectaculair', 'Aantrekkelijk', 'Genieten', 
            'Enthousiasme', 'Lachen', 'Knap', 'Heerlijk', 
            'Geweldig', 'Glorierijk', 'Aangenaam', 'Mooi',
            'Fantastisch', 'Verheugd', 'Lief', 'Excellent',
            'Vieren', 'Prachtig', 'Magnifiek', 'Overwinning'
        ]), 
        negWords : API.shuffle([
	    'Misbruik', 'Rouw', 'Vergif', 'Verdriet', 
            'Pijn', 'Verafschuwen', 'Mislukking', 'Vies', 
            'Boos', 'Afkeer', 'Afschuwelijk', 'Negatief',
            'Lelijk', 'Vies', 'Goor', 'Slecht',
            'Verrot', 'Irriteren', 'Ramp', 'Afgrijselijk',  
            'Minachting', 'Vreselijk', 'Walging', 'Haten', 
            'Vernedering', 'Egoïstisch', 'Tragisch', 'Hinderlijk', 
            'Haat', 'Pijnlijk', 'Misselijkmakend', 'Gadver'
        ])
    });

    API.addTasksSet({
        instructions: [{
            type: 'message',
            buttonText: 'Continue'
        }],

        intro: [{
            inherit: 'instructions',
            name: 'intro',
            templateUrl: 'intro.jst',
            title: 'Intro',
            header: 'Welcome'
        }],
	    
        genderiat_instructions: [{
            inherit: 'instructions',
            name: 'genderiat_instructions',
            templateUrl: 'genderiat_instructions.jst',
            title: 'IAT Instructies',
            header: 'Implicit Association Test'
        }],
	    
	    genderiat_instructionscis: [{
            inherit: 'instructions',
            name: 'genderiat_instructionscis',
            templateUrl: 'genderiat_instructionscis.jst',
            title: 'IAT Instructies',
            header: 'Implicit Association Test'
        }],
	    
 		trial_instructions: [{
            inherit: 'instructions',
            name: 'trial_instructions',
            templateUrl: 'trial_instructions.jst',
            title: 'IAT Instructies',
            header: 'Implicit Association Test'
        }],
	    
	    sortingtask: [{
		type: 'time',
		name: 'sortingtask',
		scriptUrl: 'sortingtask.js'
	}],
	    
	    full_instructions: [{
            inherit: 'instructions',
            name: 'full_instructions',
            templateUrl: 'full_instructions.jst',
            title: 'IAT Instructies',
            header: 'Implicit Association Test'
        }],

	explicits: [{
            type: 'quest',
            name: 'explicits',
            scriptUrl: 'explicits.js'
        }],
	    
        genderiat: [{
            type: 'time',
            name: 'genderiat',
            scriptUrl: 'genderiat.js'
        }],
	    
        lastpage: [{
            type: 'message',
            name: 'lastpage',
            templateUrl: 'lastpage.jst',
            title: 'End',
            //Uncomment the following if you want to end the study here.
            //last:true, 
            header: 'Einde'
        }], 
        
        //Use if you want to redirect the participants elsewhere at the end of the study
        redirect:
        [{ 
			//Replace with any URL you need to put at the end of your study, or just remove this task from the sequence below
            type:'redirect', name:'redirecting', url: 'https://www.radboudumc.nl/en/research' 
        }],
		
		//This task waits until the data are sent to the server.
        uploading: uploading_task({header: 'Een moment,', body:'Uw gegevens worden opgeslagen, een moment geduld alstublieft... '})
    });

    API.addSequence([
        { type: 'isTouch' }, //Use Minno's internal touch detection mechanism. 
        
        { type: 'post', path: ['$isTouch', 'genderSet', 'transgenderLabels', 'cisgenderLabels'] },

        // apply touch only styles
        {
            mixer:'branch',
            conditions: {compare:'global.$isTouch', to: true},
            data: [
                {
                    type: 'injectStyle',
                    css: [
                        '* {color:red}',
                        '[piq-page] {background-color: #fff; border: 1px solid transparent; border-radius: 4px; box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); margin-bottom: 20px; border-color: #bce8f1;}',
                        '[piq-page] > ol {margin: 15px;}',
                        '[piq-page] > .btn-group {margin: 0px 15px 15px 15px;}',
                        '.container {padding:5px;}',
                        '[pi-quest]::before, [pi-quest]::after {content: " ";display: table;}',
                        '[pi-quest]::after {clear: both;}',
                        '[pi-quest] h3 { border-bottom: 1px solid transparent; border-top-left-radius: 3px; border-top-right-radius: 3px; padding: 10px 15px; color: inherit; font-size: 2em; margin-bottom: 20px; margin-top: 0;background-color: #d9edf7;border-color: #bce8f1;color: #31708f;}',
                        '[pi-quest] .form-group > label {font-size:1.2em; font-weight:normal;}',

                        '[pi-quest] .btn-toolbar {margin:15px;float:none !important; text-align:center;position:relative;}',
                        '[pi-quest] [ng-click="decline($event)"] {position:absolute;right:0;bottom:0}',
                        '[pi-quest] [ng-click="submit()"] {width:30%;line-height: 1.3333333;border-radius: 6px;}',
                        // larger screens
                        '@media (min-width: 480px) {',
                        ' [pi-quest] [ng-click="submit()"] {width:30%;padding: 10px 16px;font-size: 1.6em;}',
                        '}',
                        // phones and smaller screens
                        '@media (max-width: 480px) {',
                        ' [pi-quest] [ng-click="submit()"] {padding: 8px 13px;font-size: 1.2em;}',
                        ' [pi-quest] [ng-click="decline($event)"] {font-size: 0.9em;padding:3px 6px;}',
                        '}'
                    ]
                }
            ]
        },
        
        
        {inherit: 'intro'},
	    {inherit: 'explicits'},
	    {
            mixer:'random',
            data:[
		    

                // force the instructions to preceed the iat
                {
                    mixer: 'wrapper',
                    data: [
                        {inherit: 'genderiat_instructions'},
			{inherit: 'genderiat_instructionscis'},
			{inherit: 'trial_instructions'},
			{inherit: 'sortingtask'},
			{inherit: 'full_instructions'},  
                        {inherit: 'genderiat'}
                    ]
                }
            ]
        },

		{inherit: 'uploading'},
        {inherit: 'lastpage'},
        {inherit: 'redirect'}
    ]);

    return API.script;
});
