$(document).ready(function() { // Ждём загрузки страницы

	document.getElementById('hider').onclick = function() {
	document.getElementById('step').style.display = 'none'; 
	document.getElementById('step2').style.display = 'block'; 
	}

	document.getElementById('next2').onclick = function() {
	document.getElementById('step2').style.display = 'none';
	document.getElementById('step3').style.display = 'block';
	}

	document.getElementById('back2').onclick = function() {
	document.getElementById('step2').style.display = 'none';
	document.getElementById('step').style.display = 'block';
	}

	document.getElementById('next3').onclick = function() {
	document.getElementById('step3').style.display = 'none';
	document.getElementById('step4').style.display = 'block';
	}

	document.getElementById('back3').onclick = function() {
	document.getElementById('step3').style.display = 'none';
	document.getElementById('step2').style.display = 'block';
	}	

	document.getElementById('next4').onclick = function() {
	document.getElementById('step4').style.display = 'none';
	document.getElementById('step5').style.display = 'block';
	}

	document.getElementById('back4').onclick = function() {
	document.getElementById('step4').style.display = 'none';
	document.getElementById('step3').style.display = 'block';
	}	

	document.getElementById('next5').onclick = function() {
	document.getElementById('step5').style.display = 'none';
	document.getElementById('step6').style.display = 'block';
	}

	document.getElementById('back5').onclick = function() {
	document.getElementById('step5').style.display = 'none';
	document.getElementById('step4').style.display = 'block';
	}		

	document.getElementById('next6').onclick = function() {
	document.getElementById('step6').style.display = 'none';
	document.getElementById('step7').style.display = 'block';
	}

	document.getElementById('back6').onclick = function() {
	document.getElementById('step6').style.display = 'none';
	document.getElementById('step5').style.display = 'block';
	}	

	document.getElementById('next7').onclick = function() {
	document.getElementById('step7').style.display = 'none';
	document.getElementById('step8').style.display = 'block';
	}

	document.getElementById('back7').onclick = function() {
	document.getElementById('step7').style.display = 'none';
	document.getElementById('step6').style.display = 'block';
	}	

	document.getElementById('next8').onclick = function() {
	document.getElementById('step8').style.display = 'none';
	document.getElementById('step9').style.display = 'block';
	var $preloader = jQuery('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut(3000).delay(1000).fadeOut('slow');
    $preloader.fadeIn(3000).delay(1000).fadeOut('slow');
    document.getElementById('step10').style.display = 'block';
	}

	document.getElementById('back8').onclick = function() {
	document.getElementById('step8').style.display = 'none';
	document.getElementById('step7').style.display = 'block';
	}	
});