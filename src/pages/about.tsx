import React from "react";
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <p>
        My name is Jason Telfer and I am a web developer from Brisbane,
        Australia. I enjoy creating fast, responsive and accessible web
        applications with the React, Node and Java ecosystems. My favourite
        languages are Java and JavaScript but I have dabbled with many more. I
        am particularly interested in learning Go and Kotlin.
      </p>
      <h2>Skills</h2>
      <div className="skills-container">
        <div>
          <h3>Most experienced with</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>React</li>
            <li>Gatsby</li>
            <li>Spring Framework</li>
            <li>Node</li>
            <li>GraphQL</li>
            <li>Docker</li>
            <li>Linux</li>
          </ul>
        </div>
        <div>
          <h3>Some experience with</h3>
          <ul>
            <li>JavaEE</li>
            <li>TypeScript</li>
            <li>Apollo Server</li>
            <li>Prisma</li>
            <li>Jest</li>
            <li>JUnit</li>
            <li>Chakra UI</li>
            <li>Primefaces</li>
            <li>Bootstrap</li>
            <li>React Router</li>
            <li>MySQL</li>
            <li>Postgres</li>
          </ul>
        </div>
        <div>
          <h3>Needing experience with</h3>
          <ul>
            <li>SQL</li>
            <li>CMS</li>
            <li>Concurrency</li>
            <li>Concurrency 😜</li>
            <li>Bash scripting</li>
            <li>Regular expressions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
