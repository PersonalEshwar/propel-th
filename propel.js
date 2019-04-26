document.addEventListener("DOMContentLoaded", function(event) {
  var x = document.querySelectorAll(
    '[descriptorid="org.jenkinsci.plugins.matrixauth.AuthorizationContainer"]'
  );
  if (x.length > 0) {
    var allElements = x[0].getElementsByTagName("input");
    for (var i = 0, l = allElements.length; i < l; ++i) {
      allElements[i].disabled = true;
    }
    allElements = x[0].getElementsByTagName("select");
    for (var i = 0, l = allElements.length; i < l; ++i) {
      allElements[i].disabled = true;
    }
  }

  // need to wait for alerts to appear
  window.setTimeout(function() {
    // hide some warnings at the top of Manage Jenkins page.
    document.querySelectorAll(".alert").forEach(el => {
      if (
        el.innerText.indexOf("Warnings have been published") >= 0 ||
        el.innerText.indexOf(
          "It appears that your reverse proxy set up is broken."
        ) >= 0 ||
        el.innerText.indexOf("New version of Jenkins") >= 0
      ) {
        el.style = "display:none";
      }
    });
  }, 500);

  var authInput = document.querySelector('label>input[name="authorization"]');
  if (authInput) {
    var label = authInput.parentNode;
    var td = label.parentNode;
    var authWarning = document.createElement("div");
    authWarning.classList.add("alert");
    authWarning.classList.add("alert-warning");
    var text = document.createTextNode(
      'Warning: Propel users and roles will only map to Jenkins when using "Matrix-based security".  If you require a different form of authorization, you will need to manage Jenkins users and roles manually without support from the Propel team.  (This is not recommended.)'
    );
    authWarning.appendChild(text);
    td.insertBefore(authWarning, label);
  }
});
