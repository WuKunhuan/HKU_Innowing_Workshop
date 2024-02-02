
async function testImport() {
  try {
    const module = await import('./order.js');
    const order = module.order;
    console.log("Retrieved order");
    return order;
  } catch (error) {
    console.log("The order for the path not found.");
    return [];
  }
}

testImport()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
