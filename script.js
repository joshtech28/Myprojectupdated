AOS.init();
           
               // Event listener para sa click event ng download button
               document.getElementById("downloadBtn").addEventListener("click", function() {
                   // Gumawa ng isang link element para sa PDF file
                   var link = document.createElement('a');
                   link.href = 'VILLAPEREZJOSHUACV.pdf'; // Ipapalitan mo ito ng tamang path patungo sa iyong PDF file
                   link.download = 'VILLAPEREZ-JOSHUA-CV.pdf'; // Pangalan ng pag-download ng file
           
                   // Simulang i-click ang link
                   document.body.appendChild(link);
                   link.click();
           
                   // Alisin ang link pagkatapos ma-download
                   document.body.removeChild(link);
               });
               var button = document.getElementById('submitButton');
               button.addEventListener('click', function() {
                alert('Form submitted!');
            });

            