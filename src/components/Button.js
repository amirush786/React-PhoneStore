import styled from 'styled-components';

 export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightblue);
border-color:${props => (props.cart? "red":"var(--lightblue)")};

color:${prop => prop.cart ? "red":"var(--lightblue)"};

border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 1.4rem 0 0;
transition:all 0.6s ease-in-out;
&:hover{
  background:${prop => prop.cart ? "red" : "black"};
  color:${prop => prop.cart ? "black" : "whitesmoke"};
  transform:scale(1.1);
}
&:focus{
  outline:none;
}
`;