import styled from "@emotion/styled"

const Texto = styled.div`
    text-align:center;
    font-family:'Lato';
    color: #FFF;
    padding: 20px;
    background-color:red;
    font-weight:900px;
    border-radius:10px;
    font-size:20px;
    letter-spacing: 1px;

`
const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error