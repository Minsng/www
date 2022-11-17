<?
echo ("
<script>
  if( 
      $('#pass').hasClass('passed') &&
      $('#pass_confirm').hasClass('passed')
  ) {
    $('.reg').css({'pointer-events':'all','opacity' : 1});
  }
</script> ");
?>