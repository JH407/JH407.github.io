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
        declineText: isTouch ? 'Weiger' : 'Wil ik liever niet beantwoorden', 
        autoFocus:true, 
        progressBar:  'Pagina <%= pagesMeta.number %> van 1'
    });
	
    /**
	* Question prototypes
	*/
    API.addQuestionsSet('basicQ',{
        decline: 'true',
        required : true, 		
        errorMsg: {
            required: isTouch 
                ? 'Selecteer een antwoord of klik op \'Weiger\'' 
                : 'Selecteer een antwoord of klik op \'Wil ik liever niet beantwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 14 %>',
        helpText: 'Tip: Klik twee maal op uw keuze om snel te antwoorden.'
    });

	
	API.addQuestionsSet('basicText',{
        inherit :'basicQ',
        type: 'text'
    });
	
	

	API.addQuestionsSet('basicText',{
        inherit :'basicQ',
        name: 'code',
	stem: 'Voer nu de unieke code in die u bij de vragenlijst heeft gegenereerd.',
    });

	

    API.addSequence([
	    {
		inherit: 'basicPage',
		    questions: {inherit:'code'}
	    }
    ]);

    return API.script;
});
