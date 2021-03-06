import styled from 'styled-components/macro';

export const Description = styled.div`
 height: max-content;
 display: grid;
 grid-template-columns: 3fr 1fr;
 grid-template-rows: 1fr 1fr;
 @media (max-width: 600px) {
   display: flex;
   flex-direction: column;
   
  }
  h1{
    text-align: center;
    margin: 2.5rem 0 1rem 0;
    font-size: 4rem;
    grid-column: 1/3;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 3em;
    }
  } 
  p{
    color: #fff;
    font-size: 16px;
    justify-self: center;
    margin: 0 1rem 0 3rem ;
    padding-right: 2rem; 
    border-right: 1px solid #90e0ef;
    align-self: center;
    text-align: justify;
    @media (max-width: 600px) {
      border-right: none;
      margin: 1rem 3rem;
      padding: 0;     
    }
  }
  section{
    color: #fff;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
      align-self: center;
      margin: 0;
    }
    h3{
      align-self: center;
      font-size: 24px;
      margin: 0.5rem;
      @media (max-width: 600px) {
        align-self: center;
        margin: 0;
      }
    }
    div{
      align-self: center;
      display: flex;
      flex-direction: row;
      @media (max-width: 600px) {
        align-self: center;
        margin: 0 0 3rem 0;
      }
      .icon{
        margin: 1rem;
        font-size: 48px;
        animation: turn 1s linear infinite normal;
        color: #000;
        :nth-child(2){
          animation: kick 1s ease-in infinite alternate;
          color: #CD3813;
        }
        :nth-child(3){
          animation: pulse .5s ease-out infinite normal;
          color: #662C91;
        }
      }
    }

  }
  @keyframes turn {
    to{
      transform: rotateZ(1turn) ;
    }
  }
  @keyframes kick {
    from{ transform: translateY(-5px) rotateZ(-0.2turn) }
    to{ transform: translateY(5px) rotateZ(0turn) }
  }
  @keyframes pulse {
    from{ transform: scale(0.9) }
    to{ transform: scale(1) }
  }

`
