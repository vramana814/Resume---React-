import React, { Component } from 'react';
import InfoList from './InfoList';

export default class Section4 extends Component {
    infolists ={
        Experience:[
            'GE(Healthcare)',
            'IBM India Private Limited',
            'Tech Mahindra','Mphasis,UK'
        ],
        Summary:[
            'Having around 12 years of rich experience in IT industry and out of that around 10 years’ experience on CRM (both Siebel and Salesforce) and recent 2 years on front end technologies like HTML5,CSS3,BootStrap,Java Script, Type Script, React JS and Redux.',
        'Worked on onsite assignments in countries like USA, UK and South Africa for around 2.5 years.',
        'Strong technical skills in complex website development including web-based applications.',
        'Experience in system analysis, design, workflow architecture, development, testing and maintenance of web based applications.',
        'Experience developing highly interactive web applications utilizing JavaScript, HTML5, CSS, JSON, React JS, and Bootstrap and integrating Restful API',
        'In depth knowledge of web technologies and standards to deliver the best experiences across web and mobile devices including responsive Web UI.',
        'Ability to create beautiful web applications writing top notch HTML5, CSS3, Ajax, JavaScript and Type Script code.',
        'Extensive experience in UI web applications using HTML5, CSS3, JavaScript, XML, AJAX, JSON, Twitter Bootstrap, React JS and Redux.',
        'Good Experience in developing the Single Page Applications using React JS.',
        'Working experience on CSS Background, CSS Positioning, CSS Text, CSS Border, CSS Margin, CSS Padding, CSS Table, Pseudo Classes, Pseudo Elements and CSS Behaviors in CSS.',
        'Expert knowledge in the following UI design practices and concepts: user-centered design, UI heuristics and principles, technical writing, business and user workflow, logical information organization and navigation, prototyping and use case scenarios.',
        'Strong foundation in JavaScript, Type Script along with React JS.',
        'Experienced in designing wireframes, prototypes, information architecture, navigation, visual elements and interface based on usability principles.',
        'Proficiency in building responsive and mobile optimized websites using Bootstrap.',
        'Worked in various version control systems - SVN, GIT and STARTEAM.',
        'Strong Experience in Salesforce CRM and force.com platform both as Administrator and Developer.',
        'Experience in Siebel Configuration, Scripting, Workflow, and Assignment Manager.'

        ],
        Projects:[
            'Kotak Mahindra Bank',
            'Amerisource Bergen Corp',
            'GE(Medical Systems)',
            'IBM Global Account',
            'Veritas','Vodafone',
            'DWP','Elsevier','Allan Gray'
        ]
    } 
  render() {
      const { Experience,Projects, Summary } = this.infolists
    return (
      <div id="Section4" className="p-3 col-8">
        <InfoList heading={'Experience'} list={Experience}></InfoList>
        <InfoList heading={'Projects'} list={Projects}></InfoList>
        <InfoList heading={'Summary'} list={Summary}></InfoList>
      </div>
    )
  }
}