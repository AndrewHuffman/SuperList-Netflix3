// ==UserScript==
// @name        Netflix Super Browse2
// @namespace   Giantblargg
// @description Access Netflix Secret Categories (Original by CyrisXD) (edited by  pigy)
// @version     1.2 
// @grant       GM_addStyle
// @match       *://*.netflix.com/*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==

//Add css
GM_addStyle("#secretMenu {overflow-y:auto;height:300px;}");

// Declare Categories here because Firefox sucks

var categories = {
"Action &amp; Adventure" : "/browse/genre/1365",

"Action Comedies" : "/browse/genre/43040",

"Action Sci-Fi &amp; Fantasy" : "/browse/genre/1568",

"Action Thrillers" : "/browse/genre/43048",

"Adult Animation" : "/browse/genre/11881",

"Adventures" : "/browse/genre/7442",

"African Movies" : "/browse/genre/3761",

"Alien Sci-Fi" : "/browse/genre/3327",

"Animal Tales" : "/browse/genre/5507",

"Anime" : "/browse/genre/7424",

"Anime Action" : "/browse/genre/2653",

"Anime Comedies" : "/browse/genre/9302",

"Anime Dramas" : "/browse/genre/452",

"Anime Fantasy" : "/browse/genre/11146",

"Anime Features" : "/browse/genre/3063",

"Anime Horror" : "/browse/genre/10695",

"Anime Sci-Fi" : "/browse/genre/2729",

"Anime Series" : "/browse/genre/6721",

"Art House Movies" : "/browse/genre/29764",

"Asian Action Movies" : "/browse/genre/77232",

"Australian Movies" : "/browse/genre/5230",

"B-Horror Movies" : "/browse/genre/8195",

"Baseball Movies" : "/browse/genre/12339",

"Basketball Movies" : "/browse/genre/12762",

"Belgian Movies" : "/browse/genre/262",

"Biographical Documentaries" : "/browse/genre/3652",

"Biographical Dramas" : "/browse/genre/3179",

"Boxing Movies" : "/browse/genre/12443",

"British Movies" : "/browse/genre/10757",

"British TV Shows" : "/browse/genre/52117",

"Campy Movies" : "/browse/genre/1252",

"Children &amp; Family Movies" : "/browse/genre/783",

"Chinese Movies" : "/browse/genre/3960",

"Classic Action &amp; Adventure" : "/browse/genre/46576",

"Classic Comedies" : "/browse/genre/31694",

"Classic Dramas" : "/browse/genre/29809",

"Classic Foreign Movies" : "/browse/genre/32473",

"Classic Movies" : "/browse/genre/31574",

"Classic Musicals" : "/browse/genre/32392",

"Classic Romantic Movies" : "/browse/genre/31273",

"Classic Sci-Fi &amp; Fantasy" : "/browse/genre/47147",

"Classic Thrillers" : "/browse/genre/46588",

"Classic TV Shows" : "/browse/genre/46553",

"Classic War Movies" : "/browse/genre/48744",

"Classic Westerns" : "/browse/genre/47465",

"Comedies" : "/browse/genre/6548",

"Comic Book and Superhero Movies" : "/browse/genre/10118",

"Country &amp; Western/Folk" : "/browse/genre/1105",

"Courtroom Dramas" : "/browse/genre/528582748",

"Creature Features" : "/browse/genre/6895",

"Crime Action &amp; Adventure" : "/browse/genre/9584",

"Crime Documentaries" : "/browse/genre/9875",

"Crime Dramas" : "/browse/genre/6889",

"Crime Thrillers" : "/browse/genre/10499",

"Crime TV Shows" : "/browse/genre/26146",

"Cult Comedies" : "/browse/genre/9434",

"Cult Horror Movies" : "/browse/genre/10944",

"Cult Movies" : "/browse/genre/7627",

"Cult Sci-Fi &amp; Fantasy" : "/browse/genre/4734",

"Cult TV Shows" : "/browse/genre/74652",

"Dark Comedies" : "/browse/genre/869",

"Deep Sea Horror Movies" : "/browse/genre/45028",

"Disney" : "/browse/genre/67673",

"Disney Musicals" : "/browse/genre/59433",

"Documentaries" : "/browse/genre/6839",

"Dramas" : "/browse/genre/5763",

"Dramas based on Books" : "/browse/genre/4961",

"Dramas based on real life" : "/browse/genre/3653",

"Dutch Movies" : "/browse/genre/10606",

"Eastern European Movies" : "/browse/genre/5254",

"Education for Kids" : "/browse/genre/10659",

"Epics" : "/browse/genre/52858",

"Experimental Movies" : "/browse/genre/11079",

"Faith &amp; Spirituality" : "/browse/genre/26835",

"Faith &amp; Spirituality Movies" : "/browse/genre/52804",

"Family Features" : "/browse/genre/51056",

"Fantasy Movies" : "/browse/genre/9744",

"Film Noir" : "/browse/genre/7687",

"Food &amp; Travel TV" : "/browse/genre/72436",

"Football Movies" : "/browse/genre/12803",

"Foreign Action &amp; Adventure" : "/browse/genre/11828",

"Foreign Comedies" : "/browse/genre/4426",

"Foreign Documentaries" : "/browse/genre/5161",

"Foreign Dramas" : "/browse/genre/2150",

"Foreign Gay &amp; Lesbian Movies" : "/browse/genre/8243",

"Foreign Horror Movies" : "/browse/genre/8654",

"Foreign Movies" : "/browse/genre/7462",

"Foreign Sci-Fi &amp; Fantasy" : "/browse/genre/6485",

"Foreign Thrillers" : "/browse/genre/10306",

"French Movies" : "/browse/genre/58807",

"Gangster Movies" : "/browse/genre/31851",

"Gay &amp; Lesbian Dramas" : "/browse/genre/500",

"German Movies" : "/browse/genre/58886",

"Greek Movies" : "/browse/genre/61115",

"Historical Documentaries" : "/browse/genre/5349",

"Horror Comedy" : "/browse/genre/89585",

"Horror Movies" : "/browse/genre/8711",

"Independent Action &amp; Adventure" : "/browse/genre/11804",

"Independent Comedies" : "/browse/genre/4195",

"Independent Dramas" : "/browse/genre/384",

"Independent Movies" : "/browse/genre/7077",

"Independent Thrillers" : "/browse/genre/3269",

"Indian Movies" : "/browse/genre/10463",

"Irish Movies" : "/browse/genre/58750",

"Italian Movies" : "/browse/genre/8221",

"Japanese Movies" : "/browse/genre/10398",

"Jazz &amp; Easy Listening" : "/browse/genre/10271",

"Kids Faith &amp; Spirituality" : "/browse/genre/751423",

"Kids Music" : "/browse/genre/52843",

"Kids’ TV" : "/browse/genre/27346",

"Korean Movies" : "/browse/genre/5685",

"Korean TV Shows" : "/browse/genre/67879",

"Late Night Comedies" : "/browse/genre/1402",

"Latin American Movies" : "/browse/genre/1613",

"Latin Music" : "/browse/genre/10741",

"Martial Arts Movies" : "/browse/genre/8985",

"Martial Arts, Boxing &amp; Wrestling" : "/browse/genre/6695",

"Middle Eastern Movies" : "/browse/genre/5875",

"Military Action &amp; Adventure" : "/browse/genre/2125",

"Military Documentaries" : "/browse/genre/4006",

"Military Dramas" : "/browse/genre/11",

"Military TV Shows" : "/browse/genre/25804",

"Miniseries" : "/browse/genre/4814",

"Mockumentaries" : "/browse/genre/26",

"Monster Movies" : "/browse/genre/947",

"Movies based on children’s books" : "/browse/genre/10056",

"Movies for ages 0 to 2" : "/browse/genre/6796",

"Movies for ages 2 to 4" : "/browse/genre/6218",

"Movies for ages 5 to 7" : "/browse/genre/5455",

"Movies for ages 8 to 10" : "/browse/genre/561",

"Movies for ages 11 to 12" : "/browse/genre/6962",

"Music &amp; Concert Documentaries" : "/browse/genre/90361",

"Music" : "/browse/genre/1701",

"Musicals" : "/browse/genre/13335",

"Mysteries" : "/browse/genre/9994",

"New Zealand Movies" : "/browse/genre/63782",

"Period Pieces" : "/browse/genre/12123",

"Political Comedies" : "/browse/genre/2700",

"Political Documentaries" : "/browse/genre/7018",

"Political Dramas" : "/browse/genre/6616",

"Political Thrillers" : "/browse/genre/10504",

"Psychological Thrillers" : "/browse/genre/5505",

"Quirky Romance" : "/browse/genre/36103",

"Reality TV" : "/browse/genre/9833",

"Religious Documentaries" : "/browse/genre/10005",

"Rock &amp; Pop Concerts" : "/browse/genre/3278",

"Romantic Comedies" : "/browse/genre/5475",

"Romantic Dramas" : "/browse/genre/1255",

"Romantic Favorites" : "/browse/genre/502675",

"Romantic Foreign Movies" : "/browse/genre/7153",

"Romantic Independent Movies" : "/browse/genre/9916",

"Romantic Movies" : "/browse/genre/8883",

"Russian" : "/browse/genre/11567",

"Satanic Stories" : "/browse/genre/6998",

"Satires" : "/browse/genre/4922",

"Scandinavian Movies" : "/browse/genre/9292",

"Sci-Fi &amp; Fantasy" : "/browse/genre/1492",

"Sci-Fi Adventure" : "/browse/genre/6926",

"Sci-Fi Dramas" : "/browse/genre/3916",

"Sci-Fi Horror Movies" : "/browse/genre/1694",

"Sci-Fi Thrillers" : "/browse/genre/11014",

"Science &amp; Nature Documentaries" : "/browse/genre/2595",

"Science &amp; Nature TV" : "/browse/genre/52780",

"Screwball Comedies" : "/browse/genre/9702",

"Showbiz Dramas" : "/browse/genre/5012",

"Showbiz Musicals" : "/browse/genre/13573",

"Silent Movies" : "/browse/genre/53310",

"Slapstick Comedies" : "/browse/genre/10256",

"Slasher and Serial Killer Movies" : "/browse/genre/8646",

"Soccer Movies" : "/browse/genre/12549",

"Social &amp; Cultural Documentaries" : "/browse/genre/3675",

"Social Issue Dramas" : "/browse/genre/3947",

"Southeast Asian Movies" : "/browse/genre/9196",

"Spanish Movies" : "/browse/genre/58741",

"Spiritual Documentaries" : "/browse/genre/2760",

"Sports &amp; Fitness" : "/browse/genre/9327",

"Sports Comedies" : "/browse/genre/5286",

"Sports Documentaries" : "/browse/genre/180",

"Sports Dramas" : "/browse/genre/7243",

"Sports Movies" : "/browse/genre/4370",

"Spy Action &amp; Adventure" : "/browse/genre/10702",

"Spy Thrillers" : "/browse/genre/9147",

"Stage Musicals" : "/browse/genre/55774",

"Stand-up Comedy" : "/browse/genre/11559",

"Steamy Romantic Movies" : "/browse/genre/35800",

"Steamy Thrillers" : "/browse/genre/972",

"Supernatural Horror Movies" : "/browse/genre/42023",

"Supernatural Thrillers" : "/browse/genre/11140",

"Tearjerkers" : "/browse/genre/6384",

"Teen Comedies" : "/browse/genre/3519",

"Teen Dramas" : "/browse/genre/9299",

"Teen Screams" : "/browse/genre/52147",

"Teen TV Shows" : "/browse/genre/60951",

"Thrillers" : "/browse/genre/8933",

"Travel &amp; Adventure Documentaries" : "/browse/genre/1159",

"TV Action &amp; Adventure" : "/browse/genre/10673",

"TV Cartoons" : "/browse/genre/11177",

"TV Comedies" : "/browse/genre/10375",

"TV Documentaries" : "/browse/genre/10105",

"TV Dramas" : "/browse/genre/11714",

"TV Horror" : "/browse/genre/83059",

"TV Mysteries" : "/browse/genre/4366",

"TV Sci-Fi &amp; Fantasy" : "/browse/genre/1372",

"TV Shows" : "/browse/genre/83",

"Urban &amp; Dance Concerts" : "/browse/genre/9472",

"Vampire Horror Movies" : "/browse/genre/75804",

"Werewolf Horror Movies" : "/browse/genre/75930",

"Westerns" : "/browse/genre/7700",

"World Music Concerts" : "/browse/genre/2856",

"Zombie Horror Movies" : "/browse/genre/75405"};

