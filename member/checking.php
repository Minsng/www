<?
echo ("
<script>
  if( $('#id').hasClass('passed') && 
      $('#pass').hasClass('passed') &&
      $('#pass_confirm').hasClass('passed') &&
      $('#name').hasClass('passed') &&
      $('#nick').hasClass('passed') &&
      $('#hp').hasClass('passed')
  ) {
    $('.reg').css({'pointer-events':'all','opacity' : 1});
  }
</script> ");
?>