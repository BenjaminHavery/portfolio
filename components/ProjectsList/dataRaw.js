
// Categories
export const brief = [
        { sc: 'ws', t: 'Website' },
        { sc: 'wa', t: 'Web application' },
        { sc: 'ga', t: 'Game' },
        { sc: 'td', t: '3d' },
        { sc: 'bu', t: 'Build' },
        { sc: 'up', t: 'Updates/additions' },
        { sc: 'ma', t: 'Maintenance' },
        { sc: 'ua', t: 'Authentication' },
        { sc: 'ml', t: 'Multi-language' },
        { sc: 'de', t: 'Design (not my specialty!)' },
      ],
      langs = [
        { sc: 'js', t: 'Javascript' },
        { sc: 'ht', t: 'HTML' },
        { sc: 'cs', t: 'CSS' },
        { sc: 'sc', t: 'SCSS' },
        { sc: 'ph', t: 'PHP' },
        { sc: 'tw', t: 'Twig' },
        { sc: 'sq', t: 'SQL' },
      ],
      tools = [
        { sc: 're', t: 'React' },
        { sc: 'vu', t: 'Vue' },
        { sc: 'no', t: 'Node.js' },
        { sc: 'th', t: 'Three.js' },
        { sc: 'ddd', t: 'D3.js' },
        { sc: 'jq', t: 'JQuery' },
        { sc: 'nx', t: 'Next.js' },
        { sc: 'cr', t: 'Craft CMS' },
        { sc: 'wp', t: 'WordPress' },
        { sc: 'we', t: 'Webpack' },
        { sc: 'gi', t: 'Git' },
      ]


// Shortcodes
const shortcodeMap = (items) => Object.fromEntries(items.map(i => [i.sc, i])),
      b = shortcodeMap(brief),
      l = shortcodeMap(langs),
      t = shortcodeMap(tools);


