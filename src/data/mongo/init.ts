// import mongoose from "mongoose";

// interface ConnectionOptions {
//   mongoUrl: string;
//   dbName: string;
// }

// export class MongoDataBase {
//   static async connect(options: ConnectionOptions) {
//     const { mongoUrl, dbName } = options;

//     try {
//       await mongoose.connect(mongoUrl, {
//         dbName: dbName,
//       });

//       console.log("Mongo Connected");
//     } catch (error) {
//       console.log("Mongo connection error");
//       throw error;
//     }
//   }
// }
