const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  // insert data into the table
  await saveOrphanage(db, {
    // lat: '-20.3853452',
    // lng: '-43.5035672',
    // name: 'Lar das Meninas',
    // about:
    //   'Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vunerabilidade social.',
    // whatsapp: '31985695478',
    // images: [
    //   'https://1djpjq2tu7u32cn9vx36pdku-wpengine.netdna-ssl.com/wp-content/uploads/2015/03/Happy-Girls.png',
    //   'https://www.childaustralia.org.au/wp-content/uploads/2020/07/children-cute-enjoyment-1432697-1024x683.jpg',
    // ].toString(),
    // instructions:
    //   'Venha como se sentir a vontade e traga muito amor e paciência.',
    // opening_hours: 'Horário de visitas Das 8h até às 18h',
    // open_on_weekends: '1',
  });

  // console.log(await db.all('SELECT * FROM orphanages'));
});
