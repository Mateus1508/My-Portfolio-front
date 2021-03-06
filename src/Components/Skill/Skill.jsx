import React from 'react';
import {AiFillHtml5} from 'react-icons/ai'
import {GrMysql} from 'react-icons/gr'
import {SiCsharp, SiAzuredevops, SiAdobephotoshop, SiPhp} from 'react-icons/si'
import {FaReact, FaBootstrap, FaSass, FaNodeJs, FaGitAlt, FaGithub} from 'react-icons/fa'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io5'



import { Languages, Skills } from './skillStyle'; 

const Skill = () => {
  return (  
    <Languages id="Skill" data-aos="zoom-in">
      <h1>Habilidades</h1>
      <section>
      <Skills className="frontend" data-aos="fade-right">
        <h2>Frontend</h2>
        <div>
          <article>
            <h4>HTML5</h4>
            <AiFillHtml5 className="icon"/>
          </article>
          <article>
            <h4>CSS3</h4>
            <IoLogoCss3 className="icon"/>
          </article>
          <article>
            <h4>Javascript</h4>
            <IoLogoJavascript className="icon" />
          </article>
          <article>
            <h4>React</h4>
            <FaReact className="icon" />
          </article>
          <article>
            <h4>Bootstrap</h4>
            <FaBootstrap className="icon" />
          </article>
            <article>
              <h4>Sass</h4>
              <FaSass className="icon"/> 
            </article>
          </div>
        </Skills>
        <Skills className="backend" data-aos="fade-down">
          <h2>Backend</h2>
          <div>
            <article>
              <h4>MySQL</h4>
              <GrMysql className="icon" />
            </article>
            <article>
              <h4>C#</h4>           
              <SiCsharp className="icon"/>
            </article>
            <article>
              <h4>PHP</h4>
              <SiPhp className="icon"/>
            </article>
            <article>
              <h4>Node</h4>            
              <FaNodeJs className="icon"/>
            </article>
          </div>
        </Skills>    
          <Skills className="Outros" data-aos="fade-left">
            <h2>Outros</h2>
            <div>
            <article>
              <h4>Azure DevOps</h4>            
              <SiAzuredevops className="icon"/>
            </article>
            <article>
              <h4>Git</h4>                    
              <FaGitAlt className="icon" />
            </article>
            <article>
              <h4>Github</h4>         
              <FaGithub className="icon"/>
            </article>
            <article>
              <h4>Photoshop</h4>            
              <SiAdobephotoshop className="icon" />
            </article>
            </div>
          </Skills>
      </section>
        
    </Languages>
  );
}
export default Skill;





