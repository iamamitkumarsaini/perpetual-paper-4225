

function navbar(){

return `
<div id="first-part">

    <a href="./index.html" id="logo"><img src="https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg" alt="" id="logo-image"></a>
    <a href="./whygusto.html" id="why-gusto">Why Gusto</a>
    <div id="payroll">
        <h4 id="payroll-heading">Payroll and more</h4>
        <i class="fa-solid fa-angle-down" id="payroll-icon"></i>
        <div id="payroll-part">

            <div id="payroll-part-first">
                <div class="payroll-box" id="box1">
                <h5><a href="payrollpage.html">Payroll</a></h5>
                <p>Automatic deductions and filings, direct deposits, W-2s, and 1990s</p>
                </div>
                <div class="payroll-box" id="box2">
                <h5><a href="emp_benefits.html">Employee benefits</a></h5>
                <p>Health benefits, automatic savings, 401(k)s, and more</p>
                </div>
                <div class="payroll-box">
                <h5>Hiring and onboarding</h5>
                <p>Offer letters, checklists, software setup and more</p>
                </div>
                <div class="payroll-box">
                <h5>Time tools</h5>
                <p>Simple time tracking, time-off requests, and PTO policies</p>
                </div>
                <div class="payroll-box" id="box5">
                <h5>HR experts</h5>
                <p>Direct access to certified HR professionals and other resources</p>
                </div>
                <div class="payroll-box" id="box6">
                <h5>Gusto Wallet</h5>
                <p>A free employee app for smart saving and spending</p>
                </div>
            </div>
            <div id="payroll-part-second">
                <div id="see-demo">See Demo</div>
                <div id="integrations">Integrations</div>
            </div>
            
        </div>

        
    </div>

    <div id="pricing">
        <a href="#">Pricing</a>
    </div>

    <div id="accountant">
        <h4 id="accountant-heading">For Accountants</h4>
        <i class="fa-solid fa-angle-down" id="accountant-icon"></i>
        <div id="accountant-part">
            <div id="accountant-part-first">
            <div class="accountant-box">
                <h5>Become a partner</h5>
                <p>Grow your accounting or bookkeeping practice</p>
            </div>
            <div class="accountant-box" id="people-advisory">
                <h5><a href="people_Advisory.html">People Advisory</a></h5>
                <p>Combine financial expertise with people-focused advising</p>
            </div>
            <div class="accountant-box">
                <h5>Gusto Pro</h5>
                <p>Save time with Gusto's modern accounting dashboard</p>
            </div>
            <div class="accountant-box">
                <h5>Trainings</h5>
                <p>Get People Advisory Certified and take the Accelerator course</p>
            </div>
            <div class="accountant-box" id="accountant-part-box5">
                <h5>Gusto partner blog</h5>
                <p>Get tools and advice for modern accountants</p>
            </div>
            <div class="accountant-box" id="accountant-part-box6">
                <h5>Gusto Next 2022</h5>
                <p>Sign up for our live accounting event on September 27 + 28</p>
            </div>
            </div>
        </div>


    </div>

    <div id="built">
        <h4 id="built-heading">Built for you</h4>
        <i class="fa-solid fa-angle-down" id="built-icon"></i>
        <div id="built-part">
            <div id="built-part-first">
                <div class="built-box">
                <h5>Starting a business?</h5>
                <p>Set your new business up with payroll, benefits, and more</p>
                </div>
                <div class="built-box" id="built-part-box2">
                <h5>Need a new provider?</h5>
                <p>Transfer your payroll, benefits, and HR from another provider</p>
                </div>
            </div>
        </div>

    </div>

    
</div>
<div id="second-part">

   <div id="search">
    <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
    <button id="search-button">Search</button>
   </div>

   <a href="./signInPage.html" id="sign-in">Sign in</a>
    <div id="create-account-container">
        <a href="./signUpPage.html" id="create-account">Create Account</a>
    </div>
   
    
</div>`

;



}

