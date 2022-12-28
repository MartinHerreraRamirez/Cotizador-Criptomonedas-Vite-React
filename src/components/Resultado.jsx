import styled from "@emotion/styled"

const Contenedor = styled.div`
    color:#fff;
    font-family: 'lato';
    display:flex;
    align-items:center;
    gap:3rem;
`

const Precio = styled.p`    
    font-size:24px;
    span{
        font-weight:700;
    }  
`

const Texto = styled.p`
    font-size:18px;
    span{
        font-weight:500;
    }  
`

const Imagen = styled.img`
    display:block;
    width:120px;
`

const Resultado = ({cotizacion}) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

  return (

    <Contenedor>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen cripto" 
        />

        <div>
        <Precio>El precio es: <span>{PRICE}</span></Precio>
        <Texto>Precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}%</span></Texto>
        <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>

    </Contenedor>

  )
}

export default Resultado