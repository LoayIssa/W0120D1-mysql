const db = require('./db');


// const findAll = (req,res) => {
//   // const query = `SELECT * FROM users WHERE name = "John"`;
//   const query = `SELECT * FROM users`;
//   db.query(query, (err, result) => {
//     if (err) throw err;
//     console.log('RESULT: ', result);
//     res.json(result)
//   });
// };


// const findEmail = (req,res) => {
//   // const query = `SELECT * FROM users WHERE name = "John"`;
//   const query = `SELECT email FROM users`;
//   db.query(query, (err, result) => {
//     if (err) throw err;
//     console.log('RESULT: ', result);
//     res.json(result)
//   });
// };

// const findJohn = (userName) => {
//   // const query = `SELECT * FROM users WHERE name = "John"`;
//   const query = `SELECT * FROM users WHERE name = ?`;
//   const arr = [userName];

//   // SELECT * FROM users WHERE name = "abd"
//   db.query(query, arr, (err, result) => {
//     if (err) throw err;
//     console.log('RESULT: ', result);
    
//   });
// };
/*_________________ */
const insertNewBook =(req,res)=>{
  const {title,author,published_at,price}=req.body
  const query = `INSERT INTO books  (title, author, published_at, price ) VALUES (?, ?, ?, ?)`;
  const data = [title,author,published_at,price];
  db.query(query,data, (err, result)=>{
    if (err) throw err;
   res.status(201).json(result)
   });

}
/*_________________ */
const getBooks =(req,res)=>{
  const query = `SELECT * FROM books`
  db.query(query, (err, result)=>{
    if (err) throw err;
   res.status(200).json(result)
   });

}
/* ________________*/
const updateBookById =(req,res)=>{
  const {title,author,published_at,price}=req.body
  const query =`UPDATE books SET title=?,author=? ,published_at=?, price=?  WHERE id = ?;`
  const data=[title,author,published_at,price,req.params.book_id]
  db.query(query,data, (err, result)=>{
    if (err) throw err;
   res.status(200).json(result)
   });
    
  
}
/*_________________________ */
const booksDescending = (req,res)=>{
  const query = `SELECT * FROM books  ORDER BY price DESC;`;
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
};
/*____________________ */
const getBookWithoutPrice =(req,res)=>{
  const query = ` SELECT * FROM books where price IS NULL;`
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
  };
  const getBookWithPrice =(req,res)=>{
    const query = ` SELECT * FROM books where price IS NOT NULL;`
  db.query(query, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
  
  };
  



// findJohn();
// findJohn('soiso');

module.exports = {
  insertNewBook,
  getBooks,
  updateBookById,
  booksDescending,
  getBookWithoutPrice,
  getBookWithPrice

};
