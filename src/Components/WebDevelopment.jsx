import React from 'react'
import web from "../web.webp"
import wb2 from '../wb2.jpg'

export default function WebDevelopment() {
  return (
    <div className="flex flex-col p-10 justify-center max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        Frontend Developer Roadmap 2025:<br /> The Complete Guide
      </h1>
      <img src={web} alt="web-Development" className="w-1/2 m-auto  mt-6 rounded-lg shadow-lg" />
      <p className="mt-4 text-lg">
        Want to become a frontend developer? This guide is here to help. Whether you're just starting out or already know a bit, it will show you what’s important and help you build the right skills.
      </p>
      <p className="mt-4 text-lg">
        When I first started, I spent months on the wrong tutorials because I didn’t know where to start or what to focus on. This guide is made to help you avoid that and get on the right path faster.
      </p>
      <p className="mt-4 text-lg">
        As we go through the guide, I’ll give you a rough idea of how long each skill might take to learn, plus an overall time estimate at the end. Keep in mind, it depends on how much time you can put in each day — so stick around to see how it all comes together!
      </p>
      <h2 className="text-2xl font-bold mt-6">Essential Skills</h2>
      <p className="mt-4 text-lg">
        Let’s start with the basics — these are the first things you’ll need to learn.
      </p>
      <img src={wb2} alt="Html+CSS+JS" className="w-1/2 m-auto mt-6 rounded-lg shadow-lg" />
      <h3 className="text-xl font-semibold mt-6"><a className='text-blue-500 underline' href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'>1. HTML</a></h3>
      <p className="mt-2 text-lg">
        HTML structures content on the web, like text, links, and forms. Think of it as the skeleton of a web page.
      </p>
      <h3 className="text-xl font-semibold mt-6"><a className='text-blue-500 underline' href='https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics' target='_blank'>2. CSS</a></h3>
      <p className="mt-2 text-lg">
        CSS styles your HTML, controlling layout, colors, and spacing.
      </p>
      <h3 className="text-xl font-semibold mt-6"><a className='text-blue-500 underline' href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'>3. JavaScript</a></h3>
      <p className="mt-2 text-lg">
        JavaScript brings your website to life with interactive features. It's a must-have skill for any frontend developer. Start by learning the strong basics — things like variables, functions, loops, and conditions. Once you're comfortable with those, move on to the DOM (Document Object Model), which lets you change what's shown on the page based on user actions.
      </p>
      <h3 className="text-xl font-semibold mt-6">4. Workspace Setup</h3>
      <p className="mt-2 text-lg">
        Set up your tools for coding:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Code Editor: Use <a className='text-blue-500 underline' href='https://code.visualstudio.com/' target='_blank'>VS Code.</a></li>
          <li>Extensions: Add tools like Prettier (for formatting) and ESLint (for error detection).</li>
        </ul>
      <h3 className="text-xl font-semibold mt-6">5. Version Control with <a className='text-blue-500 underline' href='https://github.com/' target='_blank'>GitHub</a> and <a className='text-blue-500 underline' herf="https://git-scm.com/" target='_blank'>Git</a></h3>
      <p className="mt-2 text-lg">
        Learn to track changes in your code and collaborate with others.
      </p>
      <h3 className="text-xl font-semibold mt-6">6. Frontend Frameworks (<a className='text-blue-500 underline' herf="https://react.dev/" target='_blank' >React</a>, <a className='text-blue-500 underline' herf='https://angular.dev/' target='_blank'>Angular</a>, and <a className='text-blue-500 underline' herf='https://vuejs.org/' target='_blank'>Vue.js</a> )</h3>
      <p className="mt-2 text-lg">
        Once you're comfortable with JavaScript, the next step is learning a frontend framework — and React is the best place to start.
        While other options like Vue.js and Angular exist, React is a great choice because:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>It’s the most widely used framework in the industry.</li>
          <li>There are more job opportunities for React developers than for other frameworks.</li>
          <li>It has a huge community, so you’ll find tons of tutorials, tools, and support.</li>
        </ul>
       <p> Learning React will open doors and take your frontend skills to the next level.
      </p>
      <h3 className="text-xl font-semibold mt-6">7.<a className='text-blue-500 underline' herf='https://tailwindcss.com/' target='_blank'>Tailwind CSS</a> </h3>
      <p className="mt-2 text-lg">
        Tailwind CSS is a utility-first CSS framework that helps you quickly style your applications with pre-built classes.
      </p>
      <h3 className="text-xl font-semibold mt-6">8. State Management like <a className='text-blue-500 underline' herf="https://redux.js.org/" target='_blank' >Redux JS</a> and Others</h3>
      <p className="mt-2 text-lg">
        Learn to manage your application’s state using tools like Redux. This will help you handle more complex applications with better data flow.
      </p>

      {/* Testing Tools Section */}
      <h3 className="text-xl font-semibold mt-6">9. Testing Tools</h3>
      <p className="mt-2 text-lg">
        Testing is crucial to ensure your code works correctly and is free of bugs. These tools will help you write and run tests for your applications:</p>
      <ul className="list-disc pl-6 mt-2">
          <li><strong><a className='text-blue-500 underline' herf="https://jestjs.io/" target='_blank'>Jest</a></strong>: A popular JavaScript testing framework for unit tests.</li>
          <li><strong><a className='text-blue-500 underline' herf="https://testing-library.com/docs/react-testing-library/intro/" target='_blank'>React Testing Library</a></strong>: A library for testing React components.</li>
      </ul>
        <p>
        Testing ensures that your applications run smoothly and reduces the chance of bugs in production.
      </p>

      {/* Like Button */}
      <h1 className='font-bold text-3xl mt-8'>Youtube Links</h1>
      <ul className='list-disc pl-6 mt-2'>
        <li className='mt-2'><strong>JavaScript</strong> :
        <br/> <a  className='text-blue-500 underline  mt-2' target='_blank' herf="https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&feature=shared">Namaste JavaScript</a><br/>
        <a className='text-blue-500 underline  mt-2' herf="https://youtube.com/@roadsidecoder?feature=shared" target='_blank'>RoadsideCoder</a> <br/>
        <a className='text-blue-500 underline  mt-2' herf="https://youtu.be/hKB-YGF14SY?feature=shared" target='_blank'>CodeWithHarry
        </a><br/>
        <a className='text-blue-500 underline  mt-2' herf="https://youtube.com/playlist?list=PLRAV69dS1uWSxUIk5o3vQY2-_VKsOpXLD&feature=shared" target='_blank'>Hitesh Choudhary

        </a></li>
        <li className='mt-2'><strong>React</strong> :
        <br/> <a  className='text-blue-500 underline  mt-2' target='_blank' herf="https://namastedev.com/learn/namaste-react">Namaste React</a><br/>
        <a className='text-blue-500 underline  mt-2' herf="https://youtube.com/@roadsidecoder?feature=shared" target='_blank'>RoadsideCoder</a><br/>
        <a className='text-blue-500 underline  mt-2' herf="https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&feature=shared" target='_blank'>Chai aur reacts</a></li>
      </ul>


    </div>
  );
}