// Projects and Employers
const items = [ // written in shorthand, gets verbose during parse step
  {
    title: 'Tunnel Fighterz (working title)',
    brief: [b.wa, b.ga, b.td, b.de, b.bu],
    deets: <>
            <p>"Tunnel Fighterz" is an experimental game in which I'm exploring the combination of instanced rendering and interactivity.</p>
            <h4>The following core features are implemented:</h4>
            <ul>
              <li>Instanced rendering of 1000+ "foes" in a single draw call.</li>
              <li>"Player" movable via arrow keys.</li>
              <li>"Tunnel" environment with dynamic dimensions, composed of instance rendered torus geometry.</li>
            </ul>
            <h4>Future features might include:</h4>
            <ul>
              <li>Game mechanics, eg. dodge, shoot, survive for score.</li>
              <li>Colision detection.</li>
              <li>Destruction effects.</li>
              <li>Wave patterns and level progression that makes sense.</li>
            </ul>
          </>,
    langs: [l.js, l.ht, l.cs],
    tools: [t.th, t.nx, t.no, t.re, t.gi],
    links: [{ text: 'Tunnel Fighterz (staging URL)', url: 'https://romantic-thompson-569c30.netlify.app' }],
  },
  {
    title: '"My Wall" demo',
    brief: [b.wa, b.td, b.de, b.bu],
    deets: <>
            <p>This is a project I threw together recently to demonstate a concept: a 3d wall to which users can add graffiti-style messages.</p>
            <h4>The following core features are implemented:</h4>
            <ul>
              <li>Dynamically sized 3d wall, performant via instanced rendering of ~10,000 bricks in a single draw call.</li>
              <li>Graffiti messages attached to the 3d wall.</li>
              <li>Controls for traversing the scene that make some kind of sense on desktop and mobile.</li>
              <li>Basic UI for adding messages to the wall.</li>
            </ul>
            <h4>Future features might include:</h4>
            <ul>
              <li>Fleshed out controls for adding messages, such that the user could select color, typeface, size, line-breaks etc.</li>
              <li>Additional scene detail, for example foreground objects, pavement and sky.</li>
              <li>More dynamic sizing and placement of messages on the wall, compared to the current implementation which is a single row of equally sized and shaped messages with a random offset in the y dimension.</li>
              <li>Infinite wall, loaded/culled based on distance like messages are.</li>
              <li>Integration of a data storage API for syncing messages between user sessions, Google Firebase would be good for this.</li>
              <li>Changed render method for messages, currently projected HTML, to something inside the canvas (SVG sprites or 3d text?) that could be lit and occluded.</li>
            </ul>
          </>,
    langs: [l.js, l.ht, l.cs],
    tools: [t.th, t.nx, t.no, t.re, t.gi],
    links: [{ text: 'My Wall (staging URL)', url: 'https://adoring-curie-e4640c.netlify.app/' }],
  },

  {
    title: 'Todeps',
    brief: [b.wa, b.de, b.bu],
    deets: <>
            <p>Todeps is an in-progress Trello/Jira-esqe productivity application built primarily for demonstration purposes. Its USP is the facility to conveniently tag tasks as depending on other tasks, from which a non-blocking order of operations is inferred.</p>
            <p>I can provide a codebase tour on request for the purpose of assessing my programming style.</p>
          </>,
    langs: [l.js, l.ht, l.cs],
    tools: [t.nx, t.no, t.re, t.gi],
    links: ['todeps.com'],
  },

  {
    type: 'employer',
    title: 'Concert, a Buck company',
    deets: <>
            <p>Concert, a Buck company (formerly Concert Consulting) is a digital and paper communications agency specialising in employment benefits, based in Bristol UK.</p>
            <p>At Concert I was part of a team of three developers (growing to 5 in 2021) responsible for their entire digital portfolio. My role was primarily to build and maintain pension scheme websites in Twig and web applications in Vue, in both cases meeting the ISO 27001 standard for data security used in the sector.</p>
          </>,
    projects: [
      {
        title: 'SAP',
        brief: [b.ws, b.ml, b.bu, b.ma],
        deets: "The SAP website is a new build by me based on the design and content of their previous site. It has three regional variants at present; UK, Ireland and Israel. Each of these contains pensions information, documents and a video library, in addition to a couple of flashy interactive sections.",
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['sapemployeebenefits.co.uk']
      },
      {
        title: 'Concert internal',
        brief: [b.ws, b.bu, b.ma],
        deets: "The latest Concert website replaced the prior one when Concert Consulting was acquired in late 2020. For reasons of secrecy and a surprisingly sudden deal it had to be a fast build by a single developer; I received my first brief sans designs or content a week before the merger!",
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['concertconsult.co.uk'],
      },
      {
        title: 'GE',
        brief: [b.ws, b.wa, b.ua, b.bu, b.ma],
        deets: <>
                <p>The GE website is unique among the rest of Concert's pension information websites in that there is an authentication requirement to view most of the content via WTW's SSO system. It has a video and document library, news section and glossary which defines terms where they appear in body text, the majority of which you won't be able to see unless you happen to have a GE pension.</p>
                <p>Inaccessible to all but members is also a newsletter website, an AVCs website and a Vue app for surveying users, all built by yours truly.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.vu, t.jq, t.gi],
        links: ['mygepension.com'],
      },
      {
        title: 'Nationwide',
        brief: [b.ws, b.bu, b.ma],
        deets: <>
                <p>The Nationwide pension fund site is a new build I colaborated on with other members of the dev team at Concert, containing pensions information, documents, videos and a glossary. It was a poorly managed job that ended up unfinished and bug-heavy less than a week before launch, at which point I was drafted into the project to fix everything and make "bonus" additions like the weird animated dog in the sidebar.</p>
                <p>Concert also provides Nationwide with a newsletter website updated annually, it's getting a little old at this point but I gave a facelift the release before last.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['nationwidepensionfund.co.uk', { text: 'newsletter website', url: 'https://newsletter.nationwidepensionfund.co.uk/' }],
      },
      {
        title: 'RBS / Natwest',
        brief: [b.ws, b.wa, b.bu, b.ma],
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        deets: <>
                <p>The RBS group pension fund website was the first build I worked on at Concert Consulting, subsequently received major feature additions and was then rebranded as the Natwest group pension fund site. It contains pensions information, documents, videos, a glossary which highlights terms on the page and some nice interactive bits and bobs.</p>
                <p>The website also plays host to a Vue application I built for soliciting feedback from users, you can give it a try by visiting the site and choosing to take the survey when prompted.</p>
              </>,
        links: ['natwestgrouppensionfund.co.uk'],
      },
      {
        title: 'London Borough of Southwark',
        brief: [b.ws, b.wa, b.bu, b.ma],
        deets: <>
                <p>The client brief for the Southwark pensions website was essentially "like the one you did for Hackney, but even better so that we can be top of the pile at the next boroughs meeting". Their website contains all the standard pensions information, documents, videos and news, plus a graphical feature-menu I built in the shape of the river Thames.</p>
                <p>The <a href='https://southwarkpensions.co.uk/fund-information'>Thames graphic</a> was a challenging piece because the included items were subject to regular change, so absolute positioning was out of the question. Instead I wrote a complex twig template that output items dynamically along a river route that was also defined in the CMS, in mobile and expanded views, cached on the server against the contents of the menu to ensure that the comparatively slow render would only run once when the menu items changed. This graphic was the product of a single day of frantic protyping and development because my budget for the entire build was about a week, so I was somewhat surprised how well it turned out!</p>
                <p>I also helped build the Southwark digital newsletter website, released annually in sync with their paper newsletter.</p>
                <p>Finally, shortly before leaving Concert I built a proof-of-concept web-app using Vue and Firebase which incorporated video streams, messaging and user avatars moving around in a virtual space. The idea was to produce a digital alternative to their main annual promotional event, although last I heard it has not progressed beyond where I left it.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        links: ['southwarkpensions.co.uk', { text: 'newsletter website', url: 'https://newsletter.southwarkpensions.co.uk/' }],
      },
      {
        title: 'London Borough of Hackney',
        brief: [b.ws, b.bu, b.ma],
        deets: "The Hackney pensions website contains information about pensions and employee benefits for employees of LBH, in addition to news and documents. I only wish a nicer version of their logo were available when we built this or since!",
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['hackneypension.co.uk'],
      },
      {
        title: 'BT',
        brief: [b.ws, b.up, b.ma],
        deets: <>
                <p>The BT pensions website contains pensions information, documents, videos, news and a dynamic glossary which highlights terms on the page. The initial build predates my time at Concert but the site receives regular updates and additions, both of which I have a hand in.</p>
                <p>There is also a BT newsletter website built by a coleague while I was producing the Prudential ones, refreshed and updated by me for the 2019 and 2020 versions.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['btpensions.net', { text: 'newsletter website', url: 'https://btps-newsletter.concertconsult.co.uk/' }],
      },
      {
        title: 'Royal Mail',
        brief: [b.ws, b.wa, b.bu, b.ma],
        deets: <>
                <p>The Royal Mail website is segmented by user status and contains pension information, documents, videos, news and some funky animated bees.</p>
                <p>Also present is a Vue application I built which can be accessed on any page save for the landing page by following the instructions when prompted. Its purpose is to survey users of the website and pass their resposes to a Concert API.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        links: ['rmdcp.uk'],
      },
      {
        title: 'HP',
        brief: [b.ws, b.wa, b.bu, b.ma],
        deets: <>
                <p>The HPRBP site contains information about pensions, plus documents, videos, news and FAQs dealing with the same subject. Content is dynamic based on the scheme membership and employment status of the current user, who is able to provide feedback on their experience by selecting "have your say" on the homepage.</p>
                <p>"Have your say" is a Vue application I built which presents users of the website with a survey question to answer and the option to view the results of the previous survey. It sources data from and submits responses to a custom API written by Concert's backend guru; questions were initially to be updated once a month but this was reduced to once a quarter after the consulting team had trouble coming up with new ones.</p>
                <p>I also built a separate site to serve as the digital version of HP's annual newsletter, "Trustee report to members". This two versions which are served based on the scheme membership of the user.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        links: ['hprbp.com', { text: 'Trustee Report to Members', url: 'https://newsletter.hprbp.com/' }],
      },
      {
        title: 'Prudential',
        brief: [b.ws, b.wa, b.bu, b.ma],
        deets: <>
                <p>The main Prudential Staff Pension Scheme website is actually two websites, one each for members of the DC and DB schemes<sup>1</sup> respectively. Both sites are segmented by employment status and contain pensions information, videos, documents and news, and receive frequent content and feature updates. They also contain a web-app I built which collects user feedback.</p>
                <p>The feedback app can be accessed by selecting "any comments" on the homepage of either website. It's a Vue application which presents users of the website with a survey question to answer and the option to view the results of the previous survey. The app sources data from and submits responses to a custom API written by Concert's backend guru; questions were initially to be updated once a month but this was reduced to once a quarter after the consulting team had trouble coming up with new ones.</p>
                <p>There is also a second, far more complex, web-app I built which allows users to model their projected pension experience based on schemes they're enrolled in, savings they hold and a set of non-linear sliders representing different lifestyle expectations. It is currently under content review at Concert and will likely be exclusive to PSPS members at launch.</p>
                <p>Finally the DB and DC schemes each have an informational newsletter website revised annually, both of which I built at the start of my term at Concert.</p>
                <p><sup>1</sup> Some pension communications inside baseball: DC and DB stand for Defined Contribution and Defined Benefit schemes respectively. It is customary to list them in that order because there are vastly more employees in DC schemes than DB, most employers having chosen to replace their DB schemes with DC ones in recent years because it puts the burden of uncertain investment returns on the employee. Not a trend I'm a fan of, but understandable given that businesses exist to make money and there aren't (unfortunately) any regulations against it.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        links: [
                'prudentialstaffps.co.uk',
                { text: 'DC scheme website', url: 'https://dc.prudentialstaffps.co.uk/' },
                { text: 'DB scheme website', url: 'https://prudentialstaffps.co.uk/home' },
                { text: 'DC newsletter website', url: 'https://prudential-dc-overview.concertconsult.co.uk/' },
                { text: 'DB newsletter website', url: 'https://prudential-db-overview.concertconsult.co.uk/' },
              ]
      },
      {
        title: 'BAA',
        brief: [b.ws, b.wa, b.bu, b.ma],
        deets: <>
                <p>Concert provides 3 digital services to BAA, all of which I was involved with:</p>
                <h4>The BAA pension scheme website</h4>
                <p>This contains a range of pensions and employee benefit information for BAA employees in addition to a document library, news section and glossary. Glossary terms are highlighted where they appear in body text throughout the site. The site was constructed before my time but receives frequent updates and additions, a little over two years of which I am responsible for.</p>
                <h4>The BAA MND elections portal</h4>
                <p>BAA hold elections among their membership for the role of Member Nominated Trustee Director via an online application provided by Concert. The front end of this is built in Vue, to which I made several additions and revisions spanning data management, layout and styles. The app is only available to BAA members during election season so no URL is available to share.</p>
                <h4>The BAA digital newsletter</h4>
                <p>The digital newsletter is a website that receives new content and features on a yearly basis in step with their paper newsletter release. It has a Craft CMS backend like the majority of Concert's sites but presents as an SPA thanks to an AJAX loading method I implemented. I built this site on the bones of an older, more decrepit one, and unfortunately it shows in places; I'm no great fan of the close button, scrollbar and footer on content pages for example.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.vu, t.we, t.jq, t.gi],
        links: ['baapensionscheme.com', { text: 'newsletter website', url: 'https://focus2020.baapensionscheme.com/' }],
      },
      {
        title: 'EDS',
        brief: [b.ws, b.bu, b.ma],
        deets: <>
                <p>The EDS website contains pension and employee benefit information, documents and news for EDS employees. Content is segmented by pension scheme, section and employment status, of which there are <em>many</em> options; 15 sections lead to an enormous number of possible status combinations.</p>
              </>,
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['edspensions.co.uk'],
      },
      {
        title: 'AA',
        brief: [b.ws, b.ma],
        deets: 'The AA website contains a selection of pension information, documents and news for AA employees, segmented by pension scheme and employment status. I was involved in frequent content updates in addition to a few bugfixes and new features.',
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: ['aapensions.com'],
      },
      {
        title: 'Wincanton',
        brief: [b.ws, b.bu, b.ma],
        deets: 'Wincanton had a website for annual newsletter releases produced by Concert a few years back. I upgraded it with a fresh new design and AJAX loading method.',
        langs: [l.tw, l.ht, l.js, l.cs, l.sc, l.ph, l.sq],
        tools: [t.cr, t.we, t.jq, t.gi],
        links: [{ text: 'wincanton.concertconsult.co.uk', url: 'https://wincanton.concertconsult.co.uk/dc/home' }],
      },
      {
        title: 'Thales',
        brief: [b.ws, b.ma],
        deets: 'Thales have a long-in-the-tooth employee benefits website maintained by Concert. My work on this site was limited to infrequent content updates and hotfixes for severe bugs.',
        langs: [l.tw, l.ht, l.js, l.cs, l.ph, l.sq],
        tools: [t.cr, t.jq, t.gi],
        links: ['thales.xpmemberservices.com'],
      },
    ],
  },

  {
    type: 'employer',
    title: 'Rhombus Studio',
    deets: 'During my time as a freelance developer I worked on occasion with Rhombus studio, a digital communications startup in the Bristol area. In addition to collaboration on web projects I established the AWS EC2, S3, SES and Lambda infrastructure used in their tech stack.',
    projects: [
      {
        title: 'Mages group',
        brief: [b.ws, b.up],
        deets: 'Temple Homes is an engineering company in the South West. In collaboration with Rhombus Studio I added new pages, content and functionality to their Twig based website.',
        langs: [l.ht, l.cs, l.js, l.ph, l.tw, l.sq],
        tools: [t.gi, t.jq],
        links: ['mages-group.com'],
      },
      {
        title: 'Temple Homes Property LTD',
        brief: [b.ws, b.bu, b.ma],
        deets: 'Temple Homes is a Bristol based estate agency, for whom I built a custom Wordpress theme for their existing website based on a design by Rhombus Studio.',
        langs: [l.ht, l.cs, l.js, l.ph, l.sq],
        tools: [t.wp, t.jq],
        links: ['templehomes.co.uk']
      },
    ],
  },

  {
    title: 'Impact Mentoring',
    brief: [b.wa, b.bu],
    deets: <>
            <p>Impact mentoring are an award winning Bristol company providing mentorship to young people in the South West, for whom I wrote an appointment management tool in the form of a web application. They use a Trello based system to manage mentor-mentee appointments and distribute them to staff and clients digitally; this was a workable solution when the number of appointments was small but became unmanageable as the business grew. The most pressing issues were:</p>
            <ul>
              <li>Their system had no way to detect appointment conflicts, leaving mentors at risk of being double booked.</li>
              <li>The Trello UI had no way to separte date, location and participant information into separate fields, meaning that appointments had to be accurately entered as a single string and then (hopefully) parsed by a sorting tool another developer had built.</li>
            </ul>
            <p>To mitigate this I built a frontend interface using D3 which could read and write to their existing dataset. The new interface warns of conflicting appointments, has specific fields with validation and displays items in a calender view where they can be dragged, dropped and resized. It also has options for cloning appointments or marking them as recurring, which reportedly saves the team a ton of time compared to manually copying recurring appointments into new Trello cards and then manually adding dates.</p>
          </>,
    langs: [l.ht, l.cs, l.js],
    tools: [t.ddd],
    links: [{ text: 'More information about Impact Mentoring', url: 'https://www.impactmentoring.co.uk/' }]
  },
  {
    title: 'Wild Source Apothecary',
    brief: [b.ws, b.up, b.ma],
    deets: 'Wild Source is a Bristol based skincare and lifestyle brand opperating primarily through an e-commerce website. On a freelance basis I restyled the site, added new pages and provided technical support for their tempermental WooCommerce integration.',
    langs: [l.ht, l.cs, l.ph],
    tools: [t.wp],
    links: ['wildsource.co.uk'],
  },

];

export default items
