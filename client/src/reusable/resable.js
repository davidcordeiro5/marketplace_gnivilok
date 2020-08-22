import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  padding: 20px 150px;
  background-color: ${props => props.bgc ? props.bgc : 'none'};
`;

const FromWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 80%;
  box-shadow: 0px 0px 8px #9c9c9c;
  background-color: #ffbf00;
  border-radius: 15px;
`;

const From = styled.form`
  width: 100%;
  padding: 30px 50px;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  color: #313131;
`;

const InputText = styled.input`
  height: 30px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  margin: 10px 0;
  color: '#313131';
`;

const InputRadio = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 15px;
`;

const FromGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'column' };
  margin: 20px 0;
`;

const InputSubmit = styled.input`
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 8px;
  border: none;
  font-size: 1.3rem;
  text-transform: uppercase;
  background-color: #313131;
  color: #ffffff;
  font-weight: 600;
  margin: 30px 0;
  :hover {
    background-color: #444444;
  }
`;


const CustomButton = styled.button`
  cursor: pointer;
   ${(props) => `
      position:  ${props.position ? props.position : 'unset'};
      top:  ${props.top ? props.top : 'unset'};
      bottom:  ${props.bottom ? props.bottom : 'unset'};
      left:  ${props.left ? props.left : 'unset'};
      right:  ${props.right ? props.right : 'unset'};
      padding:  ${props.padding ? props.padding : '0.5rem 1rem'};
      font-size:  ${props.fontSize ? props.fontSize : '1rem'};
      font-weight:  ${props.fontWeight ? props.fontWeight : '100'};
      background-color: ${props.bgc ? props.bgc : '#fff'};
      color: ${props.color ? props.color : '#000'};
      border: ${props.border ? props.border : 'none'};
      border-radius: ${props.borderRadius ? props.borderRadius : '0'};
  `};
  :hover {
    opacity: 0.9;
  }
  :focus {
    outline:0;
  }
`;


const IconButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgc ? props.bgc : ''};
  border: none;
  border-radius: 5px;
  margin: 0 5px;
  :hover {
    opacity: 0.8;
  }
  :focus {
    outline:0;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
   margin: 5px;
`;


export {
  PageWrapper,
  FromWrapper,
  From,
  FromGroup,
  InputText,
  InputRadio,
  InputSubmit,
  Label,
  CustomButton,
  IconButton,
  Icon,
}
