require('dotenv').config();

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: process.env.DB_HOST }),
    };
  };