import React

function SCRIPT(){
  return(
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [{
          "@type": "WebSite",
          "@id": "https://bootstrapmade.com/#website",
          "url": "https://bootstrapmade.com/",
          "name": "BootstrapMade",
          "description": "Free Bootstrap Themes and Website Templates",
          "potentialAction": [{
            "@type": "SearchAction",
            "target": "https://bootstrapmade.com/search/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }],
          "inLanguage": "en-US"
        }, {
          "@type": "ImageObject",
          "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/#primaryimage",
          "inLanguage": "en-US",
          "url": "https://bootstrapmade.com/content/templatefiles/Laura/Laura-bootstrap-website-template.png",
          "width": 1320,
          "height": 990,
          "caption": "Laura - Free Creative Bootstrap Template"
        }, {
          "@type": "WebPage",
          "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/#webpage",
          "url": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/",
          "name": "Laura - Free Creative Bootstrap Template | BootstrapMade",
          "isPartOf": {
            "@id": "https://bootstrapmade.com/#website"
          },
          "primaryImageOfPage": {
            "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/#primaryimage"
          },
          "datePublished": "Thu, 01 Jan 1970 00:00:00 +0000",
          "dateModified": "Thu, 01 Jan 1970 00:00:00 +0000",
          "description": "Laura is a clean and responsive free portfolio website template. Laura is mobile friendly, clean code,",
          "breadcrumb": {
            "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/#breadcrumb"
          },
          "inLanguage": "en-US",
          "potentialAction": [{
            "@type": "ReadAction",
            "target": ["https://bootstrapmade.com/laura-free-creative-bootstrap-theme/"]
          }]
        }, {
          "@type": "BreadcrumbList",
          "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/#breadcrumb",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://bootstrapmade.com/",
              "url": "https://bootstrapmade.com/",
              "name": "Home"
            }
          }, {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "WebPage",
              "@id": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/",
              "url": "https://bootstrapmade.com/laura-free-creative-bootstrap-theme/",
              "name": "Laura - Free Creative Bootstrap Template"
            }
          }]
        }]
      }
    </script>
  )
}
export default SCRIPT
