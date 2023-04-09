import styled from 'styled-components'

export const LoginStyled = styled.div`
width:100vw;
height:100vh;
background: #FFFFFF;
display:flex;
align-items:center;
flex-direction:column;
h2{
font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 68.982px;
line-height: 86px;
text-align: center;
color: #126BA5;
}
>input{
box-sizing: border-box;
width: 303px;
height: 45px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom:6px;

}
input::placeholder{
    margin-left:11px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
> .loginButton{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;
color: #FFFFFF;
    display:flex;
    justify-content:center;
    align-items:center;
background: #52B6FF;
border-radius: 4.63636px;
width: 303px;
height: 45px;
}
> Link > p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;
color: #52B6FF;
}
`