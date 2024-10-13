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
        declineText: isTouch ? 'Weiger' : 'Weigeren te antwoorden', 
        autoFocus:true, 
        progressBar:  'Vraag <%= pagesMeta.number %> van de 4'
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
                : 'Selecteer een antwoord of klik op \'Weigeren te antwoorden\''
        },
        autoSubmit:'true',
        numericValues:'true',
        help: '<%= pagesMeta.number < 4 %>',
        helpText: 'Tip: Voor een snel antwoord klik om je antwoord te selecteren en klik je nogmaals om te verzenden.'
    });


    API.addQuestionsSet('basicText',{
        inherit :'basicQ',
        type: 'text'
    });
	
   
   

    API.addQuestionsSet('age', {
        inherit : 'basicText',
        name: 'uniek',
        stem: 'Voer hier de code in die u in de vragenlijst heeft gegenereerd.'
    });
	
	 API.addQuestionsSet('age', {
        inherit : 'basicText',
        name: 'check',
        stem: 'Werkt de code zo wel?.'
    });
	
	
    API.addSequence([
	    
        {  inherit:'basicPage', 
        questions: [{inherit:'uniek'}] },
	    
	     {  inherit:'basicPage', 
        questions: [{inherit:'check'}] }
    ]);

    return API.script;
});

