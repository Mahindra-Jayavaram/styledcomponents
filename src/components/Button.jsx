import styled from "styled-components";


const Button = styled.button`

margin : auto;
background-color : ${({theme})=>
    theme === "light" ? "skyblue" : "pink"
};
color : ${({theme})=> theme === "light" ? "skyblue" : "pink"}
border-radius : 5px;

&:hover{
    color : black;
    background-color: yellow;
}
`

export {Button};