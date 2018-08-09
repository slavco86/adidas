module.exports.homeContent = function homeContent(route) {
  return route.path === '/men' ? { franchises: 'Men' } : { franchises: 'Women' };
};

module.exports.franchiseContent = function franchiseContent(route, content) {
  const { gender, franchise } = route.params;

  return { content: content[gender].filter(obj => obj.franchise === franchise).pop().content };
};


const content = { men: 'Men', women: 'Women' };
