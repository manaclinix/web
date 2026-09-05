/* =========================================================
   MANACLINIX
   Main Website JavaScript
========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
========================================================= */

const menuButton =
  document.getElementById("menuBtn");

const mobileNavigation =
  document.getElementById("mobileNav");


if (menuButton && mobileNavigation) {

  menuButton.addEventListener(
    "click",
    function () {

      const isOpen =
        mobileNavigation.classList.toggle("open");


      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );


      menuButton.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );


      menuButton.textContent =
        isOpen
          ? "×"
          : "☰";

    }
  );


  /*
    Close mobile navigation after
    selecting a navigation link.
  */

  mobileNavigation
    .querySelectorAll("a")
    .forEach(
      function (link) {

        link.addEventListener(
          "click",
          function () {

            mobileNavigation
              .classList
              .remove("open");


            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );


            menuButton.setAttribute(
              "aria-label",
              "Open menu"
            );


            menuButton.textContent =
              "☰";

          }
        );

      }
    );

}


/* =========================================================
   02. WHAT WE DO PANELS
========================================================= */

const whatCards =
  document.querySelectorAll(
    ".what-card"
  );


whatCards.forEach(
  function (card) {

    const trigger =
      card.querySelector(
        ".what-card-trigger"
      );


    if (!trigger) {
      return;
    }


    trigger.addEventListener(
      "click",
      function () {

        const alreadyOpen =
          card.classList.contains(
            "is-open"
          );


        /*
          Close every panel.
        */

        whatCards.forEach(
          function (otherCard) {

            otherCard
              .classList
              .remove("is-open");


            const otherTrigger =
              otherCard.querySelector(
                ".what-card-trigger"
              );


            if (otherTrigger) {

              otherTrigger.setAttribute(
                "aria-expanded",
                "false"
              );

            }

          }
        );


        /*
          If this panel was previously closed,
          open it.

          Clicking an open panel therefore
          closes it again.
        */

        if (!alreadyOpen) {

          card
            .classList
            .add("is-open");


          trigger.setAttribute(
            "aria-expanded",
            "true"
          );

        }

      }
    );

  }
);


/* =========================================================
   03. SMOOTH INTERNAL NAVIGATION
========================================================= */

document
  .querySelectorAll(
    'a[href^="#"]'
  )
  .forEach(
    function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    }
  );


/* =========================================================
   04. CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const formData =
        new FormData(
          contactForm
        );


      const name =
        formData.get("name") || "";


      const email =
        formData.get("email") || "";


      const organization =
        formData.get("organization") || "";


      const message =
        formData.get("message") || "";


      const enquiry =
        formData.get("enquiry") ||
        "Website enquiry";


      const subject =
        encodeURIComponent(
          "ManaClinix enquiry — " +
          enquiry
        );


      const body =
        encodeURIComponent(
`Name: ${name}
Email: ${email}
Organization: ${organization || "Not provided"}
Enquiry: ${enquiry}

Message:
${message}`
        );


      /*
        This currently opens the user's
        email application.

        Later this can easily be replaced
        with Formspree, Netlify Forms,
        EmailJS or your own backend.
      */

      window.location.href =
        "mailto:contact@manaclinix.com" +
        "?subject=" +
        subject +
        "&body=" +
        body;

    }
  );

}


/* =========================================================
   05. COPYRIGHT YEAR
========================================================= */

const yearElement =
  document.getElementById(
    "currentYear"
  );


if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}
