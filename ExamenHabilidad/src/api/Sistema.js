
const controller = {}
controller.obtenerEstadion = (req, res, next) => {
    var {id} = req.query;
    console.log(id)
    req.getConnection((err,conn)=>{  
        conn.query(`SELECT 
        S.NAME NOMBRE_SUCURSAL, 
        P.VALUE PRECIO_SUCURSAL, 
        P.PRODUCT PRODUCTO_SUCURSAL,
        SCOM.name as NOMBRE_COMPETIDOR,
        SC.distance as DISTANCIA_COMPETIDOR,
        PCOM.VALUE PRECIO_COMPETIDOR,
        P.VALUE - PCOM.VALUE DIFERENCIA_PRECIO
        FROM 
        prices P, 
        prices PCOM, 
        stations S, 
        stations SCOM, 
        stations_brands SB, 
        brands B,
        stations_competitors SC
        WHERE 
        B.ID=${id} 
        AND B.id = SB.id 
        AND SB.cre_id = S.cre_id 
        AND S.cre_id = P.cre_id
        AND SC.cre_id = S.cre_id
        AND SC.cre_id_competitor = SCOM.cre_id
        AND SCOM.cre_id = PCOM.cre_id
        AND SC.distance <> 0
        AND PCOM.PRODUCT = P.PRODUCT
        ORDER BY DISTANCIA_COMPETIDOR
        LIMIT 10
        `,(err, resultado)=>{
            console.log(err)
            console.log(resultado)
            err?res.status(200).send({mensaje:'Hubo un error en el sistema',estado: false}):res.status(200).send({mensaje:resultado,estado: true});   
        })
       
    })
}

module.exports = controller;
