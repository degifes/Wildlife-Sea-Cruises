"use strict";

/* JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Atsede Degife
      Date:   04/16/2026

      Filename: project12-01.js
*/

$(document).ready(function() {
   
   // Target the list items with the class "submenu"
   $("li.submenu")
      .mouseover(e => {
         // Find the nested <ul> (the dropdown) and show it
         $(e.currentTarget).children("ul").show();
      })
      .mouseout(e => {
         // Find the nested <ul> and hide it
         $(e.currentTarget).children("ul").hide();
      });

});



                                                