// Delay script by 1 second for jQuery to load.
setTimeout(function() { 

    // Add in the Super Browse Nav
    $('ul[role="navigation"]').prepend('<li class="active hasSubMenu browse" id="superBrowse" style="list-style-type:none;"><span style="color:#E50914; font-weight:700; font-size:16px;">Super Browse</span><span class="caret"></span></li>');

        // Set up container for incoming data
        $("#superBrowse").append('<div id="secretMenu" class="sub-menu genreNav hasSpecialItems" style="opacity:1; display:none; overflow-x:hidden;">\
							  <ul id="ulList" class="sub-menu-list multi-column" style="padding-left:30px; padding-top:10px;">\
							  </ul>\
							  </div>');



        // Set previousLetter varibale for letter headings
        var previousLetter = "";

        // Iterate through each object in categories
        $.each(categories, function(name, href) {

            //Check if letter heading exists
            if (name.charAt(0) === previousLetter) {
                // Append each listing into container
                $('#ulList').append('<li class="sub-menu-item listings"><a class="sub-menu-link" href="' + href + '">' + name + '</a></li>');

            } else {
                // Append Heading Letter
                $('#ulList').append('<li class="sub-menu-item listings"><h2>' + name.charAt(0) + '</h2><hr /></li>');
                // Append each listing into container
                $('#ulList').append('<li class="sub-menu-item listings"><a class="sub-menu-link" href="' + href + '">' + name + '</a></li>');
            }
            // Update previousLetter with latest letter
            previousLetter = name.charAt(0);
        });




        // Animation for reveal Secret Genres	
        $("#superBrowse").mouseover(
            function() {
                $("#secretMenu").fadeIn();
          });

        $("#secretMenu").mouseleave(
            function() {
                $("#secretMenu").hide();
          });

   // });

}, 1000);