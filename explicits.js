define(['questAPI'], function(Quest){
    let API = new Quest();
    let isTouch = API.getGlobal().$isTouch;
	
    /**
	* Page prototype
	*/
    API.addPagesSet('basicPage',{
        noSubmit:false, //Change to true if you don't want to show the submit button.
        header: 'Questionnaire',
        decline: true,
        declineText: isTouch ? 'Decline' : 'Decline to Answer', 
        autoFocus:true, 
        progressBar:  'Page <%= pagesMeta.number %> out of 3'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Please select an answer, or click \'Weiger\'' 
                : 'Please select an answer, or click \'Wil ik liever niet beantwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 3 %>',
        helpText: 'Tip: Klik twee maal op uw keuze om snel te antwoorden.'
    });

    API.addQuestionsSet('basicSelect',{
        inherit :'basicQ',
        type: 'selectOne'
    });
	
    API.addQuestionsSet('basicDropdown',{
        inherit :'basicQ',
        type : 'dropdown',
        autoSubmit:false
    });
	
    API.addQuestionsSet('therm',{
        inherit: 'basicSelect',
        answers: [
            {text:'10 - Extreem warm', value:10},
            {text:'9 - Zeer warm', value:9},
            {text:'8 -  Warm', value:8},
            {text:'7 - Best warm', value:7},
            {text:'6 - Beetje warm', value:6},
            {text:'5 - Noch warm noch koud', value:5},
            {text:'4 - Beetje cold', value:4},
            {text:'3 - Best cold', value:3},
            {text:'2 - Koud', value:2},
            {text:'1 - Zeer koud', value:1},
            {text:'0 - Extreem koud', value:0}
        ]
    });

	
    /**
	*Specific questions
	*/	
    API.addQuestionsSet('attributes7',{
        inherit : 'basicSelect',
        name: 'attributes7',
        stem: 'Which statement best describes you?',
        answers: [
            {text:'I strongly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:7},
            {text:'I moderately prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:6},
            {text:'I slightly prefer <%= global.whiteLabels %> to <%= global.blackLabels %>.',value:5},
            {text:'I like <%= global.whiteLabels %> and <%= global.blackLabels %> equally.',value:4},
            {text:'I slightly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:3},
            {text:'I moderately prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:2},
            {text:'I strongly prefer <%= global.blackLabels %> to <%= global.whiteLabels %>.',value:1}
        ]
    });
	
    API.addQuestionsSet('thermBlack',{
        inherit : 'therm',
        name: 'Tblack_0to10',
        stem: 'How warm or cold do you feel towards <b><%= global.blackLabels %></b>?'
    });

    API.addQuestionsSet('thermWhite',{
        inherit : 'therm',
        name: 'Twhite_0to10',
        stem: 'How warm or cold do you feel towards <b><%= global.whiteLabels %></b>?'
    });

    API.addSequence([
        {
            mixer : 'random', 
            data : [
                {
                    mixer : 'random', 
                    wrapper:true, 
                    data : [
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermBlack'}
                        },
                        {
                            inherit:'basicPage', 
                            questions: {inherit:'thermWhite'}							
                        }
                    ]
                },
                {
                    inherit:'basicPage', 
                    questions: {inherit:'attributes7'}
                }
            ]
        }
    ]);

    return API.script;
});
