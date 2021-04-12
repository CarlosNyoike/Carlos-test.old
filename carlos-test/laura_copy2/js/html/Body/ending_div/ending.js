import React

function END(){
  return(
    <div>
      <a href="index.html#" class="back-to-top" title="Back to top"><svg class="icon icon-arrow-up" fill="currentColor">
          <use xlink:href="https://bootstrapmade.com/theme/img/icons-2.6.0.svg#arrow-up" />
        </svg></a>
      <script src="../theme/js/main-2.6.0.js"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-55234356-4"></script>
      <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-55234356-4');
      </script>
    </div>
  )
}
export default END
