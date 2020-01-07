module.exports = async(modelo, query)=>{
    let resultado = Object();
    let skip = query.paginate || 0;
    let limit = query.limit || 10;
    let result = Object();
    if (!query.where) {
		query = {
			where: query
		};
    }
    let count = query;
    resultado = await Articulo.find(query.where).paginate(skip, limit) ;
    console.log("***********",resultado, [modelo][0])
    // query.populate ? 
    // resultado = await [modelo].find(query.where).populate(query.populate).paginate(skip, limit) : 
    // resultado = await [modelo].find(query.where).paginate(skip, limit) ;
    
    result.mensaje = resultado;
    resultado = await [modelo].count(count);
    result.count = resultado;
    return result;
};