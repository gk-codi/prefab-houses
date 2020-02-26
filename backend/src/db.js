import sqlite from 'sqlite';


const initializeDatabase = async () => {
  const db = await sqlite.open('./database1.sqlite');


  const CheckAdmin=async (props)=>{
    const { username, password } = props; 
      const rows = await db.all(`SELECT * FROM Admin WHERE UserName = '${username}' AND UserPassword = '${password}'`)
        if (rows.length > 0) {
          return true;
          
        } else {
          return false
        }			
        
    }
    
  



  const ReadSubscribe = async () => {
    try {
      const rows = await db.all(`SELECT * FROM Subscribe order by Location `);
      if (rows.length == 0) {
        throw new Error("Subcribe are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any Subscriber");
    }
  };

  const CreateSubscribe = async (props) => {
    const { location, email } = props

    if (!props || !location || !email) {
      throw new Error(`You must provide a location and email`);
    }
    try {
      const result = await db.run(`INSERT INTO Subscribe (Location,Email) VALUES ('${location}', '${email}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteSubscribe = async (id) => {
    try {
      const result = await db.run(`DELETE FROM Subscribe WHERE ID = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`Subscribe with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete subscriber with id ${id}` + err);
    }
  };

  const UpdateSubscribe = async (id, props) => {
    const { location, email } = props;
    if (!props && !(props.location && props.email)) {
      throw new Error(`You must provide a location or an email`);
    }

    let stmt = "";
    if (location && email) {
      stmt = `update Subscribe set Location = '${location}', Email = '${email}' where ID = ${id} `;
      console.log(stmt);
    } else if (location && !email) {
      stmt = `update Subscribe set Location = '${location}' where ID = ${id} `;
    } else {
      stmt = `update Subscribe set  Email = '${email}' where ID = ${id} `;
    }
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`Subscribe with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update Subscribe with ID ${id}` + err);
    }
  };











  const ReadAdmin = async () => {
    try {
      const rows = await db.all(`SELECT * FROM Admin order by UserName `);
      if (rows.length == 0) {
        throw new Error("Admin list are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any Admin");
    }
  };

  const CreateAdmin = async (props) => {
    const { username, password } = props

    if (!props || !username || !password) {
      throw new Error(`You must provide an username and password`);
    }
    try {
      const result = await db.run(`INSERT INTO Admin (UserName,UserPassword) VALUES ('${username}', '${password}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteAdmin = async (id) => {
    try {
      const result = await db.run(`DELETE FROM Admin WHERE ID = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`Admin with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete admin with id ${id}` + err);
    }
  };

  const UpdateAdmin = async (id, props) => {
    const { username, password } = props;
    if (!props && !(props.username && props.password)) {
      throw new Error(`You must provide a username or an password`);
    }

    let stmt = "";
    if (username && password) {
      stmt = `update Admin set UserName = '${username}', UserPassword = '${password}' where ID = ${id} `;
      console.log(stmt);
    } else if (username && !password) {
      stmt = `update Admin set UserName = '${username}' where ID = ${id} `;
    } else {
      stmt = `update Admin set  UserPassword = '${password}' where ID = ${id} `;
    }
    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`Admin with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update Admin with ID ${id}` + err);
    }
  };












  const ReadProduct = async () => {
    try {
      const rows = await db.all(`SELECT * FROM Product `);
      if (rows.length == 0) {
        throw new Error("Product list are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any Product");
    }
  };

  const CreateProduct = async (props) => {
    const { typename } = props

    if (!props || !typename) {
      throw new Error(`You must provide an type of the product`);
    }
    try {
      const result = await db.run(`INSERT INTO Product (TypeName) VALUES ('${typename}')`);
      const id = result.stmt.lastID
      return id
    } catch (err) {
      throw new Error("This combination doesnt work");
    }
  };

  const DeleteProduct = async (id) => {
    try {

      const stmt = `DELETE FROM Product WHERE IDproduct = ${id}`;

      const result = await db.run(stmt);
      if (result.stmt.changes === 0) {
        throw new Error(`Product with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete Product with id ${id}` + err);
    }
  };

  const UpdateProduct = async (id, props) => {
    const { typename } = props;
    if (!props || !props.typename) {
      throw new Error(`You must provide type of the modal`);
    }
    try {
      const result = await db.run(`update Product set TypeName = '${typename}' where IDproduct = ${id} `);
      if (result.stmt.changes == 0) {
        throw new Error(`Product with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update Product with ID ${id}` + err);
    }
  };










  const ReadColor = async () => {
    try {
      const rows = await db.all(`SELECT * FROM Color`);
      if (rows.length == 0) {
        throw new Error("Color list are empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any color");
    }
  };



  const UpdateColor = async (props) => {
    const { type, color } = props;
    if (!props && !(props.type && props.color)) {
      throw new Error(`You must provide a type witha color`);
    }
    let stmt = `update Color set  color = '${color}' where type ='${type}' `;

    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`color with type ${type} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update color with type ${type}` + err);
    }
  };















  const ReadImage = async () => {
    try {
      const rows = await db.all(`SELECT * FROM Image`);
      if (rows.length == 0) {
        throw new Error("Image list is empty!");
      }
      return rows;
    } catch (err) {
      throw new Error("Could not retrieve any Images");
    }
  };

  const CreateImage = async (props) => {
    const { idproduct, image, price  , des , title} = props

    if (!props || !image || !price || !idproduct || !des || !title) {
      throw new Error(`You must provide an image, price , id product , description and title`);
    }
    try {
      if (!isNaN(price) && !isNaN(idproduct)) {
        const result = await db.run(`INSERT INTO Image (Image,Price,IDproduct,Description,Title) VALUES ('${image}', '${price}' , '${idproduct}' ,'${des}' , '${title}')`);
        const id = result.stmt.lastID
        return id 
      } else {
        throw new Error("the id AND THE PRICE SHOULD BE A NUMBER");

      }
    } catch (err) {
      if (err)
        throw new Error(err);
      else
        throw new Error("This combination doesnt work");
    }
  };

  const DeleteImage = async (id) => {
    try {
      const result = await db.run(`DELETE FROM Image WHERE ID = ${id}`);
      if (result.stmt.changes === 0) {
        throw new Error(`Image with id ${id} doesn't exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`could not delete Image with id ${id}` + err);
    }
  };

  const UpdateImage = async (id, props) => {
    const { image, price, idproduct ,des , title} = props;
    if (!props && !(props.image && props.price && props.idproduct &&props.des && props.title)) {
      throw new Error(`You must provide a image or an price or an id product or description or title`);
    }

    let stmt = "";
    if (image && price && idproduct && des && title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', IDproduct = '${idproduct}' , Description = '${des}' , Title = '${title}' where ID = ${id} `;
    } else if (image && price && idproduct && !des && !title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', IDproduct = '${idproduct}' where ID = ${id} `;
    } else if (image && price && idproduct && !des && title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', IDproduct = '${idproduct}', Title = '${title}' where ID = ${id} `;
    } else if (image && price && idproduct && des && !title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', IDproduct = '${idproduct}', Description = '${des}' where ID = ${id} `;
    }
    
    
    else if (image && !price && !idproduct && !des && !title) {
      stmt = `update Image set Image = '${image}' where ID = ${id} `;
    } else if (!image && !price && idproduct && !des && !title) {
      stmt = `update Image set  IDproduct = '${idproduct}' where ID = ${id} `;
    } else if (!image && price && !idproduct && !des && !title) {
      stmt = `update Image set  Price = '${price}' where ID = ${id} `;
    } else if (image && price && !idproduct && !des && !title) {
      stmt = `update Image set Image = '${image}', Price = '${price}' where ID = ${id} `;
    } else if (image && !price && idproduct && !des && !title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}' where ID = ${id} `;
    } else if (!image && price && idproduct && !des && !title) {
      stmt = `update Image set IDproduct = '${idproduct}', Price = '${price}' where ID = ${id} `;
    } else if (image && price && idproduct && !des && !title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}', Price = '${price}' where ID = ${id} `;
    }


    else if (!image && !price && !idproduct && des && !title) {
      stmt = `update Image set Description = '${des}' where ID = ${id} `;
    } else if (!image && !price && idproduct && des && !title) {
      stmt = `update Image set  IDproduct = '${idproduct}', Description = '${des}' where ID = ${id} `;
    } else if (!image && price && !idproduct && des && !title) {
      stmt = `update Image set  Price = '${price}', Description = '${des}' where ID = ${id} `;
    } else if (image && price && !idproduct && des && !title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', Description = '${des}' where ID = ${id} `;
    } else if (image && !price && idproduct && des && !title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}', Description = '${des}' where ID = ${id} `;
    } else if (!image && price && idproduct && des && !title) {
      stmt = `update Image set IDproduct = '${idproduct}', Price = '${price}',Description = '${des}' where ID = ${id} `;
    } else if (image && !price && !idproduct && des && !title) {
      stmt = `update Image set Image = '${image}', Description = '${des}' where ID = ${id} `;
    } else if (image && price && idproduct && des && !title) {
      stmt = `update Image set IDproduct = '${idproduct}', Price = '${price}', Image = '${image}', Description = '${des}' where ID = ${id} `;
    } 


    else if (!image && !price && !idproduct && des && title) {
      stmt = `update Image set Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (!image && !price && idproduct && des && title) {
      stmt = `update Image set  IDproduct = '${idproduct}', Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (!image && price && !idproduct && des && title) {
      stmt = `update Image set  Price = '${price}', Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (image && price && !idproduct && des && title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (image && !price && idproduct && des && title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}', Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (!image && price && idproduct && des && title) {
      stmt = `update Image set IDproduct = '${idproduct}', Price = '${price}',Description = '${des}', Title = '${title}' where ID = ${id} `;
    } else if (image && !price && !idproduct && des && title) {
      stmt = `update Image set Description = '${des}', Title = '${title}', Image = '${image}' where ID = ${id} `;
    } 


    else if (!image && !price && !idproduct && !des && title) {
      stmt = `update Image set Title = '${title}' where ID = ${id} `;
    } else if (!image && !price && idproduct && !des && title) {
      stmt = `update Image set  IDproduct = '${idproduct}', Title = '${title}' where ID = ${id} `;
    } else if (!image && price && !idproduct && !des && title) {
      stmt = `update Image set  Price = '${price}', Title = '${title}' where ID = ${id} `;
    } else if (image && price && !idproduct && !des && title) {
      stmt = `update Image set Image = '${image}', Price = '${price}', Title = '${title}' where ID = ${id} `;
    } else if (image && !price && idproduct && !des && title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}', Title = '${title}' where ID = ${id} `;
    } else if (!image && price && idproduct && !des && title) {
      stmt = `update Image set IDproduct = '${idproduct}', Price = '${price}', Title = '${title}' where ID = ${id} `;
    }  else if (image && !price && !idproduct && !des && title) {
      stmt = `update Image set Image = '${image}', Title = '${title}' where ID = ${id} `;
    } else if (image && price && idproduct && !des && title) {
      stmt = `update Image set Image = '${image}', IDproduct = '${idproduct}', Price = '${price}', Title = '${title}' where ID = ${id} `;
    } 


    try {
      const result = await db.run(stmt);
      console.log(result);
      if (result.stmt.changes == 0) {
        throw new Error(`Image with ID ${id} doesnt exist`);
      }
      return true;
    } catch (err) {
      throw new Error(`Could not update Image with ID ${id}` + err);
    }
  };








  const controller = {
    ReadSubscribe,
    CreateSubscribe,
    DeleteSubscribe,
    UpdateSubscribe,

    ReadAdmin,
    CreateAdmin,
    DeleteAdmin,
    UpdateAdmin,

    ReadProduct,
    CreateProduct,
    DeleteProduct,
    UpdateProduct,

    ReadColor,
    UpdateColor,

    ReadImage,
    CreateImage,
    DeleteImage,
    UpdateImage,

    CheckAdmin


  }
  return controller;

}

export default initializeDatabase;


