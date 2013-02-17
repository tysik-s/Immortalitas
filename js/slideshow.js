jQuery(document).ready(function(){
	var currentPosition = 0;
	
	//������ ��������
	var slideWidth = $('.slideshow .slidesContainer').width();
	var slides = $('.slide');
	
	//���������� �������
	var numberOfSlides = slides.length;

	//������� ���������
	$('#slidesContainer').css('overflow', 'hidden');
	
	// ��������� ��� �������� ������ slides � ������������ ����������� HTML
	slides.wrapAll('<div id="slideInner"></div>').css({
		'float' : 'left',
		'width' : slideWidth
	});
	
	//��������� ������ ������ �������� #slideInner
	$('#slideInner').css('width', slideWidth * numberOfSlides);
	
	//���������� ������������� ������, ����������� ���������� � ������ � ����� �������� slideshow, span, 
	$('#slideshow')
		.prepend('<span class="control" id="leftControl">Clicking moves left</span>')
		.append('<span class="control" id="rightControl">Clicking moves right</span>');
		
	//manageControls(currentPosition);
	
	//������� ����������� ��� ������� �� .controls clicks
	$('.control').bind('click', function(){
		//������� ������
		currentPosition = ($(this).attr('id')=='rightControl') ? currentPosition+1 : currentPosition-1;
		if (currentPosition < 0 ) currentPosition = numberOfSlides - 1;
		if (currentPosition >= numberOfSlides ) currentPosition = 0;
		//manageControls(currentPosition);
		
		//����� ��������
		$('#slideInner').animate({
			'marginLeft' : slideWidth*(-currentPosition)
		});
	});

	// manageControls: ���������� ��� ������ ������������� ������  currentPosition
	function manageControls(position){
		if(position==0){ $('#leftControl').hide() } else{ $('#leftControl').show() }
		if(position==numberOfSlides-1){ $('#rightControl').hide() } else{ $('#rightControl').show() }
	}	



        var nav = $(".topnav");  
        //add indicators and hovers to submenu parents  
        nav.find("li").each(function() {  
            if ($(this).find("ul").length > 0) {  
                //$("<span>").text("^").appendTo($(this).children(":first"));  
                //show subnav on hover  
                $(this).mouseenter(function() {  
                    $(this).find("ul").stop(true, true).slideDown();  
                });  
                //hide submenus on exit  
                $(this).mouseleave(function() {  
                    $(this).find("ul").stop(true, true).slideUp();  
                });  
            }  
        });  
    });