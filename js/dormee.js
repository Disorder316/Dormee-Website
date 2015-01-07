<!-- Gallery Prevent Default -->>
<script>
$(document).ready(function() {
	$("#gallery a").click(function(e){
		e.preventDefault();
	})
});
</script>

<!-- Navigation Script Final -->
<script>
 $('nav a').on('click', function(e) {
e.preventDefault();
var href = $(this).attr('href');
$('html, body').animate({scrollTop: $(href).offset().top},'slow');
});  
</script>
<!-- Profile Script Final -->
<script>
$(function() {
	$('#the-band img.img-rounded').click(function(){
		$('.thumb-1, .thumb-2, .thumb-3, .thumb-4').removeClass('active').addClass('hidden');
		$('.' + this.id).removeClass('hidden').addClass("active");
		$('.hidden').hide();
		$('.active').fadeIn('slow');
	})
});
</script>
<!-- Youtube Modal Script Final -->
<script>
	$(function() {
		$('img.youtube').click(function() {
		$('.modal-iframe').replaceWith('<iframe class="modal-iframe" width="560" height="315" src="//www.youtube.com/embed/'+ this.id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
			}) 
	});
</script>
<!-- Navbar Fixed Script Final -->
<script>
$(function() {
	// Selects ID to be affixed and calculates offset to adjust for screen height. 
	$('#myAffix').affix({
        offset: { top: $('#myAffix').offset().top }
    })
	//Selects the element being affixed and runs a function adding margin to fill the void after the Nav Fixes to the top.
	$('nav').on('affix.bs.affix', function () {
		$('#top-level').css('margin-top', '100px');
	});
	//Removes the added margin when the navbar re-enters the DOM.
	$('nav').on('affix-top.bs.affix', function () {
		$('#top-level').css('margin-top', '0px');
	});
});
</script>