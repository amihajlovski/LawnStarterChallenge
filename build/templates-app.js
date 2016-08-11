angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"center\">\n" +
    "        <p>{{user.name}}, you successfully applied. If you want to change something and apply again click the button below!</p>\n" +
    "        <button class=\"btn btn-success\" ng-click=\"redirect()\">GO BACK</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"container\">\n" +
    "  <div class=\"center\">\n" +
    "    <div class=\"application-form\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\" id=\"basic-addon1\">&#9977;</span>\n" +
    "        <input ng-model=\"user.name\" type=\"text\" class=\"form-control\" placeholder=\"Your name\" aria-describedby=\"basic-addon1\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\">@</span>\n" +
    "        <input ng-model=\"user.email\" type=\"text\" class=\"form-control\" placeholder=\"Your email\" aria-describedby=\"basic-addon1\">\n" +
    "      </div>\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\"><span class=\"glyphicon glyphicon-pencil\"></span></span>\n" +
    "        <input ng-model=\"user.comment\" type=\"text\" class=\"form-control message\" placeholder=\"Your comment\" aria-describedby=\"basic-addon1\">\n" +
    "      </div>\n" +
    "      <div class=\"next-button\">\n" +
    "        <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n" +
    "          <button type=\"button\" class=\"btn btn-primary\" ng-disabled=\"!isFormValid()\" ng-click=\"submitForm()\">Next</button>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
