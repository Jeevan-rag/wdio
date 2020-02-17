import {Given,When,Then} from 'cucumber';
let assert = require('chai').assert;
let expect = require('chai').expect;
let espnurl="https://www.espn.in/?_adblock=true&country=in&adtar=pc12345";

Given(/^I'm on the Home page$/, function () {
    browser.maximizeWindow()
    browser.url(espnurl);
    var exptitle="ESPN: Serving sports fans. Anytime. Anywhere.";
    var Acttitle=browser.getTitle();
    //assert.equal(Acttitle,exptitle,'these matches successfuly');
    expect(Acttitle).to.equal(exptitle);
});

When(/^I click on log in option$/, function () {
    browser.$("#sideLogin-left-rail > button.button-alt.med").click();
    //browser.pause(1000)
    var login=$("#sideLogin-left-rail > button.button-alt.med").getText();
    assert.exists(login,true);
    
});

When(/^I shall be on login page$/, function () {
    browser.switchToFrame($('#disneyid-iframe'));
    var user=$("//input[@type='email']").isDisplayed();// verifies switches to another frame
    console.log("user name block is displaying:"+user);
    assert.equal(true,user);
});

When(/^I login with valid user credentials$/, function () {
    //browser.switchToFrame($('#disneyid-iframe'));
    var user=$("//input[@type='email']").setValue("jeevantestespn@gmail.com");
    var user=$("//input[@type='password']").setValue("espn3941");
    //browser.pause(3000);
    browser.$(".btn.btn-primary.btn-submit.ng-isolate-scope").click();
    //browser.pause(5000);
});

Then(/^I should be logged in successfully$/, function () {
   var login= browser.$("#sideLogin-left-rail > button.button-alt.med").isDisplayed();
   console.log("login button :"+ login);
   assert.isFalse(login); //login button displays= false
   //browser.pause(5000);
   browser.$("//a[@id='global-user-trigger']").click();// logout
   var logt=browser.$("#global-header > div.container > ul > li.user > div > div.global-user-container > ul.account-management > li:nth-child(5) > a").click();
   browser.pause(3000);
});

When(/^I login with invalid user credentials$/, function () {
    var user=$("//input[@type='email']").setValue("invalidusernam@gmail.com");
    var user=$("//input[@type='password']").setValue("909090");
    browser.pause(3000);
    browser.$("#did-ui-view > div > section > section > form > section > div.btn-group.touch-print-btn-group-wrapper > button").click();
    browser.pause(5000);
    
 });

Then(/^I should not get logged in$/, function () {
    var invaliderror= browser.$("#did-ui-view > div > section > div").isDisplayed();
    // console.log("Error message is displayed:"+invaliderror);
    assert.isTrue(invaliderror)
});

When(/^I click on search option$/, function () {
    let ser= $('.search').isEnabled();
    assert.isTrue(ser);
    browser.$('.search').click();
    console.log("Clicked on the search button.");
});

Then(/^I should see user input section$/, function () {
    var userinput=browser.$('//*[@id="global-search"]/input[1]').isDisplayed();
    assert.isTrue(userinput);
    //console.log("search is displaying:"+userinput);

});

// When(/^When I search sports,teams,players$/, function () {
//     console.log(" im seeing this message");
//     var usertext=browser.$('//*[@id="global-search"]/input[1]').setValue("Dhoni");
//     browser.pause(3000);
//     browser.$('.search').click();


 
//  });

//  Then(/^I should see related results for my input$/, function () {
//     var resultsearch=$('//*[@id="fittPageContainer"]/div[2]/div/div/div[3]/section/div/ul/div/div[2]/li/article/a/div/h2/div').isDisplayed();
//     console.log.getText(resultsearch);
// });