function footer(){

    return `<div id="footer-head">
    <h1>Get your team working with Gusto.</h1>
    <p><a href="./signUpPage.html">Create account</a></p>
 </div>


 <div id="footer-second-div">
    <div>
        <div>
            <h4>Pricing</h4>
            <p>Starting at just $46 per month</p>
        </div>
        <div>
            <h4>Built for you</h4>
            <p>Starting a business</p>
            <p>Switching to Gusto</p>
            <p>Working remotely</p>
            <p>Why Gusto</p>
        </div>
        <div>
            <h4>For Accountants</h4>
            <p>Become a partner</p>
            <p>People Advisory</p>
            <p>Trainings</p>
            <p>Gusto Pro</p>
            <p>Gusto partner blog</p>
            <p>Gusto Next 2022</p>
        </div>
        <div>
            <h4>For Developers</h4>
            <p>Gusto Embedded Payroll</p>
            <p>Build apps with Gusto</p>
            <p>Developer tools</p>
        </div>
    </div>
    <div>
        <div>
            <h4>Get started</h4>
            <p>Interactive Demo</p>
            <p>Contact Sales — (800) 936-0383</p>
        </div>
        <div>
            <h4>Services</h4>
            <P>People platform</P>
            <P>Full-service payroll</P>
            <P>Employee Benefits</P>
            <P>Health Benefits</P>
            <P>Financial Benefits</P>
            <P>Time and attendance</P>
            <P>Hiring and onboarding</P>
            <P>Talent management</P>
            <P>Insights and reporting</P>
            <P>Workers' compensation</P>
            <P>Gusto Wallet</P>
        </div>
    </div>
    <div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Careers — We're hiring!</p>
          <p>Press</p>
          <p>News</p>
          <p>Investors</p>
          <p>Contact</p>
          <p>Affiliate program</p>
        </div>
        <div>
            <h4>Licenses</h4>
            <p>Gusto Capital, LLC NMLS ID: 1845463</p>
            <p>ZenPayroll, Inc. NMLS ID: 1737896</p>
        </div>
        <div>
            <h4>Support</h4>
            <p>Help Center</p>
            <p>Talk to support — Sign in</p>
        </div>
    </div>
    <div>
        <div>
            <h4>Resources</h4>
            <p>Customer stories</p>
            <p>Customer reviews</p>
            <p>Compare</p>
            <p>Partner Directory</p>
            <p>Business Guides</p>
            <p>FAQs</p>
            <p>Security</p>
            <p>Integrations</p>
        </div>
        <div>
            <h4>Tools</h4>
            <p>Small Business Financial Relief</p>
            <p>Employer tax calculator</p>
            <p>Burn rate calculator</p>
            <p>New hire checklist</p>
        </div>
    </div>
 </div>

 <div id="footer-third-div">
    <h4> <span>Talk Shop:</span> Business resources</h4>
    <div id="footer-thirdpart-div">
        <div>
            <h4>Talk Shop blog</h4>
            <p>Advice and information for growing businesses and their teams</p>
        </div>
        <div>
            <p>Running payroll</p>
            <p>Employee benefits</p>
            <p>Health insurance</p>
            <p>People management</p>
        </div>
        <div>
            <p>Workers' comp</p>
            <p>Starting a business</p>
            <p>Business finances</p>
        </div>
        <div>
            <p>Hiring</p>
            <p>Growth</p>
            <p>Taxes</p>
        </div>
    </div>
 </div>

 <div id="footer-fourth-div">
    <div>
        <div>
            <h4>Gusto © 2022 </h4>
            <p>Brokers</p>
            <p>Privacy</p>
            <p>Accessbility</p>
            <p>Terms</p>
            <p>Licences</p>
        </div>
        <div>
            <i class="fa-brands fa-facebook-f footer-icons"></i>
            <i class="fa-brands fa-twitter footer-icons"></i>
            <i class="fa-brands fa-linkedin-in footer-icons"></i>
            <i class="fa-brands fa-instagram footer-icons"></i>
        </div>
    </div>
    
 </div>`;

}


export {navbar, footer};