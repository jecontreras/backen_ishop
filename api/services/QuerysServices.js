module.exports = async(modelo, query)=>{
  let resultado = Object();
  let skip = query.page || 0;
  let limit = query.limit || 10;
  let result = Object();
  if (!query.where) {
  query = {
    where: query
  };
  }
  let count = query.where;
  let filtro = {};
  if( query.sort ) filtro.sort = query.sort;
  else query.sort = 'createdAt DESC';
  filtro.where = query.where;
  console.log("***********", query, filtro)

  if(query.populate){
    if(query.skip) resultado = await modelo.find({where: query.where, sort: query.sort}).populate(query.populate).paginate(skip, limit)
    else resultado = await modelo.find({where: query.where, sort: query.sort}).populate(query.populate)
  }else resultado = await modelo.find({where: query.where, sort: query.sort}).paginate(skip, limit);

  // query.populate ? 
  // resultado = await modelo.find(filtro).populate(query.populate).paginate(skip, limit) : 
  // resultado = await modelo.find(filtro).paginate(skip, limit) ;
  
  result.data = resultado;
  resultado = await modelo.count(count);
  result.count = resultado;
  return result;
};