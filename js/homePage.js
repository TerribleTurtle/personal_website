$(document).ready(function(){
	$('#about, #projects').hover(function(){

		$(this).addClass('navLinksHover').removeClass("navLinks");

	},
	function(){
		$(this).addClass('navLinks').removeClass("navLinksHover");

	});
	$('#headerName').hover(function(){

		$(this).addClass('navHoverName')

	},
	function(){
		$(this).removeClass("navHoverName");

	});

	$('#about').click(function(){
		$('#aboutMe').css('display', "inherit");
		$('#projectsPage').css('display', 'none')
		$("#portrait").css({'height' : '200px', 'width' : '200px'})

	});

	$('#projects').click(function(){
		$('#projectsPage').css('display', "inherit");
		$('#aboutMe').css('display', 'none')
		$("#portrait").css({'height' : '200px', 'width' : '200px'})
	});

	$('#headerName').click(function(){
		$('#projectsPage').css('display', "none");
		$('#aboutMe').css('display', 'none')
		$("#portrait").css({'height' : 'initial', 'width' : 'initial'})
	});
	


});