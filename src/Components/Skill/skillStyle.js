import styled from "styled-components/";

export const Languages = styled.section`
  display: flex;
  flex-direction: column;
  height: max-content;
  width: 100vw;
  h1{
    grid-area: title; 
  }

section {
  display: flex;
  justify-content: center;
  @media (max-width:1200px){
    flex-direction: column;
    place-items: center;
  }
}
`;
export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    max-width: 450px;
    border: 1rem;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    box-shadow: 0 0 10px #90e0ef; 
    @media (max-width: 1200px) {
     width: 50vw;
    }
    @media (max-width: 750px) {
     width: 60vw;
    }
    @media (max-width: 600px) {
     width: 70vw;
    }
    @media (max-width: 540px) {
     width: 90vw;
    }
    h2{
      text-align: center;
      align-self: center;
      color: #fff;
      background-color: transparent;
      margin: 1rem 0 1rem 0;
      @media (max-width: 1200px) {
          text-align: center;
          font-size: 25px;
          font-weight: bold;
      }
      @media (max-width: 1200px) {
          text-align: center;
          font-size: 23px;
          font-weight: bold;
      }
    }
    div{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      margin: 1rem;
      background: transparent;
      max-height: max-content;
      justify-items: center;     
      @media (max-width: 1200px) {   
      }      
      @media (max-width: 500px) {
          grid-template-columns: 1fr 1fr;
          grid-template-areas: "1 1"
                              "2 2";
        justify-items: center;     
        margin-bottom: 1rem;   
      }      
      }
    
          article{
            display: grid;
            border-radius: 10px;
            grid-template-columns: 1fr;
            grid-template-areas: "h4"
            "img"
            "small";
            padding: 1rem 2rem;
            margin: 0 .5rem 0 .5rem;
            margin-top: .1rem;
            height: 9rem;
            width: 7rem;
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            background: rgb(2, 62, 138, 0.5);
            box-shadow: 0 0 5px #90e0ef; 
            transition: 0.5s;
        }
          h4{
            font-family: 'Bebas Neue', cursive;
              letter-spacing: 0.09rem;
              font-weight: normal;
              grid-area: h4;
              align-self: center;
              justify-self: center;
              text-align: center;
              background: transparent;
              color: #ffff;
            }
            .icon{
              height: 3rem;
              color: #ffff;
              width: 3rem;
              align-self: center;
              justify-self: center;
              grid-area: img;
              background: transparent;
              transition: 0.5s;
              &:hover{
                transform: scale(1.2);
              }
              }
            small{
              align-self: center;
              justify-self: center;
              grid-area: small;
              text-align: center; 
              background: transparent;        
            }
      `;